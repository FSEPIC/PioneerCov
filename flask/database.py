import pymysql.cursors
import json
from flask import Flask,request,render_template,jsonify
from flask_cors import *
import random

app = Flask(__name__)

CORS(app,resources=r'/*')
def open():
    return pymysql.Connect(
        host='*********',
        port=3306,
        user='saltfish',
        passwd='saltfishno.2',
        db='saltfish',
        charset='utf8'
    )

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#指定日期返回所需信息
@app.route('/finddata',methods=['GET','POST'])
def finddata():
    connect = open()
    cursor = connect.cursor()
    s=[]
    sql = "SELECT * FROM Aweek WHERE Date = '%s' "
    cursor.execute(sql % request.values.get('date'))
    for row in cursor.fetchall():
        for l in row:
            s.append(l)
    s = {"Date":s[0],"pat":s[1],"deat":s[2],"cur":s[3],"add":s[4]}
    print(s)
    print('共查找出', cursor.rowcount, '条数据')
    if cursor.rowcount==0:
        connect.close()
        return json.dumps(s)
    connect.close()
    return jsonify(s)


#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#网页获取一周的数据并存入数据库
@app.route('/addaweek',methods=['GET','POST'])
def adddata():
    connect = open()
    cursor = connect.cursor()
    print('ok')
    sql = "INSERT INTO Aweek (Date, Patients, Deaths, Cured, Addp) VALUES ( '%s', %d, %d, %d, %d )"
    date = request.values.get('date')
    print(date)
    pat = request.values.get('pat')
    print(pat)
    deat = request.values.get('deat')
    print(deat)
    cur = request.values.get('cur')
    print(cur)
    add = request.values.get('add')
    print(add)
    data = (date,int(pat),int(deat),int(cur),int(add))
    cursor.execute(sql % data)
    connect.commit()
    print(cursor.rowcount)
    print('ok')
    connect.close()
    return render_template('enter.html')


#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#登陆，提供账号密码查询是否存在
@app.route('/login',methods=['GET','POST'])
def login():
    connect = open()
    cursor = connect.cursor()
    sql = "SELECT * FROM Users WHERE Password = '%s' AND id = '%s'"
    data = (request.values.get('password'),request.values.get('id'))
    cursor.execute(sql % data)
    usersinfo = {"isOK":0}
    for ok in cursor.fetchall():
        if ok != None:
            usersinfo = {"id" : ok[0],"uname":ok[1],"sex":ok[2],"birth":ok[3],"password":ok[4],"isOK":1}
            connect.close()
            return jsonify(usersinfo)
    connect.close()
    return jsonify(usersinfo)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#注册，自动生成密码
@app.route('/register',methods=['GET','POST'])
def register():
    connect = open()
    cursor = connect.cursor()
    sql = "INSERT INTO Users (id,uname,sex,birth,Password) VALUES ('%s','%s','%s','%s','%s')"
    flag = 1
    userid = str(random.randint(100000,999999))
    while(flag):
        try:
            data = (userid, request.values.get('uname'), request.values.get('sex'), request.values.get('birth'),
                    request.values.get('password'))
            cursor.execute(sql % data)
            connect.commit()
            flag = 0
        except:
            connect.rollback()
            userid = str(random.randint(100000,999999))
    re = {"userid":userid,'password':request.values.get('password'),"isOK":1}
    connect.close()
    return jsonify(re)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#提交评论到数据库
@app.route('/commentinput',methods=['GET','POST'])
def comment():
    connect = open()
    cursor = connect.cursor()
    sql = "INSERT INTO U_P(pno,id,content,reDate) VALUES ('%s','%s','%s','%s')"
    data = ('001',request.values.get('id'),request.values.get('content'),request.values.get('reDate'))
    try:
        cursor.execute(sql % data)
        connect.commit()
        s={"isOK":1}
        connect.close()
        return jsonify(s)
    except:
        s={"isOK":0}
        connect.close()
        return jsonify(s)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#评论加载，从数据库到前端
@app.route('/commentreload',methods=['GET','POST'])
def commentreload():
    connect = open()
    cursor = connect.cursor()
    sql = "SELECT * FROM U_P"
    cursor.execute(sql)
    s={"isOK":1}
    data = []
    for comment in cursor.fetchall():
         d = {"pno":comment[0],"id":comment[1],"content": comment[2],"reDate":comment[3]}
         data.append(d)
    s = {"isOK":1,"data" : data}
    connect.close()
    return jsonify(s)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#发送弹幕到数据库
@app.route('/sendbarrage',methods=['GET','POST'])
def sendbarrage():
    connect = open()
    cursor = connect.cursor()
    sql = "INSERT INTO Barrage(Message,Time) VALUES ('%s',%.7f)"
    data=(request.values.get('Message'),float(request.values.get('Time')))
    cursor.execute(sql % data)
    connect.commit()
    s = {"isOK": 1}
    connect.close()
    return jsonify(s)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#获取所有弹幕信息与时间
@app.route('/getbarrage',methods=['GET','POST'])
def getallbarrage():
    connect = open()
    cursor = connect.cursor()
    sql = "SELECT * FROM Barrage ORDER BY Time ASC"
    cursor.execute(sql)
    s = {"isOK": 1}
    data = []
    for barrage in cursor.fetchall():
        d = {"message":barrage[0],"time":barrage[1]}
        data.append(d)
    s = {"isOK": 1,"barrage":data}
    connect.close()
    return jsonify(s)

#作者：陈威
#创建时间：2020-07-15
#更新时间：2020-07-16
#获取医院信息
@app.route('/hospital',methods=["POST","GET"])
def hospital():
    connect = open()
    cursor = connect.cursor()
    city = request.values.get('city')
    s=[]
    sql = "SELECT * FROM Hospital where city='%s'"
        # 执行SQL语句
    cursor.execute(sql%city)
        # 获取所有记录列表
    results = cursor.fetchall()
    data = []
    for row in results:
        d = {"Province": row[0], "city": row[1], "name": row[2]}
        data.append(d)
    s = {"isOK": 1,"data":data}
    connect.close()
    return jsonify(s)

#作者：陈威
#创建时间：2020-07-25
#更新时间：2020-07-26
#通过id获取相关用户信息
@app.route('/idfinduser',methods=["POST","GET"])
def findid():
    connect = open()
    cursor = connect.cursor()
    id = request.values.get('id')
    s = []
    sql = "SELECT * FROM Users where id = '%s'"
    # 执行SQL语句
    cursor.execute(sql % id)
    # 获取所有记录列表
    usersinfo = {"isOK": 0}
    for ok in cursor.fetchall():
        if ok != None:
            usersinfo = {"id": ok[0], "uname": ok[1], "sex": ok[2], "birth": ok[3], "password": ok[4], "isOK": 1}
            connect.close()
            return jsonify(usersinfo)
    connect.close()
    return jsonify(usersinfo)

#作者：陈威
#创建时间：2020-07-25
#更新时间：2020-07-26
#通过id获取用户评论
@app.route('/getcontentid',methods=["POST","GET"])
def getcontentid():
    connect = open()
    cursor = connect.cursor()
    id = request.values.get('id')
    s = {"isOK" : 0}
    sql = "SELECT * FROM U_P where id = '%s'"
    # 执行SQL语句
    cursor.execute(sql % id)
    content = []
    for c in cursor.fetchall():
        d = {"id":c[1],"content":c[2],"redate":c[3]}
        content.append(d)
    s = {"isOK":1,"data":content}
    connect.close()
    return jsonify(s)

#作者：陈威
#创建时间：2020-07-25
#更新时间：2020-07-26
#删除评论
@app.route('/delcontent',methods=["POST","GET"])
def delcontent():
    connect = open()
    cursor = connect.cursor()
    id = request.values.get('id')
    s = {"isOK" : 0}
    sql = "DELETE FROM U_P WHERE id = '%s' AND content = '%s' AND reDate = '%s'"
    d = (request.values.get('id'),request.values.get('content'),request.values.get('reDate'))
    # 执行SQL语句
    cursor.execute(sql % d)
    connect.commit()
    connect.close()
    return jsonify({"isOK" : 1})

if __name__ == '__main__':
    app.run(host='0.0.0.0')

