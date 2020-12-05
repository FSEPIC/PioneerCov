// --Author:闫顺兴、邱景妍--
// --CreateTime:2020-07-10--
// --Update:2020-07-18--

function get_radio_value(name){
			var rets = document.getElementsByName(name);
			for (var i=0;i<rets.length;i++) {
				if (rets[i].checked){
					return rets[i].value;
				}
			}
			return "0";
		}
		function Function(){
			var temperature=document.getElementById("temperature").value;
			temperature=temperature.replace(/ /g,"");
			if (temperature == "")
			{
				alert("请输入体温！");
				return;
			}
			var IsCough=get_radio_value("IsCough") == "1";
			var IsSulking=get_radio_value("IsSulking") == "1";
			var IsCrowd=get_radio_value("IsCrowd") == "1";
			var level=0.0;
			if(temperature>=38.0)
			{
				level+=2.0;
				if(IsCough==true)
				{
					level=level+0.5;
				}
				if(IsSulking==true)
				{
					level=level+0.5;
				}
				if(IsCrowd==true)
				{
			        level=level+1;
				}
			}
			else if(temperature>=37.2)
			{
				level+=1.0;
			    if(IsCough==true)
			    {
				    level=level+0.5;
			    }
			    if(IsSulking==true)
			    {
				    level=level+0.5;
			    }
			    if(IsCrowd==true)
			    {
				    level=level+1;
			    }
			}				
			else
			{
				if(IsCough==true)
				{
				    level=level+0.2;
				}
				if(IsSulking==true)
				{
				    level=level+0.3;
				}
				if(IsCrowd==true)
				{
				    level=level+0.5;
				}
			}
			document.getElementById("myPar").innerHTML="你的感染风险系数为："+level;
		}