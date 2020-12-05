var t;
var app = new Vue({
			el:'#app',
			data() {
	      return {
			  id:'',
			activeName: 'first',
	        word: '',
			city:'',
			newslist:[
				{
				id:'',
				date:'',
				title:'',
				explain:'',
				imgsrc:'',
				markstyle:'',
				desc:'',
				author:'',
				url:'',
			},
			],
			hospital:[
				{
				  Province:'',
				  city:'',
				  name:'',
			},
			],
	      }
	    },
				created:function(){
							 
							 var url = location.href;//获取用户ID
							 var reg = new RegExp("(^|\\?|&)"+ "id" +"=([^&]*)(\\s|&|$)", "i");
							 if (reg.test(url)) this.id=unescape(RegExp.$2.replace(/\+/g, " "));
							 t=this.id;
							 // alert(this.id);
				},
		methods:{
			submit(){
				document.getElementById("yylogo").innerHTML="";
				document.getElementById('sb').style.opacity=1;
			  	axios.post('http://api.tianapi.com/txapi/rumour/index?key=8d5b9b1a816c8c794b49ae9512b7ad16&word='+this.word)
			  			  .then( (response)=> {
							  for(d in response.data.newslist){
								  if(response.data.newslist[d].imgsrc == null){
									  console.log(response.data.newslist[d].imgsrc);
									  response.data.newslist[d].imgsrc = "./img/1.png"
									  console.log(response.data.newslist[d].imgsrc);
								  }
							  }
							this.newslist=response.data.newslist;
							console.log(this.newslist)
			  			  })
			  			  .catch(function (error) {
			  			    console.log(error);
			  			  });
				
			  			  },
			outPatient(){
				document.getElementById('red').innerHTML="";
				document.getElementById('hp').style.opacity=1;
			  	axios.post('http://121.199.63.142:8090/hospital?city='+this.city)
			  			  .then( (response)=> {
							this.hospital=response.data.data;
							console.log(this.hospital)
			  			  })
			  			  .catch(function (error) {
			  			    console.log(error);
			  			  });
						},
						checkMyInfo(){				window.location.href = 'userInfo.html?id='+this.id;			},
			openRumour(s){
				window.open(s);	  
				},
		}
		})
		