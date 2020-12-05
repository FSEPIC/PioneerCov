 // <!--Author:徐明睿-->
 // <!--CreateTime:2020-07-14-->
 // <!--Update:2020-07-18-->  		
		var d = new Object();
		var oBox = document.querySelector('.box');   //获取.box元素
		var oCon = document.querySelector('.con');//获取input框
		var oBtn = document.querySelector('.send-btn');//获取发送按钮
		var cW = 2*oCon.offsetWidth;   //获取box的宽度
		var cH = oBox.offsetHeight;   //获取box的高度
		var message = '';   //弹幕内容初始化
		function toDB(m,t){
			$.ajax({
			           cache: false,
			           async: false,
			           type: 'post',
			           data: { Message: m , Time: t},
			           url: 'http://121.199.63.142:8090/sendbarrage',
			           success: function (data) {
							console.log(data.isOK)
			           }
			});
		}	
		function fromDB(){
			$.ajax({
				cache: false,
				async: false,
				type: 'post',
				data: {},
				url: 'http://121.199.63.142:8090/getbarrage',
				success: function (data) {
					d=data.barrage;
					for(da in data.barrage){
						// alert(data.barrage[da].message);
					}
				}
			});
		}
		fromDB();
		function lose() {
			document.onkeydown = function (e) { // 回车提交表单
			    var theEvent = window.event || e;
			    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
			    if (code == 13) {										
			    }
			}
		}
		function Enter() {
			document.onkeydown = function (e) { // 回车提交表单
			    var theEvent = window.event || e;
			    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
			    if (code == 13) {
			        send();
			    }
			}
		}	
		function send() {
		    //获取oCon的内容					
			oCon = document.querySelector('.con');//new
			oBox = document.querySelector('.box');//new
			cW = 2*oCon.offsetWidth;
			cH = oBox.offsetHeight;
		    if (oCon.value.length <= 0 || (/^\s+$/).test(oCon.value)) {
		        alert('请输入弹幕');
		        return false;
		    }
		    message = oCon.value;
		    //console.log(message);
		    //生成标签
		    createEle(message);   //执行节点创建模块
		    oCon.value = ''; 			  //收尾工作清空输入框
			
			var vid = document.getElementById("vid");
			var currentTime=vid.currentTime;
			toDB(message,currentTime);						 
		}			
		function createEle(txt) {
		    //动态生成span标签
		    var oMessage = document.createElement('span');   //创建标签
		    oMessage.innerHTML = txt;   //接收参数txt并且生成替换内容
		    oMessage.style.left = cW + 'px';  //初始化生成位置x
		    oBox.appendChild(oMessage);   //把标签塞到oBox里面
		    roll.call(oMessage, {
		        //call改变函数内部this的指向
		        timing: ['linear', 'ease-out'][~~(Math.random() * 2)],
		        color: '#' + (~~(Math.random() * (1 << 24))).toString(16),
		        top: random(0, cH),
		        fontSize: random(16, 32)
		    });
		}
		function roll(opt) {
		    //弹幕滚动
		    //如果对象中不存在timing 初始化
		    opt.timing = opt.timing || 'linear';
		    opt.color = opt.color || '#fff';
		    opt.top = opt.top || 0;
		    opt.fontSize = opt.fontSize || 16;
		    this._left = parseInt(this.offsetLeft);   //获取当前left的值
		    this.style.color = opt.color;   //初始化颜色
		    this.style.top = opt.top + 'px';
		    this.style.fontSize = opt.fontSize + 'px';
		    this.timer = setInterval(function () {
		        if (this._left <= 100) {
		            clearInterval(this.timer);   //终止定时器
		            this.parentNode.removeChild(this);
		            return;   //终止函数
		        }
		        switch (opt.timing) {
		            case 'linear':   //如果匀速
		                this._left += -2;
		                break;
		            case 'ease-out':   //
		                this._left += (0 - this._left) * .01;
		                break;
		        }
		        this.style.left = this._left + 'px';
		    }.bind(this), 1000 / 60);
		}
		function random(start, end) {
		    //随机数封装
		    return start + ~~(Math.random() * (end - start));
		}
		function sleep(delay) {
		    var start = (new Date()).getTime();
		    while((new Date()).getTime() - start < delay) {
		        continue;
		    }
		}
		function autoSend(){	
			oCon = document.querySelector('.con');//new
			oBox = document.querySelector('.box');//new
			cW = 2*oCon.offsetWidth;
			cH = oBox.offsetHeight;
			fromDB();
			var i=0;
			var vid = document.getElementById("vid");	
			for(da in d){	
				if(i<10){
					if(d[da].time>=vid.currentTime){					
						createEle(String(d[da].message)); 					
						i=i+1;
					}
				}
				else{
					break;				
				}			
			}				
		}
		