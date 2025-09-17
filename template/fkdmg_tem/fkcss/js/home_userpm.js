function gethd() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "hdhtml"
	},
		function (data) {
			document.getElementById('userhd').innerHTML = data;
			jQuery.getScript('/fkapi/userpm.php?typ=hdjs&gs=.js');
		});
}

function dailisq() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "dlsq"
	},
		function (data) {
			jQuery('body').append(data);

			if (data != '') {
				jQuery('#sqguanli').click(function () {
					jQuery('#sqguanli').hide();
					//iframe窗
					layer.open({
						type: 2,
						title: 'vip授权管理系统 （如有问题请及时上报给管理员哦）',
						shadeClose: true,
						shade: false,
						maxmin: true, //开启最大化最小化按钮
						area: ['893px', '470px'],
						content: '/daili/',
						end: function () {
							jQuery('#sqguanli').show();
						}
					});
				});
			}
			//document.getElementById('userhd').innerHTML = data;		
			//	jQuery.getScript('/fkapi/userpm.php?typ=dlsqjs&gs=.js');
		});
}


function fawen() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "fawen"
	},
		function (data) {
			document.getElementById('usercb').innerHTML = data;
		});
}
function getformhash() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "formhash"
	},
		function (data) {
			str = data.replace(/\s+/g, "");
			jQuery('[name="formhash"]').val(str);
		});
}

function getxftips() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "xufeitips"
	},
		function (data) {
			if (data.vids == 0) {
				return false
			} else if (data.vids == 21) {
				var tipsurl = Array('淘宝天猫工具VIP','https://www.fkdmg.com/vip-vip.html?typ=tm');
			}else if (data.vids == 22) {
				var tipsurl = Array('阿里1688工具VIP','https://www.fkdmg.com/vip-vip.html?typ=1688');
			}else if (data.vids == 23) {
				var tipsurl = Array('阿里国际站工具VIP','https://www.fkdmg.com/vip-vip.html?typ=al');
			}else if (data.vids == 24) {
				var tipsurl = Array('京东店铺工具VIP','https://www.fkdmg.com/vip-vip.html?typ=jd');
			}else if (data.vids == 25) {
				var tipsurl = Array('疯狂全站通VIP','https://www.fkdmg.com/vip-vip.html?typ=qzt');
			}
			var index =	layer.open({
				type: 1,
				title:false,
				closeBtn:0, //不显示关闭按钮
				shade:false,
				area: ['340px', '115px'],
				skin: 'xufeits',
				offset: 'lb', //右下角弹出
				anim:1,
				content:'<div id="dqtpis"><p>亲爱的,您的<b>'+tipsurl[0]+'</b>马上就要到期了,为了不影响您的正常使用请及时续期哦。</p><a class="clostpis" target="_blank" href="'+tipsurl[1]+'" style="background:#ff3b00;">马上去续费</a><a class="clostpis" style="margin-left: 12px;background:#ababab;">关闭提醒</a></div>'
			});
			
		

			jQuery('.clostpis').click(function () {
				cookiecz.set("xftips", "yes", 1);
				layer.close(index);
			});
		});
}


var cookiecz = {
	set:function(key,val,time){//设置cookie方法
		var date=new Date(); //获取当前时间
		var expiresDays=time;  //将date设置为n天以后的时间
		date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
		document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
	},
	get:function(key){//获取cookie方法
		/*获取cookie参数*/
		var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
		var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
		var tips;  //声明变量tips
		for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
			var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
			if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
				tips=arr[1];   //将cookie的值赋给变量tips
				break;   //终止for循环遍历
			}
		}
		return tips;
	},
	delete:function(key){ //删除cookie方法
		var date = new Date(); //获取当前时间
		date.setTime(date.getTime()-10000); //将date设置为过去的时间
		document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
	}
}

if (cookiecz.get("xftips") != 'yes') { 
	getxftips();
}

function zhiwu() {
	jQuery.get("/fkapi/userpm.php", {
		typ: "zhifu"
	},
		function (data) {
			document.getElementById('zhifu').innerHTML = data;
		});
}

function posturl() {
	var urlsa = window.location.href;
	urlsa = urlsa.replace(/.html\?bd=[^\s]*/g, '.html');
	jQuery.get("/fkapi/userpm.php", {
		typ: "posturl",
		url:urlsa
	});
}posturl();

//获取随机经典语录
function suijijuzi() {
	if (jQuery('#mrjuzi').length > 0) {
		jQuery.get("/api/tianxingapi.php", {
			typ: "juzi"
		}, function (data) {
			//	console.log(data);
				jQuery('.juzi_content').text(data.content);
				jQuery('.juzi_author').text(data.author);
		});
	}
}

//百度统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?967809a2bb6d37c38e5a631041633f46";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


jQuery(document).on('click', '#banggzh', function () {
	bangdwxgz();
});

bangdwxgz = function () { 
///fkapi/weixin/login.php?typ=bang
	
var wxbck =  layer.open({
	type: 2,
	area: ['510px', '530px'],
	title:"打开微信扫一扫进行绑定",
	fixed:true, //不固定
	maxmin:false,
	content: '/fkapi/weixin/login.php?typ=bang'
  });
	
}


jQuery(document).on('click', '#gzhdengji', function () {
	wxgzhdl();
});

wxgzhdl = function () { 
///fkapi/weixin/login.php?typ=bang
	
var wxbck =  layer.open({
	type: 2,
	area: ['510px', '530px'],
	title:"打开微信扫一扫进行登录",
	fixed:true, //不固定
	maxmin:false,
	content: '/fkapi/weixin/login.php?typ=gzhdengji'
  });
	
}