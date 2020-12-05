

let getTime=function(){					
	var time = new Date(); 					
	time = time.getFullYear() + "-" + (time.getMonth()> 9 ? (time.getMonth() + 1) : "0" + (time.getMonth() + 1)) + "-" +(time.getDate()> 9 ? (time.getDate()) : "0" + (time.getDate())) + " " + (time.getHours()> 9 ? (time.getHours()) : "0" + (time.getHours()))+ ":" +(time.getMinutes()> 9 ? (time.getMinutes()) : "0" + (time.getMinutes())); 					
	time=String(time);
	return time;					 		
}	

var comment='';
var user=t;
var id;


function getinput(){
	$.ajax({
	           cache: false,
	           async: false,
	           type: 'post',
	           data: { content: document.getElementById('send').value , reDate:getTime(),id:user},
	           url: 'http://121.199.63.142:8090/commentinput',
	           success: function (data) {
	           }
	});
	comment = '<div class="comm">'+ getTime() + "<br> " + getname(user) + ": " + document.getElementById('send').value + '</div>'+'<br>'+ comment;
	document.getElementById("i").innerHTML=comment;
}
function getname(id){
	var name;
	$.ajax({
		cache: false,
	    async: false,
	    type: 'post',
	    data: {id : id },
		url:'http://121.199.63.142:8090/idfinduser',
		success:function(data){
			name = data.uname;
		}
	});
	return name;
}
$.ajax({
	           cache: false,
	           async: false,
	           type: 'post',
	           data: {},
	           url: 'http://121.199.63.142:8090/commentreload',
	           success: function (data) {
					for(d in data.data){
						comment ='<div class="comm">'+ data.data[d].reDate + "<br> " + getname(data.data[d].id) + ": " + data.data[d].content + '</div>'+'<br>'+ comment;
					}
					document.getElementById("i").innerHTML=comment;
	           }
	});

	
