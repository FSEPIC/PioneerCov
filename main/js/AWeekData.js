 // <!--Author:徐明睿--> // <!--CreateTime:2020-07-9--> // <!--Update:2020-07-12-->
 //导入到数据库更新(陈威)
  // <!--CreateTime:2020-07-10-->
//获取日期，s回退天数
let days=function(s){
	var time = (new Date).getTime() - s * 24 * 60 * 60 * 1000;
	var yesday = new Date(time); // 获取的是前一天日期
	yesday = yesday.getFullYear() + "-" + (yesday.getMonth()> 9 ? (yesday.getMonth() + 1) : "0" + (yesday.getMonth() + 1)) + "-" +(yesday.getDate()> 9 ? (yesday.getDate()) : "0" + (yesday.getDate())); //字符串拼接转格式：例如2018-08-19
	yesday=String(yesday);
	return yesday					 		
}
//获取当天数据
let getData=function(s){
	var d;
	var x=days(s);
	$.ajax({
	           cache: false,
	           async: false,
	           type: 'post',
	           data: { aaa: "1" },
	           url: `http://api.tianapi.com/txapi/ncov/index?key=26fb3c91613073bbf3a2e0b2d327c72e&date=${x}`,
	           success: function (data) {
	               d = data.newslist[0].desc;
	           }
	       });
	var D=new Array(d.currentConfirmedCount,d.deadIncr,d.curedIncr,d.suspectedIncr)
	var Day=new Array(x);
	var DayD = Day.concat(D);
	return DayD;					
}
let enterbase = function(s,data){
	$.ajax({
	cache: false,
    async: false,
    type: 'get',
    data: { date: days(s), pat: data[1], deat: data[2], cur: data[3], add: data[4]},
    url: 'http://121.199.63.142:8090/addaweek',
    success: function () {
		console.log("增加数据");
    }})
}
let startbyd = function(s){
		var day = new Array();
		var findata = new XMLHttpRequest();
		var x = days(s);
		var byd = new Array();
		$.ajax({
		cache: false,
           async: false,
           type: 'GET',
           data: { date: x },
           url: 'http://121.199.63.142:8090/finddata',
           success: function (data) {
			var d = new Array(data.Date,data.pat,data.deat,data.cur,data.add);
			byd = d;
           },
			error:function(){
				console.log("失败查询，准备添加数据");
				byd = getData(s);
				enterbase(s,byd);
			}
		})
		console.log(byd);
		return byd;
}
//时间数组
var ayD=[days(6),days(5),days(4),days(3),days(2),days(1),days(0)]
//数据数组
var byD=[startbyd(6),startbyd(5),startbyd(4),startbyd(3),startbyd(2),startbyd(1),startbyd(0)];	
var myChart = echarts.init(document.getElementById('AWeek'));
var option = {
	tooltip: {
		trigger: 'axis',
	},
	legend: {
		data: ['患病人数', '死亡病例', '治愈病例', '新增病例']
	},
	grid: {
		left: '3%',
		right: '8%',
		bottom: '10%',
		containLabel: true
	},
	toolbox: {
		feature: {
		saveAsImage: {}
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data:ayD
	},
	yAxis: {
		type: 'value'
	},
	dataset:{
		source:	byD
	},
	dataZoom:[
		{
			type: 'slider',
			show: true,
			xAxisIndex: [0],
			start: 0,
			end: 100
		},
		{
			type: 'slider',
			show: true,
			yAxisIndex: [0],
			left: '93%',
			start: 0,
			end: 100
		},
		{
			type: 'inside',
			xAxisIndex: [0],
			start: 0,
			end: 100
		},
		{
			type: 'inside',
			yAxisIndex: [0],
			start: 0,
			end: 100
		}
	], 
	series: [
		{
			name: '患病人数',
			type: 'line',
			encode:{x:0,y:1}
		},
		{
			name: '死亡病例',
			type: 'line',
			encode:{x:0,y:2}      
		},
		{
			name: '治愈病例',
			type: 'line',
			encode:{x:0,y:3}	
		},
		{
			name: '新增病例',
			type: 'line',
			encode:{x:0,y:4}
		}					
	]
};
myChart.setOption(option);