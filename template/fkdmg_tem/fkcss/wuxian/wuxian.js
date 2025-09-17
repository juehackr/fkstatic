layuiset(1);
var chicun = 0;
function layuiset(czs) {
	if (czs == 1) {
		layui.use(['element', 'layer'], function () {
			var layer = layui.layer;
			var element = layui.element;
		});
	} else {
		//添加组件后处理事件
		layui.element.render();
		bianjian();
		seka();
	}
}

var fkmb_elm = jQuery('#setstyle');
var startPos_fkmb = jQuery(fkmb_elm).offset().top - 45;
jQuery.event.add(window, "scroll", function () {
	var p_fkmb = jQuery(window).scrollTop();
	jQuery(fkmb_elm).css('position', ((p_fkmb) > startPos_fkmb) ? 'fixed' : 'relative');
	jQuery(fkmb_elm).css('top', ((p_fkmb) > startPos_fkmb) ? '60px' : '');
	jQuery(fkmb_elm).css('z-index', ((p_fkmb) > startPos_fkmb) ? '999' : '');
	jQuery(fkmb_elm).css('margin-left', ((p_fkmb) > startPos_fkmb) ? '650px' : '');
});

var elm = jQuery('#fknavbox');
var startPos = jQuery(elm).offset().top;
jQuery.event.add(window, "scroll", function () {
	var p = jQuery(window).scrollTop();
	jQuery(elm).css('position', ((p) > startPos) ? 'fixed' : 'relative');
	jQuery(elm).css('top', ((p) > startPos) ? '0px' : '');
	jQuery(elm).css('opacity', ((p) > startPos) ? '0.9' : '');
	jQuery(elm).css('z-index', ((p) > startPos) ? '180' : '');
	jQuery(elm).addClass('fkonce');
});



var chushihua = 1;

jQuery(".preview ul li").eq(0).addClass('it[1]');
jQuery(".preview ul li").eq(1).addClass('it[2]');

var li1='',li2='';

li1=jQuery(".preview ul li").eq(0).prop("outerHTML");
li2= jQuery(".preview ul li").length>1?jQuery(".preview ul li").eq(1).prop("outerHTML"):jQuery(".preview ul li").eq(0).prop("outerHTML");

function addpic() {
	var pic = jQuery("#itemdata .layui-collapse").length;
	
li1=jQuery(".preview ul li").eq(0).prop("outerHTML");
li2= jQuery(".preview ul li").length>1?jQuery(".preview ul li").eq(1).prop("outerHTML"):li2;
	
	if (chushihua == 1) {
		qingchuxc(pic);
	}
	pic++;
	var newpic = jQuery("#itemdata .layui-collapse").prop("outerHTML");
	newpic = newpic.replace(/\[1\]/g, '[' + pic + ']');
	newpic = newpic.replace(/layui-show/g, '');

	if(pic%2==1){
		var newli = li1;
		newli = newli.replace(/\[1\]/g, '[' + pic + ']');
	}else{
		var newli = li2;
		newli = newli.replace(/\[2\]/g, '[' + pic + ']');
	}
	
	if(newli.indexOf('fk-img')!=-1 && newli.indexOf('<img')!=-1){
		var imgsrc = newli.match(/fk\-img(.*?)[\S\s].*?\<img(.*?)\>/i)[0];

	if (imgsrc != null) {
		var imgsrc = imgsrc.match(/src=\"(.*?)\"/i)[1];
	}
	newli = newli.replace(imgsrc, 'https://img.alicdn.com/imgextra/i1/456989075/O1CN010LWiiH2GuOmAL0tr6-456989075.jpg');
	}
	
	if ((pic <= 10)||(pic <= 50&&caids==48)) {
		jQuery("#itemdata").append(newpic);
		jQuery('#itemdata .layui-colla-content').removeClass('layui-show');
		jQuery('[name="bbzsli[' + pic + ']"] .layui-colla-content').addClass('layui-show');
		jQuery(".preview ul").append(newli);
		jQuery('[name="bbzsli[' + pic + ']"] .minicolors-swatch,[name="bbzsli[' + pic + ']"] .minicolors-slider-hue').remove();		
		layuiset(0);//添加后事件		
		document.getElementById('itemdata').scrollTop = 10000;
	} else {
		if(caids==48){
			alert("单个模块宝贝数量不建议超过50个哦！");
		}else{
		   alert("单个模块宝贝数量不能超过10个！");
		   }
	}
	
}

function qingchuxc(sdz) {
	var liobj = jQuery('.preview ul li');
	
	
	for (var i = 0; i < liobj.length; i++) {
		if (i >= sdz) {
			jQuery(liobj[i]).remove();
		}
	}
	
	chushihua = 0;
}


function delpic() {
	var pic = jQuery("#itemdata .layui-collapse").length;	
	if (chushihua == 1) {
		qingchuxc(pic);
		return false
	}
	
	pic--;
	if (pic >= 1) {
		jQuery("#itemdata .layui-collapse").eq(pic).remove();
		jQuery(".preview ul li").eq(pic).remove();

	} else {
		alert("亲再删就没有了啊！！！！");
	}
}

function bianjian() { //编辑框编辑事件
	jQuery('#itemdata input').bind('input propertychange', function () {
		if (isbb(this)) { //宝贝信息提取事件
			var regs = new RegExp("(\/|\id\=)[1-9][0-9]{5,}");
			var urlss = this.value;
			var rsss = urlss.match(regs);
			var thisid = jQuery(this).attr('name');
			var reg = /\d+/;
			var rjg = thisid.match(reg)[0];
			if (rsss != "" && yaoti != 88) { //88代表不需要提取		
				duitme(rjg, rsss, urlss);
			}
		}
		//常规编辑处理
		if (this.value != '') {
			gaibianhb(this);
		}

	});
}
bianjian();

function ty_bianji() {
	jQuery('#mkcss input,#mkfengge input').bind('input propertychange', function () {
		if (this.value != '') {
			
			var tms = jQuery(this).attr('data-opacity');
			if(tms!=undefined){				
				var sezhi = this.value;
				var sRgbColor = sezhi.colorRgb(tms);//转为RGB颜色值的方法		
				chungaistyle(jQuery(this).attr('data-fkhs'), jQuery(this).attr('data-set'), sRgbColor);
			}else{
				chungaistyle(jQuery(this).attr('data-fkhs'), jQuery(this).attr('data-set'), this.value);
			}
			
			
		}
	})
}
ty_bianji();



function zdhbqxx(objs) { //宝贝信息联动
	var rjg = objs;
	var objli = jQuery('[name="bbzsli[' + rjg + ']"] input');
	for (var i = 0; i < objli.length; i++) {
		gaibianhb(objli[i]);
	}
}

function gaibianhb(thisobj) { //画布属性改变事件带Id	宝贝	
	//var sRgbColor = hex.colorRgb(opacity);//转为RGB颜色值的方法
	var neironz = thisobj.value;
	var data_set = jQuery(thisobj).attr('data-set');
	var data_fkhs = jQuery(thisobj).attr('data-fkhs');
	var thisid = jQuery(thisobj).attr('name');
	
	if(thisid.indexOf('pic[')!=-1 && (neironz.indexOf('alicdn')!=-1 || neironz.indexOf('imgextra')!=-1 || neironz.indexOf('tbcnd')!=-1 || neironz.indexOf('taobaocnd')!=-1) && neironz.indexOf(chicun+'x'+chicun+'.jpg')==-1 && chicun>10 && neironz.indexOf('q90.jpg')==-1){
		neironz = neironz + '_'+chicun+'x'+chicun+'.jpg';
	}
	
	var reg = /\d+/;
	var objid = thisid.match(reg)[0];
	data_set = data_set.replace(/li/g, 'li.it\\[' + objid + '\\]');
	
		var tms = jQuery(thisobj).attr('data-opacity');
			if(tms!=undefined){	
				var sRgbColor = neironz.colorRgb(tms);//转为RGB颜色值的方法		
				chungaistyle(data_fkhs, data_set, sRgbColor);
			}else{
				chungaistyle(data_fkhs, data_set, neironz);
			}	
}



function chungaistyle(lei, set, zhi) { //纯粹的修改样式函数	
	if(zhi==''){
		return false
	}	
	switch (lei) {
		case 'text':
			zhi!=''&&jQuery(set).text(zhi);
			break;
		case 'href':
			jQuery(set).attr(lei, zhi);
			break;
		case 'background-image':
			jQuery(set).css(lei, 'url(' + zhi + ')');
			break;
		case 'src':
			jQuery(set).attr(lei, zhi);
			break;
		case 'background-color|border-left-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'background-color|border-right-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'background-color|border-left-color|border-right-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			jQuery(setarr[1]).css(leiarr[2], zhi);
			break;		
		case 'background-color|border-right-color|border-left-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			jQuery(setarr[1]).css(leiarr[2], zhi);
			break;		
		case 'background-color|border-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'color|border-left-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');
			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'color|border-right-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'color|border-left-color|border-right-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			jQuery(setarr[1]).css(leiarr[2], zhi);
			break;		
		case 'color|border-right-color|border-left-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			jQuery(setarr[1]).css(leiarr[2], zhi);
			break;		
		case 'color|border-color':
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;
		case 'background-color|border-top-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'background-color|border-bottom-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'color|border-top-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'color|border-bottom-color':			
			var setarr = set.split('|');
			var leiarr = lei.split('|');			
			jQuery(setarr[0]).css(leiarr[0], zhi);
			jQuery(setarr[1]).css(leiarr[1], zhi);
			break;	
		case 'border-top-color|border-bottom-color':
			var leiarr = lei.split('|');			
			jQuery(set).css(leiarr[0], zhi);
			jQuery(set).css(leiarr[1], zhi);
			break;
		default:
			jQuery(set).css(lei, zhi);
	}
}


function isbb(objs) { //判断是不是宝贝链接
	var cxurl = objs.value;
	if (cxurl.indexOf('item.') != -1 || cxurl.indexOf('detail.') != -1 || cxurl.indexOf('product') != -1) {
		return true;
	} else {
		return false;
	}
}

function dudplxss(dpurl) {
	var dplxs = '';

	if (dpurl.indexOf('.1688.') != -1) {
		dplxs = '1688';
	} else if (dpurl.indexOf('taobao.') != -1 || dpurl.indexOf('tmall.') != -1 || dpurl.indexOf('jiyoujia.') != -1) {
		dplxs = 'tbtm';
	} else if (dpurl.indexOf('jd.') != -1) {
		dplxs = 'jd';
	} else if (dpurl.indexOf('alibaba') != -1) {
		dplxs = 'alibaba';
	}
	return dplxs;
}

function duitme(opsid, itmeid, dpurls) { //读取宝贝信息
	var copysuc = jQuery("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>宝贝信息读取中..</div></div>");
	jq("body").find(".copy-tips").remove().end().append(copysuc);
	jq.ajax({
		type: 'post',
		url: "/fkapi/fkitme.php",
		data: "itmeid=" + itmeid + "&run=" + dudplxss(dpurls) + '&url=' + dpurls,
		error: function () {
			jq(".copy-tips").fadeOut(1000);
			alert('因对方服务不稳定,本次提取失败,请手动填写一下相关信息！');
		},
		success: function (html) {
			rs = eval("(" + html + ")");
			jq('[name="pic[' + opsid + ']"]').val(rs['zhutu']);
			jq('[name="biaoti[' + opsid + ']"]').val(rs['title']);
			jq('[name="xianjia[' + opsid + ']"]').val(rs['jiege']);
			jq('[name="yuanjia[' + opsid + ']"]').val(rs['jiege']);
			jq('[name="cuxiaojia[' + opsid + ']"]').val(rs['jiege']);
			jq('[name="jiage[' + opsid + ']"]').val(rs['jiege']);

			zdhbqxx(opsid);
		}
	});
	jq(".copy-tips").fadeOut(3000);

	return true
}

function seka() {
//jQuery('.yanse').minicolors({position:'top left'});
jQuery('.yanse').minicolors();
jQuery('.yanseS').minicolors({opacity: true,change: function(hex, opacity) {
	// var sRgbColor = hex.colorRgb(opacity);//转为RGB颜色值的方法	
	}});
}
seka();



//导出代码
jQuery('#daochumk').click(function () {
	layer.load();
	var ybtpp = jQuery('#daochumk').text();
	jQuery('#daochumk').text('导出中,请稍后...');
	//var formdata = jQuery('#setstyle').serialize();
	var formdata = jQuery('#setstyle').serializeArray();
	jQuery.post("/tbtmwuxian/post/tt.php", {
			aid: aid,
			div: jQuery('#fkmbset').html(),
			fomdata: formdata,
			formhash: jQuery('#yformhash').text(),
			w: jQuery('#fkmbset').width(),
			h: jQuery('#fkmbset').height()
		},
		function (data, status) {
			var thisdatas = JSON.parse(data);
		
		if(thisdatas.status==1){
			codeshow(thisdatas.data);
		}else if(thisdatas.status==0){
				 userdl();
			}else if(thisdatas.status==2){
			zanzhu();
	}else if(thisdatas.status==3){
			 layer.alert(thisdatas.msg);
			 }else{
		layer.alert('生成出错，请重试...');
	}
			jQuery('#daochumk').text(ybtpp);
			layer.closeAll('loading');
		}).error(function(xhr,errorText,errorType){
layer.alert('生成出错，请重试...');
		jQuery('#daochumk').text(ybtpp);
			layer.closeAll('loading');
});
});


//导出代码2
jQuery('#daochumk_new').click(function () {


	layer.load();
	jQuery('#daochumk_new').text('导出中,请稍后...');
	//var formdata = jQuery('#setstyle').serialize();
	var formdata = jQuery('#setstyle').serializeArray();
	jQuery.post("/tbtmwuxian/post/tt.php?typ=alnew", {
			aid: aid,
			div: jQuery('#fkmbset').html(),
			fomdata: formdata,
			formhash: jQuery('#yformhash').text(),
			w: jQuery('#fkmbset').width(),
			h: jQuery('#fkmbset').height()
		},
		function (data, status) {
			var thisdatas = JSON.parse(data);
		
		if(thisdatas.status==1){
			codeshow(thisdatas.data);
		}else if(thisdatas.status==0){
				 userdl();
			}else if(thisdatas.status==2){
			zanzhu();
	}else if(thisdatas.status==3){
			 layer.alert(thisdatas.msg);
			 }else{
		layer.alert('生成出错，请重试...');
	}
			jQuery('#daochumk_new').text('导出代码');
			layer.closeAll('loading');
		}).error(function(xhr,errorText,errorType){
layer.alert('生成出错，请重试...');
		jQuery('#daochumk_new').text('导出代码');
			layer.closeAll('loading');
});
});


function codeshow(codes) {
	layer.open({
		type: 1,
		title: '代码生成成功,请手动复制代码',
		closeBtn: 1,
		area: ['900px', '560px'],
		skin: 'fk_code',
		content: '<div id="fkcode"><textarea id="fk-textarea" class="fk-textarea">' + codes + '</textarea><div class="getCode"><button data-clipboard-action="copy" data-clipboard-target=".fk-textarea" id="copecode" class="layui-btn layui-btn-normal">复制代码</button></div></div>'
	});

	var clipboard = new ClipboardJS('#copecode');
	clipboard.on('success', function (e) {
		if (e.text == "") {
			layer.msg('请先生成代码后再复制');
		} else {
			layer.msg('代码复制成功');
		}
	});
	clipboard.on('error', function (e) {
		layer.msg('复制失败，请在以下编辑框中手动复制代码。');

		//JS选中文本框中内容
		document.getElementById("fk-textarea").focus();
		document.getElementById("fk-textarea").select();
		//jquery选中文本框中内容
		jQuery(".fk-textarea").focus();
		jQuery(".fk-textarea").select();
	});
}


jQuery('#bfczjl').click(function () {
	layer.prompt({
		title: '请设置一个备份名称,方便下次寻找'
	}, function (val, index) {
		thisbeifen(1, val);
		layer.close(index);
	});
})

jQuery('#fugaiczjl').click(function () {
	thisbeifen(2, '');
});

var thisid = 0;
function thisbeifen(typ, names) { //typ1=新存 2=覆盖
	if (typ == 1) {
		var formdata = jQuery('#setstyle').serializeArray();
		jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: typ,
				aid: aid,
				div: jQuery('#fkmbset').html(),
				name: names,
				fomdata: formdata,
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);
				layer.msg(thisdatas.msg);
				if (thisdatas.status == 1) {
					thisid = thisdatas.id;
					jQuery('#fugaiczjl').show();
				}

			});
	} else if (typ == 2) {
		var formdata = jQuery('#setstyle').serializeArray();
		jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: typ,
				aid: aid,
				thisid: thisid,
				div: jQuery('#fkmbset').html(),
				fomdata: formdata,
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);
				layer.msg(thisdatas.msg);
			});
	}
}


jQuery('#dqczjl,#beifendr .dr').click(function (){ //读取操作记录列表
	layer.load();
	//dubaklist();
	shujulist();
	layer.closeAll('loading');
});
function dubaklist(){
	layer.load();
		jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: 3,
				aid: aid,
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);
			shujulist();
				layer.msg(thisdatas.msg);
			
			});
}

function shujulist(){
layer.open({
		type: 1,
		title: '操作记录列表',
		closeBtn: 1,
		area: ['900px', '500px'],
		skin: 'fk_shuju',
		content: '<div id="fkcode"><table class="layui-hide" id="datalists" lay-filter="datalists"></table></div><script type="text/html" id="bardata"><a class="layui-btn layui-btn-normal layui-btn-xs" lay-event="daoru">导入</a><a class="layui-btn layui-btn-warm layui-btn-xs" lay-event="edit">重命名</a><a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a></script>'
	});
	
	layui.use(['table'], function(){
  var table = layui.table;
  
  table.render({
    elem: '#datalists'
	,width: 900
    ,height: 437
    ,url:'/tbtmwuxian/post/bak_yun.php?typ=3&aid='+aid+'&formhash='+jQuery('#yformhash').text()
    ,cols: [[
      {field:'mingcheng', width:443, title: '名称'}
      ,{field:'time', width:196, title: '时间',templet: '<div>{{ getLocalTime(d.time) }}</div>'}	
      ,{field:'id', width:93, title: '数据ID', sort: true}
	,{fixed: 'right', title:'操作', toolbar: '#bardata'}
    ]]
    ,page: true
  });
		
//监听行工具事件
  table.on('tool(datalists)', function(obj){
    var data = obj.data;
    //console.log(obj)
    if(obj.event === 'del'){
      layer.confirm('真的要删除这条备份数据吗?', function(index){
		 deldantiao(data.id);
        obj.del();
        layer.close(index);
      });
    }else if(obj.event === 'daoru'){		
		 layer.confirm('确定要导入这条数据吗?导入后将会覆盖当前操作哦', function(index){
		 dudantiao(data.id)       
        layer.close(index);
      });
		}else if(obj.event === 'edit'){
      layer.prompt({
        formType: 0
        ,value: data.mingcheng
      }, function(value, index){
        obj.update({
          mingcheng: value
        });
		  
		 gaimin(data.id,value); 
        layer.close(index);
      });
    }
  });		
		
});
	
}


function dudantiao(thisidsa){
		jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: 6,
				id: thisidsa,				
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);			
				layer.msg(thisdatas.msg);
			if(thisdatas.status==1){
				thisid = thisidsa;
				jQuery('#fugaiczjl').show();
				fenxidata(thisdatas.data);
				urlblank();
			}
			});
}

function fenxidata(thidata){ //分析操作记录fome
	layer.closeAll();

	var fodata =  JSON.parse(thidata.fomdata);
	qingchangdom();
	for (var i=0;i<fodata.length;i++){
if(jQuery('[name="'+fodata[i].name+'"]').length > 0) {    
	jQuery('[name="'+fodata[i].name+'"]').val(fodata[i].value);	
	
}else{
	addpic();//元素不存在先加上
	jQuery('[name="'+fodata[i].name+'"]').val(fodata[i].value);
}  	
	}
	
jQuery('#fkmbset').html(thidata.data);
	
}

function qingchangdom(){//读取单条前清场
	var piccon = jQuery("#itemdata .layui-collapse").length-1;
	for (var i=0;i<piccon;i++){
		delpic();
	}
}


function deldantiao(thisidsa){
	jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: 5,
				id: thisidsa,				
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);			
				layer.msg(thisdatas.msg);
			});
}

function gaimin(aids,newname){ //修改备份名称	
	jQuery.post("/tbtmwuxian/post/bak_yun.php", {
				typ: 4,
				id: aids,
				newname:newname,
				formhash: jQuery('#yformhash').text()
			},
			function (data, status) {
				var thisdatas = JSON.parse(data);			
				layer.msg(thisdatas.msg);
			});
	
}

function getLocalTime(nS) {
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

function urlblank(){
jQuery('#fkmbset a').attr('href','javascript:void(0)');
jQuery('#fkmbset a').attr('target','_blank');
}urlblank();
function tpisurl(){
layer.tips('在这里填写宝贝链接，填写后会自动获取宝贝信息。', '[name="imurl[1]"]', {
  tips: [3, 'red'],
  time:5000
});
return true
}

jQuery('#adddel .addbb').click(function(){addpic()});
jQuery('#adddel .delbb').click(function(){delpic()});

window.onload=function (){
//tpisurl();
if(jQuery('#fkpls_all').length<1){
//console.log('没有安装插件！');	
}else{
//console.log('安装了插件！');	
}
	 }
if(aid>=1){
jQuery.getScript('/portal.php?mod=fktoolsjs&aid='+aid);	
}

jQuery('#setfenmian').click(function(){//生成封面	
	layer.load();
	jQuery.post("/tbtmwuxian/post/tt.php", {
			aid: aid,
			typ: 'setfm',
			div: jQuery('#fkmbset').html(),		
			formhash: jQuery('#yformhash').text(),
			w: jQuery('#fkmbset').width(),
			h: jQuery('#fkmbset').height()
		},
		function (data, status) {
		var thisdatas = JSON.parse(data);
		layer.msg(thisdatas.msg);
		layer.closeAll('loading');
		}).error(function(xhr,errorText,errorType){
layer.alert('生成封面出错，请重试...');	
			layer.closeAll('loading');
});});



var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;  
/*16进制颜色转为RGB格式*/  
String.prototype.colorRgb = function(tmd){ 	
    var sColor = this.toLowerCase();  
    if(sColor && reg.test(sColor)){  
        if(sColor.length === 4){  
            var sColorNew = "#";  
            for(var i=1; i<4; i+=1){  
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
            }  
            sColor = sColorNew;  
        }  
        //处理六位的颜色值  
        var sColorChange = [];  
        for(var i=1; i<7; i+=2){  
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
        }  
       // return "rgb(" + sColorChange.join(",") + ")"; 
return "rgba(" + sColorChange.join(",") + ","+tmd+")"; 
    }else{  
        return sColor;    
    }  
};