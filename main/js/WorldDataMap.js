 // <!--Author:徐明睿--> // <!--CreateTime:2020-07-13--> // <!--Update:2020-07-16-->
var d = new Object()
function getdata(){
	$.ajax({
		cache: false,
		async: false,
		type: 'post',
		data: { aaa: "1" },
		url: "http://api.tianapi.com/txapi/ncovabroad/index?key=4674779ee8419ebe45771f584f986c1c",
		success: function (data) {
			d = data.newslist;
		}
	});
}
getdata();
//console.log(d);
var da = [
			{ name: 'United States' ,sname: "美国", selected: false,value: 0,total: 0},			
			{ name: 'Brazil' ,sname: '巴西', selected: false,value: 0,total: 0},
			{ name: 'India' ,sname: '印度', selected: false,value: 0,total: 0},
			{ name: 'United Kingdom' ,sname: '英国', selected: false,value: 0,total: 0},
			{ name: 'Russia' ,sname: '俄罗斯', selected: false,value: 0,total: 0},
			{ name: 'South Africa' ,sname: '南非', selected: false,value: 0,total: 0},
			{ name: 'Colombia' ,sname: '哥伦比亚', selected: false,value: 0,total: 0},
			{ name: 'Bangladesh' ,sname: '孟加拉国', selected: false,value: 0,total: 0},
			{ name: 'Mexico' ,sname: '墨西哥', selected: false,value: 0,total: 0},
			{ name: 'Peru' ,sname: '秘鲁', selected: false,value: 0,total: 0},
			{ name: 'Spain' ,sname: '西班牙', selected: false,value: 0,total: 0},
			{ name: 'Pakistan' ,sname: '巴基斯坦', selected: false,value: 0,total: 0},
			{ name: 'Sweden' ,sname: '瑞典', selected: false,value: 0,total: 0},
			{ name: 'France' ,sname: '法国', selected: false,value: 0,total: 0},
			{ name: 'Argentina' ,sname: '阿根廷', selected: false,value: 0,total: 0},
			{ name: 'Ecuador' ,sname: '厄瓜多尔', selected: false,value: 0,total: 0},
			{ name: 'Saudi Arabia' ,sname: '沙特阿拉伯', selected: false,value: 0,total: 0},
			{ name: 'Egypt' ,sname: '埃及', selected: false,value: 0,total: 0},
			{ name: 'Indonesia' ,sname: '印度尼西亚', selected: false,value: 0,total: 0},
			{ name: 'Bolivia' ,sname: '玻利维亚', selected: false,value: 0,total: 0},
			{ name: 'Belgium' ,sname: '比利时', selected: false,value: 0,total: 0},
			{ name: 'Philippines' ,sname: '菲律宾', selected: false,value: 0,total: 0},
			{ name: 'Netherlands' ,sname: '荷兰', selected: false,value: 0,total: 0},
			{ name: 'Panama' ,sname: '巴拿马', selected: false,value: 0,total: 0},
			{ name: 'Canada' ,sname: '加拿大', selected: false,value: 0,total: 0},
			{ name: 'Dominia' ,sname: '多米尼亚', selected: false,value: 0,total: 0},
			{ name: 'Iraq' ,sname: '伊拉克', selected: false,value: 0,total: 0},
			{ name: 'Ukraine' ,sname: '乌克兰', selected: false,value: 0,total: 0},
			{ name: 'Honduras' ,sname: '洪都拉斯', selected: false,value: 0,total: 0},
			{ name: 'Kazakhstan' ,sname: '哈萨克斯坦', selected: false,value: 0,total: 0},
			{ name: 'Guatemala' ,sname: '危地马拉', selected: false,value: 0,total: 0},
			{ name: 'Iran' ,sname: '伊朗', selected: false,value: 0,total: 0},
			{ name: 'Chile' ,sname: '智利', selected: false,value: 0,total: 0},
			{ name: 'Israel' ,sname: '以色列', selected: false,value: 0,total: 0},
			{ name: 'Oman' ,sname: '阿曼', selected: false,value: 0,total: 0},
			{ name: 'Portugal' ,sname: '葡萄牙', selected: false,value: 0,total: 0},
			{ name: 'Nigeria' ,sname: '尼日利亚', selected: false,value: 0,total: 0},
			{ name: 'Italy' ,sname: '意大利', selected: false,value: 0,total: 0},
			{ name: 'Turkey' ,sname: '土耳其', selected: false,value: 0,total: 0},
			{ name: 'Afghanistan' ,sname: '阿富汗', selected: false,value: 0,total: 0},
			{ name: 'Armenia' ,sname: '亚美尼亚', selected: false,value: 0,total: 0},
			{ name: 'Puerto Rico' ,sname: '波多黎各', selected: false,value: 0,total: 0},
			{ name: 'Kuwait' ,sname: '科威特', selected: false,value: 0,total: 0},
			{ name: 'Romania' ,sname: '罗马尼亚', selected: false,value: 0,total: 0},
			{ name: 'Serbia' ,sname: '塞尔维亚', selected: false,value: 0,total: 0},
			{ name: 'UAE' ,sname: '阿联酋', selected: false,value: 0,total: 0},
			{ name: 'Poland' ,sname: '波兰', selected: false,value: 0,total: 0},
			{ name: 'Belarus' ,sname: '白俄罗斯', selected: false,value: 0,total: 0},
			{ name: 'Azerbaijan' ,sname: '阿塞拜疆', selected: false,value: 0,total: 0},
			{ name: 'Venezuela' ,sname: '委内瑞拉', selected: false,value: 0,total: 0},
			{ name: 'Kenya' ,sname: '肯尼亚', selected: false,value: 0,total: 0},
			{ name: "CÃ´te d'Ivoire" ,sname: '科特迪瓦', selected: false,value: 0,total: 0},
			{ name: 'Germany' ,sname: '德国', selected: false,value: 0,total: 0},
			{ name: 'Nepal' ,sname: '尼泊尔', selected: false,value: 0,total: 0},
			{ name: 'Kyrgyzstan' ,sname: '吉尔吉斯斯坦', selected: false,value: 0,total: 0},
			{ name: 'Palestine' ,sname: '巴勒斯坦', selected: false,value: 0,total: 0},
			{ name: 'Costa Rica' ,sname: '哥斯达黎加', selected: false,value: 0,total: 0},
			//{ name: 'French Guiana' ,sname: '法属圭亚那', selected: false,value: 0,total: 0},法国
			{ name: 'Moldova' ,sname: '摩尔多瓦', selected: false,value: 0,total: 0},
			{ name: 'Uzbekistan' ,sname: '乌兹别克斯坦', selected: false,value: 0,total: 0},
			{ name: 'Haiti' ,sname: '海地', selected: false,value: 0,total: 0},
			{ name: 'El Salvador' ,sname: '萨尔瓦多', selected: false,value: 0,total: 0},
			{ name: 'Algeria' ,sname: '阿尔及利亚', selected: false,value: 0,total: 0},
			{ name: 'Germany' ,sname: '德国', selected: false,value: 0,total: 0},
			{ name: 'Singapore' ,sname: '新加坡', selected: false,value: 0,total: 0},
			{ name: 'Czech Rep.' ,sname: '捷克', selected: false,value: 0,total: 0},
			{ name: 'Japan' ,sname: '日本', selected: false,value: 0,total: 0},
			{ name: 'Sudan' ,sname: '苏丹', selected: false,value: 0,total: 0},
			{ name: 'Bahrain' ,sname: '巴林', selected: false,value: 0,total: 0},
			{ name: 'Congo' ,sname: '刚果（金）', selected: false,value: 0,total: 0},//
			{ name: 'Luxembourg' ,sname: '卢森堡', selected: false,value: 0,total: 0},
			{ name: 'Bulgaria' ,sname: '保加利亚', selected: false,value: 0,total: 0},			
			{ name: 'Bosnia and Herzegovina' ,sname: '波黑', selected: false,value: 0,total: 0},
			{ name: 'Ghana' ,sname: '加纳', selected: false,value: 0,total: 0},
			{ name: 'North Macedonia' ,sname: '北马其顿', selected: false,value: 0,total: 0},
			{ name: 'Cameroon' ,sname: '喀麦隆', selected: false,value: 0,total: 0},
			{ name: 'Qatar' ,sname: '卡塔尔', selected: false,value: 0,total: 0},
			{ name: 'Ethiopia' ,sname: '埃塞俄比亚', selected: false,value: 0,total: 0},
			{ name: 'Central African Rep.' ,sname: '中非共和国', selected: false,value: 0,total: 0},
			{ name: 'Denmark' ,sname: '丹麦', selected: false,value: 0,total: 0},
			{ name: 'Mauritania' ,sname: '毛里塔尼亚', selected: false,value: 0,total: 0},
			{ name: 'Mayotte' ,sname: '马约特', selected: false,value: 0,total: 0},
			{ name: 'Madagascar' ,sname: '马达加斯加', selected: false,value: 0,total: 0},
			{ name: 'Senegal' ,sname: '塞内加尔', selected: false,value: 0,total: 0},
			{ name: 'Gabon' ,sname: '加蓬', selected: false,value: 0,total: 0},
			{ name: 'Morocco' ,sname: '摩洛哥', selected: false,value: 0,total: 0},
			{ name: 'Nicaragua' ,sname: '尼加拉瓜', selected: false,value: 0,total: 0},
			{ name: 'Australia' ,sname: '澳大利亚', selected: false,value: 0,total: 0},
			{ name: 'Greece' ,sname: '希腊', selected: false,value: 0,total: 0},
			{ name: 'Albania' ,sname: '阿尔巴尼亚', selected: false,value: 0,total: 0},
			{ name: 'Equatorial Guinea' ,sname: '赤道几内亚', selected: false,value: 0,total: 0},
			{ name: 'Somalia' ,sname: '索马里', selected: false,value: 0,total: 0},
			{ name: 'Paraguay' ,sname: '巴拉圭', selected: false,value: 0,total: 0},
			{ name: 'Switzerland' ,sname: '瑞士', selected: false,value: 0,total: 0},
			{ name: 'Cuba' ,sname: '古巴', selected: false,value: 0,total: 0},
			{ name: 'Austria' ,sname: '奥地利', selected: false,value: 0,total: 0},
			{ name: 'Malawi' ,sname: '马拉维', selected: false,value: 0,total: 0},
			{ name: 'Djibouti' ,sname: '吉布提', selected: false,value: 0,total: 0},
			{ name: 'Dem. Rep. Congo' ,sname: '刚果（布）', selected: false,value: 0,total: 0},
			{ name: 'Guinea-Bissau' ,sname: '几内亚比绍', selected: false,value: 0,total: 0},
			{ name: 'Korea' ,sname: '韩国', selected: false,value: 0,total: 0},
			{ name: 'Cape verde' ,sname: '佛得角', selected: false,value: 0,total: 0},
			{ name: 'Tajikistan' ,sname: ' 塔吉克斯坦', selected: false,value: 0,total: 0},
			{ name: 'Montenegro' ,sname: ' 黑山 ', selected: false,value: 0,total: 0},
			{ name: 'Guinea' ,sname: ' 几内亚 ', selected: false,value: 0,total: 0},
			{ name: 'Croatia' ,sname: ' 克罗地亚', selected: false,value: 0,total: 0},
			{ name: 'Libya' ,sname: ' 利比亚', selected: false,value: 0,total: 0},
			{ name: 'Benin' ,sname: ' 贝宁', selected: false,value: 0,total: 0},
			{ name: 'S. Sudan' ,sname: '南苏丹', selected: false,value: 0,total: 0},
			{ name: 'Lebanon' ,sname: ' 黎巴嫩', selected: false,value: 0,total: 0},
			{ name: 'Mozambique' ,sname: ' 莫桑比克', selected: false,value: 0,total: 0},
			{ name: 'Namibia' ,sname: ' 纳米比亚', selected: false,value: 0,total: 0},
			{ name: 'Chad' ,sname: ' 乍得', selected: false,value: 0,total: 0},
			{ name: 'Mali' ,sname: ' 马里', selected: false,value: 0,total: 0},
			{ name: 'Zambia' ,sname: ' 赞比亚共和国', selected: false,value: 0,total: 0},
			{ name: 'Jamaica' ,sname: ' 牙买加', selected: false,value: 0,total: 0},
			{ name: 'Lithuania' ,sname: ' 立陶宛', selected: false,value: 0,total: 0},
			{ name: 'Yemen' ,sname: ' 也门共和国', selected: false,value: 0,total: 0},
			{ name: 'Swaziland' ,sname: ' 斯威士兰', selected: false,value: 0,total: 0},
			{ name: 'Zimbabwe' ,sname: ' 津巴布韦', selected: false,value: 0,total: 0},
			{ name: 'Latvia' ,sname: ' 拉脱维亚', selected: false,value: 0,total: 0},
			{ name: 'Rwanda' ,sname: ' 卢旺达', selected: false,value: 0,total: 0},
			{ name: 'San Marino' ,sname: ' 圣马力诺', selected: false,value: 0,total: 0},
			{ name: 'Estonia' ,sname: ' 爱沙尼亚', selected: false,value: 0,total: 0},
			{ name: 'Sri Lanka' ,sname: ' 斯里兰卡', selected: false,value: 0,total: 0},
			{ name: 'Liberia' ,sname: ' 利比里亚', selected: false,value: 0,total: 0},
			{ name: 'China' ,sname: '中国', selected: false,value: 0,total: 0},
			{ name: 'Togo' ,sname: ' 多哥', selected: false,value: 0,total: 0},
			{ name: 'Reunion' ,sname: ' 留尼旺', selected: false,value: 0,total: 0},
			{ name: 'Norway' ,sname: ' 挪威', selected: false,value: 0,total: 0},
			{ name: 'Sierra Leone' ,sname: ' 塞拉利昂', selected: false,value: 0,total: 0},
			{ name: 'Hungary' ,sname: ' 匈牙利', selected: false,value: 0,total: 0},
			{ name: 'Ireland' ,sname: ' 爱尔兰', selected: false,value: 0,total: 0},
			{ name: 'Cyprus' ,sname: ' 塞浦路斯', selected: false,value: 0,total: 0},
			{ name: 'Sao Tome and Principe' ,sname: ' 圣多美和普林西比', selected: false,value: 0,total: 0},
			{ name: 'Maldives' ,sname: ' 马尔代夫', selected: false,value: 0,total: 0},
			{ name: 'Slovakia' ,sname: ' 斯洛伐克', selected: false,value: 0,total: 0},
			{ name: 'Botswana' ,sname: ' 博茨瓦纳', selected: false,value: 0,total: 0},
			{ name: 'Angola' ,sname: ' 安哥拉', selected: false,value: 0,total: 0},
			{ name: 'Finland' ,sname: ' 芬兰', selected: false,value: 0,total: 0},
			{ name: 'Syria' ,sname: ' 叙利亚', selected: false,value: 0,total: 0},
			{ name: 'Slovenia' ,sname: ' 斯洛文尼亚', selected: false,value: 0,total: 0},
			{ name: 'Jordan' ,sname: ' 约旦', selected: false,value: 0,total: 0},
			{ name: 'Andorra' ,sname: ' 安道尔', selected: false,value: 0,total: 0},
			{ name: 'Tanzania' ,sname: ' 坦桑尼亚', selected: false,value: 0,total: 0},
			{ name: 'Isle of Man  ' ,sname: ' 马恩岛', selected: false,value: 0,total: 0},
			{ name: 'Comoros' ,sname: ' 科摩罗', selected: false,value: 0,total: 0},
			{ name: 'Guam' ,sname: '关岛', selected: false,value: 0,total: 0},
			{ name: 'Malta' ,sname: ' 马耳他', selected: false,value: 0,total: 0},
			{ name: 'Jersey  ' ,sname: ' 泽西岛', selected: false,value: 0,total: 0},
			{ name: 'Niger' ,sname: ' 尼日尔', selected: false,value: 0,total: 0},
			{ name: 'Malaysia' ,sname: ' 马来西亚', selected: false,value: 0,total: 0},
			{ name: 'Georgia' ,sname: ' 格鲁吉亚', selected: false,value: 0,total: 0},
			{ name: 'The Republic of Burundi' ,sname: ' 布隆迪共和国', selected: false,value: 0,total: 0},
			{ name: 'Suriname' ,sname: ' 苏里南', selected: false,value: 0,total: 0},
			{ name: 'Guyana' ,sname: ' 圭亚那', selected: false,value: 0,total: 0},
			{ name: 'Tunisia' ,sname: ' 突尼斯', selected: false,value: 0,total: 0},
			{ name: 'Martinique' ,sname: ' 马提尼克', selected: false,value: 0,total: 0},
			{ name: 'Guernsey' ,sname: ' 根西岛', selected: false,value: 0,total: 0},
			{ name: 'Lesotho' ,sname: ' 莱索托', selected: false,value: 0,total: 0},
			{ name: 'Mongolia' ,sname: ' 蒙古', selected: false,value: 0,total: 0},
			{ name: 'United States Virgin Islands' ,sname: ' 美属维尔京群岛', selected: false,value: 0,total: 0},
			{ name: 'Cayman Islands' ,sname: ' 开曼群岛', selected: false,value: 0,total: 0},
			{ name: 'Thailand' ,sname: ' 泰国', selected: false,value: 0,total: 0},
			{ name: 'Eritrea' ,sname: ' 厄立特里亚', selected: false,value: 0,total: 0},
			{ name: 'Faroe Islands' ,sname: ' 法罗群岛', selected: false,value: 0,total: 0},
			{ name: 'Gibraltar' ,sname: ' 直布罗陀', selected: false,value: 0,total: 0},
			{ name: 'Guadeloupe' ,sname: ' 瓜德罗普岛', selected: false,value: 0,total: 0},
			{ name: 'Burkina Faso' ,sname: ' 布基纳法索', selected: false,value: 0,total: 0},
			{ name: 'Uruguay' ,sname: ' 乌拉圭', selected: false,value: 0,total: 0},
			{ name: 'Bermuda' ,sname: ' 百慕大', selected: false,value: 0,total: 0},
			{ name: 'Iceland' ,sname: ' 冰岛', selected: false,value: 0,total: 0},
			{ name: 'The Diamond Princess Cruises' ,sname: ' 钻石公主号邮轮', selected: false,value: 0,total: 0},
			{ name: 'Trinidad and Tobago' ,sname: ' 特立尼达和多巴哥', selected: false,value: 0,total: 0},
			{ name: 'Uganda' ,sname: ' 乌干达', selected: false,value: 0,total: 0},
			{ name: 'Myanmar' ,sname: ' 缅甸', selected: false,value: 0,total: 0},
			{ name: 'Vietnam' ,sname: ' 越南', selected: false,value: 0,total: 0},
			{ name: 'Aruba' ,sname: ' 阿鲁巴', selected: false,value: 0,total: 0},
			{ name: 'Bahamas' ,sname: ' 巴哈马', selected: false,value: 0,total: 0},
			{ name: 'Seychelles' ,sname: ' 塞舌尔', selected: false,value: 0,total: 0},
			{ name: 'Barbados' ,sname: ' 巴巴多斯', selected: false,value: 0,total: 0},
			{ name: 'Monaco' ,sname: ' 摩纳哥', selected: false,value: 0,total: 0},
			{ name: 'French Polynesia' ,sname: ' 法属波利尼西亚', selected: false,value: 0,total: 0},
			{ name: 'Bhutan' ,sname: ' 不丹', selected: false,value: 0,total: 0},
			{ name: 'Antigua and Barbuda' ,sname: ' 安提瓜和巴布达', selected: false,value: 0,total: 0},
			{ name: 'Turks and Caicos Islands' ,sname: ' 特克斯和凯科斯群岛', selected: false,value: 0,total: 0},
			{ name: 'Sint Maarten' ,sname: ' 荷属圣马丁', selected: false,value: 0,total: 0},
			{ name: 'Gambia' ,sname: ' 冈比亚', selected: false,value: 0,total: 0},
			{ name: 'Cambodia' ,sname: ' 柬埔寨', selected: false,value: 0,total: 0},
			{ name: 'Saint Martin' ,sname: ' 圣马丁岛', selected: false,value: 0,total: 0},
			{ name: 'Belize' ,sname: ' 伯利兹', selected: false,value: 0,total: 0},
			{ name: 'Saint Vincent and the Grenadines' ,sname: ' 圣文森特和格林纳丁斯', selected: false,value: 0,total: 0},
			{ name: 'Commonwealth of the Northern Mariana Islands' ,sname: ' 北马里亚纳群岛联邦', selected: false,value: 0,total: 0},
			{ name: 'Fiji' ,sname: '斐济', selected: false,value: 0,total: 0},
			{ name: 'Curacao' ,sname: ' 库拉索岛', selected: false,value: 0,total: 0},
			{ name: 'East Timor' ,sname: ' 东帝汶', selected: false,value: 0,total: 0},
			{ name: 'Grenada' ,sname: ' 格林那达', selected: false,value: 0,total: 0},
			{ name: 'Saint Lucia' ,sname: ' 圣卢西亚', selected: false,value: 0,total: 0},
			{ name: 'New Caledonia' ,sname: '新喀里多尼亚', selected: false,value: 0,total: 0},
			{ name: 'Lao PDR' ,sname: ' 老挝', selected: false,value: 0,total: 0},
			{ name: 'Dominica' ,sname: ' 多米尼克', selected: false,value: 0,total: 0},
			{ name: 'Saint Kitts and Nevis' ,sname: '圣其茨和尼维斯', selected: false,value: 0,total: 0},
			{ name: 'Liechtenstein' ,sname: '列支敦士登', selected: false,value: 0,total: 0},
			{ name: 'Greenland' ,sname: '格陵兰', selected: false,value: 0,total: 0},
			{ name: 'Falkland Islands' ,sname: '福克兰群岛', selected: false,value: 0,total: 0},
			{ name: 'Vatican' ,sname: '梵蒂冈', selected: false,value: 0,total: 0},
			{ name: 'Montserrat' ,sname: '蒙特塞拉特', selected: false,value: 0,total: 0},
			{ name: 'Papua New Guinea' ,sname: '巴布亚新几内亚', selected: false,value: 0,total: 0},
			{ name: 'Mauritius' ,sname: '毛里求斯', selected: false,value: 0,total: 0},
			{ name: 'Brunei' ,sname: '文莱', selected: false,value: 0,total: 0},
			{ name: 'The British Virgin Islands' ,sname: '英属维尔京群岛', selected: false,value: 0,total: 0},
			{ name: 'Dutch Caribbean' ,sname: '荷兰加勒比地区', selected: false,value: 0,total: 0},
			{ name: 'Saint Barthelemy' ,sname: '圣巴泰勒米岛', selected: false,value: 0,total: 0},
			{ name: 'Anguilla' ,sname: '安圭拉', selected: false,value: 0,total: 0},
			{ name: 'Saint Pierre and Miquelon' ,sname: '圣皮埃尔和密克隆群岛', selected: false,value: 0,total: 0},
			{ name: 'New Zealand' ,sname: '新西兰', selected: false,value: 0,total: 0},
			{ name: 'Dem. Rep. Korea' ,sname: '朝鲜', selected: false,value: 0,total: 0},
			{ name: 'Turkmenistan' ,sname: '土库曼斯坦', selected: false,value: 0,total: 0},
			{ name: 'W. Sahara' ,sname: '西撒哈拉', selected: false,value: 0,total: 0},
			{ name: '' ,sname: '克什米尔', selected: false,value: 0,total: 0}
		] 

var mapBoxEchart = echarts.init(document.getElementById('container2'));
mapBoxEchart.showLoading();

for(DFM in da){
	for(DFA in d){
		if(d[DFA].provinceName == da[DFM].sname){
			da[DFM].total=d[DFA].confirmedCount;
			da[DFM].value =d[DFA].currentConfirmedCount;
			break;
		}
	}
}
var mapBoxOption = {
	tooltip:{
		trigger:'item',
		formatter:function(da){			
			return da.data.sname + ":<br>现有" + da.value + "人确诊<br>累计" +da.data.total+ "人确诊<br>";
		}
	},
	series: [
		{
		type: 'map',
		mapType: 'world',
		label: {
			normal: {
				show: false, //显示标签
				textStyle: {
					color: "#ad191f"
				} //标签字体颜色
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
		x: '-1000 px', 
		y: '-1000 px', 
		//颜色-现有
		splitList: [
			{ start: 0, end: 0, label: '0', color: '#ffffff' },
			{ start: 1, end: 100, label: '一百以下', color: '#fff5f5' },
			{ start: 101, end: 1000, label: '一百到一千', color: '#ffe6e6' },
			{ start: 1001, end: 5000, label: '一千到五千', color: '#ffcdcd' },
			{ start: 5001, end: 10000, label: '五千到一万', color: '#ffb4b4' },
			{ start: 10001, end: 50000, label: '一万到五万', color: '#ff9b9b' },
			{ start: 50001, end: 100000, label: '五万到十万', color: '#ff8282' },
			{ start: 100001, end: 200000, label: '十万到二十万', color: '#ff6969' },
			{ start: 200001, end: 500000, label: '二十万到五十万', color: '#ee4a4a' },
			{ start: 500001, end: 1000000, label: '五十万到一百万', color: '#c21919' },
			{ start: 1000001, end: 9999999999, label: '百万以上', color: '#810000' }
		]
	}, 
};
mapBoxEchart.hideLoading();
mapBoxEchart.setOption(mapBoxOption);
window.addEventListener("resize", function() {
	mapBoxEchart.resize();
});