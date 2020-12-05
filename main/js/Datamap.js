 // <!--Author:陈威--> // <!--CreateTime:2020-07-9--> // <!--Update:2020-07-12-->
var d = new Object()
function getdata(){
	$.ajax({
		cache: false,
		async: false,
		type: 'post',
		data: { aaa: "1" },
		url: "http://api.tianapi.com/txapi/ncovcity/index?key=26fb3c91613073bbf3a2e0b2d327c72e",
		success: function (data) {
			d = data;
		}
	});
}
getdata();
console.log(d.msg);
console.log(d);
var da = [
			{ name: '北京', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '天津', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '上海', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '重庆', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '河北', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '河南', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '云南', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '辽宁', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '黑龙江', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '湖南', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '安徽', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '山东', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '新疆', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '江苏', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '浙江', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '江西', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '湖北', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '广西', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '甘肃', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '山西', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '内蒙古', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '陕西', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '吉林', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '福建', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '贵州', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '广东', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '青海', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '西藏', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '四川', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '宁夏', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '海南', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '台湾', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '香港', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '澳门', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0},
			{ name: '南海诸岛', selected: false, value: 0 ,suCount: 0,ConfirmedCount: 0}
		] //各省地图颜色数据依赖value
// 基于准备好的dom，初始化echarts实例
var mapBoxEchart = echarts.init(document.getElementById('container'));
// 指定相关的配置项和数据
mapBoxEchart.showLoading();
for(DFM in da){
	for(DFA in d.newslist){
		if(d.newslist[DFA].provinceShortName == da[DFM].name){
			da[DFM].value = d.newslist[DFA].currentConfirmedCount;
			da[DFM].suCount = d.newslist[DFA].suspectedCount;
			da[DFM].ConfirmedCount = d.newslist[DFA].confirmedCount;
		}
	}
}

var mapBoxOption = {
	tooltip:{
		trigger:'item',
		formatter:function(da){
			return "当地疫情情况 <br>" + da.name + ":<br> 共计" + da.value + "人确诊<br>疑似病例" + da.data.suCount +"人<br>累积" +da.data.ConfirmedCount +"人确诊" ;
		}
	},
	series: [
		{
		type: 'map',
		mapType: 'china',
		label: {
			normal: {
				show: false, //显示省份标签
				textStyle: {
					color: "#ad191f"
				} //省份标签字体颜色
			},
			emphasis: { //对应的鼠标悬浮效果
				show: true,
				textStyle: {
					color: "#800080"
				}
			}
		},
		aspectScale: 0.75,
		zoom: 1.2,
		itemStyle: {
			normal: {
				borderWidth: .5, //区域边框宽度
				borderColor: '#8088e9', //区域边框颜色
				areaColor: "#ffefd5", //区域颜色
			},
			emphasis: {
				borderWidth: .5,
				borderColor: '#4b0082',
				areaColor: "#ffdead",
			}
		},
		data: da
	}],
	dataRange: {
		x: '-1000 px', //图例横轴位置
		y: '-1000 px', //图例纵轴位置
		splitList: [
			{ start: 1, end: 5, label: '北京', color: '#f6a8b3' },
			{ start: 5, end: 10, label: '天津', color: '#fb7b8e' },
			{ start: 11, end: 20, label: '上海', color: '#ff8483' },
			{ start: 21, end: 30, label: '重庆', color: '#e85f62' },
			{ start: 30, end: 50, label: '河北', color: '#ff6b6c' },
			{ start: 51, end: 100, label: '河南', color: '#f8484d' },
			{ start: 101, end: 500, label: '云南', color: '#ff5040' },
			{ start: 501, end: 1000, label: '辽宁', color: '#ef2a1e' },
			{ start: 7001, end: 10000, label: '黑龙江', color: '#c30022' },
			{ start: 10001, end: 9999999999, label: '湖南', color: '#94060d' }
		]
	}, //各省地图颜色；start：值域开始值；end：值域结束值；label：图例名称；color：自定义颜色值；
};
// 使用制定的配置项和数据显示图表
mapBoxEchart.hideLoading();
mapBoxEchart.setOption(mapBoxOption);
// echart图表自适应
window.addEventListener("resize", function() {
	mapBoxEchart.resize();
});