var objimg = jQuery('.fktoolsjc .fkscpiced img');
for (var i = 0; i < objimg.length; i++) {
	var mybg = objimg[i].src;
	tpjz(mybg, objimg[i]);
	//console.log(objimg[i].width);
}

function tpjz(imgur, obj) {
	var aimg = new Image();
	aimg.src = imgur != "" ? imgur : jQuery(obj).attr('data-original');

	//console.log(aimg.src);

	aimg.onload = function () {

		var beilv = aimg.width / 289;
		if ((aimg.width == 380 && aimg.height == 140) || (aimg.width == 376 && aimg.height == 140) || (aimg.width == 520 && aimg.height == 191)) {
			obj.style.width = '289px';
			obj.style.height = '106px';
		} else if (aimg.width / beilv >= 289 && aimg.height / beilv >= 106) {
			obj.style.width = '289px';
		} else {
			obj.style.height = '106px';
		}
	}
}


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

jQuery('.colshs').click(function () {	
var obj = this;
 obj.parentNode.parentNode.removeChild(obj.parentNode);
});

function zhuanyiquanxian(){
	layer.open({
		type: 2,
		title: '热烈欢迎疯狂的美工老用户转入',
		shadeClose: false,
		shade: 0.9,
		maxmin:false, //开启最大化最小化按钮
		area: ['893px', '470px'],
		content: '/jie_vip/',
		end: function () {
jQuery('#sqguanli').show();
		}
	});
}

if(window.location.href.indexOf('zhuanyiquanxian')!=-1){
		layer.open({
		type: 2,
		title: '热烈欢迎疯狂的美工老用户转入本站',
		shadeClose: false,
		shade: 0.9,
		maxmin:false, //开启最大化最小化按钮
		area: ['893px', '470px'],
		content: '/jie_vip/',
		end: function () {
jQuery('#sqguanli').show();
		}
	});
}
function showxcxm(params,ltyp) {
	layer.open({
  type: 1,
  title: false,
  closeBtn: 0,
  area: '216px',
  skin: 'layui-xiaocxma', //没有背景色
  shadeClose: true,
  content: '<div id="xcxma"><img src="'+params+'"></div><div class="xcxts"><h2>使用微信扫一扫</h2><div class="dsd">已登录用户首次扫码自动绑定微信小程序ID</div></div>'
});
if(ltyp=='bang'){//绑定心跳
	banglema();
}}
var miao=0;
function banglema(){
	miao+=1;
	jQuery.get("/home.php?mod=userpm", {
			typ: "bangleme"
		},
		function (data) {
			console.log(data);
			if(data==0){
				setTimeout("banglema()",1000);
			}else{
				window.location.reload();
			}
		});
}


 jQuery(".fkttops").on("click", function(e){
							jQuery('.fkttops').addClass('on');
							jQuery(".fktthiddens").show();
						
							jQuery(document).one("click", function(){
								jQuery('.fkttops').removeClass('on');
								jQuery(".fktthiddens").hide();
							});
						
							e.stopPropagation();
						});
						jQuery(".fktthiddens").on("click", function(e){
							e.stopPropagation();
						});