function tianjian(na) {
			if(na=='wwzj'){
				addjww();
			}else if(na=='requ'){			
				addrq();
			}
			
			
jq(function() {
jq(".zpops").draggable()
});
		}
	
	var nmww = 1;
	
function addjww() {
    nmww = nmww+1; 
	var newww = '<span class="zpops ww" name="alww" id="ww'+nmww+'" style="width: 77px; height: 19px;position: absolute;top: 12px; left: 499px; cursor: move;;background: url(http://wwimgsrc.cn-hangzhou.oss-pub.aliyun-inc.com/htdocs/im/actions/wbtx/alitalk/10/online.gif) no-repeat;" data-param="{&quot;wwid&quot;:&quot;'+tywwid+'&quot;,&quot;style&quot;:10,&quot;title&quot;:&quot;点击联系我&quot;}"></span>';	
    jq('#dmspmk').append(newww);
	getObjdata(jq("#ww"+nmww));
	jq( "#dialog-con" ).dialog( "open" );
	  jq( "#dialog-requ" ).dialog( "close" );
}

var nmrq=0;
function addrq(){
    nmrq = nmrq+1; 
	var newrq = '<span  class="zpops rq rez"  name="requ"  id="rq'+nmrq+'" style="width:165px; height:75px;position: absolute;top: 12px; left: 499px; cursor: move;opacity: 0.5;background: rgb(0, 230, 255);" data-param="{&quot;aurl&quot;:&quot;&quot;,&quot;style&quot;:&quot;_blank&quot;}"></span>';	
    jq('#dmspmk').append(newrq);
	jq("#dmspmk .rez").resizable();	
	getObjdata(jq("#rq"+nmrq));
	jq( "#dialog-con" ).dialog( "close" );
	jq( "#dialog-requ" ).dialog( "open" );
	
}

jq('.popzjmb li').live({
        click: function() {
           tianjian(this.id);
        }
    });			

	
	
jq('.zpops').live({
        dblclick: function() { //双击	
		dcike(this);
        },
        mousedown: function() { //单击	
		dcike(this);	
        },
        mouseenter: function() { //鼠标经过
            jq(this).append("<div class='plst'><div class='aniu addniu' title='复制此组件'>+</div><div class='aniu delniu' title='删除此组件'>×</div></div>");
        },
        mouseleave: function() { //鼠标移开
            jq('.plst').remove();
        }
    });
	
function dcike(zjcko){		
		var manes = jq(zjcko).attr("name");
		if(manes=="alww"){
			  jq( "#dialog-con" ).dialog( "open" );
			  jq( "#dialog-requ" ).dialog( "close" );
        getObjdata(jq(zjcko));
			
		}else if(manes=="requ"){
			  jq( "#dialog-requ" ).dialog( "open" );
			  jq( "#dialog-con" ).dialog( "close" );
        getObjdata(jq(zjcko));
			
		}
		
      
}	
	
   jq('.delniu').live({
        click: function() {
            zjd = jq(this).parent().parent();
			
            zjd.remove();
            jq('#shuxin').fadeOut();
			jq( "#dialog-con" ).dialog( "close" );
			jq( "#dialog-requ" ).dialog( "close" );
        }
    });	
	
jq('.addniu').live({
        click: function() {
            zjd = jq(this).parent().parent();	
	
	  var newboj = jq(zjd).prop("outerHTML");
	  
		jq('#dmspmk').append(jq(newboj).clone(true))
		
 alert(newboj);

        }
    });	


function getObjdata(bjzu) {   
  var jsdata = bjzu.attr('data-param');
  if (typeof jsdata != 'undefined'){
	  JSONdata = jQuery.parseJSON(jsdata);	  
	  jq("#wwid").val(JSONdata['wwid']);	
jq('input[name="style"][value="'+JSONdata['style']+'"]').attr('checked', 'checked');
	 jq("#title").val(JSONdata['title']); 	 
	 jq("#zjid").html(bjzu.attr('id')); 

	 jq("#rqurl").val(JSONdata['aurl']); 	 
  }
}

//绑定事件
jq(document).ready(function(){	
/* jq(".input-box").change(function(){
baosww();
}); */

jq('.input-box').bind('input propertychange', function() {	
if(this.id=="mkbg"){
psize(this,1);	
}else{
	baosww();
}

}); 

jq('input[type=radio][name=style]').change(function() {
baosww();
});

jq('#suodin').click(function(){
if (jq("#suodin").get(0).checked) {
   jq('#dmspmk').css({"background-attachment":"fixed"});	
}else{	
   jq('#dmspmk').css({"background-attachment":"inherit"});
}
});

jq('#pinpu').click(function(){
if (jq("#pinpu").get(0).checked) {
   jq('#dmspmk').css({"background-repeat":"repeat"});	
}else{	
   jq('#dmspmk').css({"background-repeat":"no-repeat"});
}
});

jq('#juzhon').click(function(){
if (jq("#juzhon").get(0).checked) {
   jq('#dmspmk').css({"background-position":"center center"});	
}else{	
   jq('#dmspmk').css({"background-position":"left top"});
}
});

jq('#mkwyc').click(function(){
if (jq("#mkwyc").get(0).checked) {
   jq('#dmspmk').css({"overflow":"hidden"});	
}else{	
   jq('#dmspmk').css({"overflow":"visible"});
}
});


jq('#texssczydm').click(function(){
sczydm(1);
});

jq('#texsylzydm').click(function(){
sczydm(0);
});

});

	
function sczydm(ipss){	
	if(jq("#show_width").val()<1 || jq("#show_height").val()<1){		
		alert("请在右侧全局设置面板中，填写模块宽度高度！");
		 return false;		
	}
	if(ipss==0){
          var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>预览代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);		
			}else{
				var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);				
			}
	
	
	jq.ajax({
		type:'post',
		url:"portal.php?mod=fktools_al&aid="+ aid +"&formhash="+jq("#yformhash").html()+"&ajax=1",//拼接
		data:GetmkCode(),
		error:function(){
		  alert('生成出错请检查您的设置');
		},
		success:function(html){			
		rs=eval("("+html+")");	
		jq('#code').val('');
		var rest = new RegExp("&amp;","g");	
		var rest2 = new RegExp("&quot;","g");	
		var rest3 = new RegExp("alquot","g");	
		var rest4 = new RegExp("单引号","g");
		
		var lur = rs['jieguo'];	
		 if(jq('div').is('.dmclq')){	
		 }else{
			 lur =htmlEncode(lur);
		 }
		lur = lur.replace(rest,'&');	
	    lur = lur.replace(rest2,'"');
		 lur = lur.replace(rest4,"'");
		 var rest5 = new RegExp("sttaig","g");
		 lur = lur.replace(rest5,'stt'+discuz_uid+'aig');
		var yldm =  lur;
		lur = lur.replace(rest3,"&quot;");
		jq('#code').val(lur);			
		jq(".copy-tips").fadeOut(1000);	
		jq( "#zyscdm" ).dialog( "open" );
 　　　if(ipss==0){	 	
           yulandaimazy(yldm);
		}
zyplstzclip();	
			}
	})	
	
}	
	
	
	
	function GetmkCode() {
	var qp = 0;
	if (jq("#jiaruqps").get(0).checked) {
		qp = 1;
	}else{
		qp = 0;
	}
		
	var main = {
		zjName: 'main',
		style: jq('#dmspmk').attr('style'),
		width: jq('#dmspmk').width(),
		height: jq('#dmspmk').height(),
		xs: jq('#xiaoshang').val(),
		xx: jq('#xiaoxia').val(),
		jrqp:qp
	};
var lsss=[];
var jsss = [];
var zzs = jq('#dmspmk').children('span').length;

	for (var i=0;i<zzs;i++)
{
	lsss[i] = {
		zjName: jq('#dmspmk span').eq(i).attr('name'),
		//style: jq('#dmspmk span').eq(i).attr('style'),
		top: jq('#dmspmk span').eq(i).css('top'),
		left: jq('#dmspmk span').eq(i).css('left'),
		backgroundimg: jq('#dmspmk span').eq(i).css('background-image'),
		backgroundrep: jq('#dmspmk span').eq(i).css('background-repeat'),
		backgroundzz: jq('#dmspmk span').eq(i).css('background-position'),
		backgroundcl: jq('#dmspmk span').eq(i).css('background-color'),
		width: jq('#dmspmk span').eq(i).width(),
		height: jq('#dmspmk span').eq(i).height(),
		jonssj:jq('#dmspmk span').eq(i).attr('data-param')
	};

}
	
var st = {
			 main: main,
			 data: lsss,
		 };
	
return st;
}	

function baosww() {
	  tywwid = jq("#wwid").val();
	  
	  var wwstyle = jq('input:radio[name="style"]:checked').val();
	  jq('#'+jq("#zjid").html()).attr('data-param', '{"wwid":"'+jq("#wwid").val()+'","style":"'+wwstyle+'","title":"'+jq("#title").val()+'","aurl":"'+jq("#rqurl").val()+'"}');  
	  
	  if(wwstyle ==10){		  
	jq('#'+jq("#zjid").html()).css({"background":'url("https://wwimgsrc.cn-hangzhou.oss-pub.aliyun-inc.com/htdocs/im/actions/wbtx/alitalk/10/online.gif") no-repeat 0px 0px',"width":'77',"height":'19'});		  
	  }else if(wwstyle ==11){
		 jq('#'+jq("#zjid").html()).css({"background":'url("https://wwimgsrc.cn-hangzhou.oss-pub.aliyun-inc.com/htdocs/im/actions/wbtx/alitalk/11/online.gif") no-repeat 0px 0px',	"width":"22",	"height":"22"});
	  }else if(wwstyle ==12){
		jq('#'+jq("#zjid").html()).css({"background":'url("https://wwimgsrc.cn-hangzhou.oss-pub.aliyun-inc.com/htdocs/im/actions/wbtx/alitalk/12/online.gif") no-repeat -14px 0px',	"width":"30",	"height":"30"});
	  }else if(wwstyle ==1){		  
	jq('#'+jq("#zjid").html()).css({"background":'url("https://wwimgsrc.cn-hangzhou.oss-pub.aliyun-inc.com/htdocs/im/actions/wbtx/alitalk/1/online.gif") no-repeat 0px 0px',"width":'77',"height":'19'});		  
	  }
}

//属性面板
jq(function() {
jq("#dialog-zjmb").draggable()
});

var tywwid="";
var cisk = (window.innerWidth-275); 
  
    jq(function(){
    jq( "#dialog-qjsz" ).dialog({
      autoOpen: true,
	  width:255,
	  position: [cisk, 90],	
	  resizable: false,
	  dialogClass: 'sxmb',
	 //modal: true,
	 
      show: {
        effect: "blind",		
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
	  open: function (event, ui) {
              jq(".ui-dialog-titlebar-close",jq(this).parent()).hide();
 }
    });

  });
  
  jq(function(){
    jq( "#dialog-con" ).dialog({
      autoOpen: false,
	  width:255,
	  position: [cisk,jq('[aria-describedby="dialog-qjsz"]').outerHeight()+92],	
	  resizable: false,
	  dialogClass: 'sxmb',
	 //modal: true,
	 
      show: {
        effect: "blind",		
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

  }); 
  
    jq(function(){
    jq( "#dialog-requ" ).dialog({
      autoOpen: false,
	  width:255,	
	  position: [cisk,jq('[aria-describedby="dialog-qjsz"]').outerHeight()+92],	
	  resizable: false,
	  dialogClass: 'sxmb',
	 //modal: true,
	 
      show: {
        effect: "blind",		
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

  }); 
  
jq(function(){
    jq( "#zyscdm" ).dialog({
      autoOpen:false,
	  width:800,
	    height:420,
	 // resizable: false,
	  dialogClass: 'dmcope',
	  modal: true,
	 
      show: {
        effect: "blind",		
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

  });  
  
jq(window).resize(function(){
	cisk = (window.innerWidth-275);
	 jq('.sxmb').css({'left':cisk+'px'});
jq('#cdmkssss').css({"height":window.innerHeight-5});	
});

function yulandaimazy(reszi) {
	var neyyss = jq('#code').val();
if(neyyss.indexOf("&amp;gt;") < 1 && neyyss.indexOf("&gt;") < 0  && neyyss.indexOf(">") < 0 ){
	return false;	
}

if (jq('#code').val()==""){
	var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'>请先生成代码再预览效果！</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);	
		return false
}
var postdta = "";
if(reszi !=""){
 postdta =reszi;
}else{
	 postdta=jq('#code').val();
}

jq.post("/static/yulandaima/yulan.php",
    {
        leix:4,
        data:postdta,
    },
function(data,status){
var yldm = htmlDecode(data);
var rest2 = new RegExp("alquot","g");
yldm = yldm.replace(rest2,"&quot;");

var copysuc = jq("<div class='copy-yltips'><div class='copy-yltips-wrap'><input type='button' value='预览窗口打开失败,请点击此按钮预览效果！' name='sddkyl' id='sddkyl' class='btn-ok'><a href='http://www.mgzxzs.com/tmtbzxjc/644.html' class='szblj'  target='_blank'>设置预览窗口不被拦截的方法</a></div></div>");
jq("body").find(".copy-yltips").remove().end().append(copysuc);
			
jq('.copy-yltips #sddkyl').click(function(){
	mytools.webdebugger.Webtest(yldm);
	jq(".copy-yltips").fadeOut(2);	
});
jq('.copy-yltips a').click(function(){
	jq(".copy-yltips").fadeOut(2);	
});

mytools.webdebugger.Webtest(yldm);
jq(".copy-yltips").fadeOut(2);	

    });
};







function zyplstzclip(){
	
jq('#copyCode').zclip({ 
            path: "/static/ZeroClipboard.swf", 
            copy: function(){			
			if(jq('#code').val()==""){
			var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cw'></i>请先生成代码再复制代码！</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
			}else{
			 return jq('#code').val(); 	
			 }} ,
		afterCopy: function(){		
	var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cg'></i>复制成功</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
		}
});

jq('.fzkcrdm').zclip({ 
            path: "/static/ZeroClipboard.swf", 
            copy: function(){			
			if(jq('#code').val()==""){
			var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cw'></i>请先生成代码再复制代码！</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
			}else{
			 return htmlDecode(jq('#code').val()); 	
			 }} ,
		afterCopy: function(){		
	var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cg'></i>复制成功</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
		}
});

}


function ziyfx(ydata){
	var daaa = ydata;
var ydatas = daaa.replace(/\[\—\_\-\|\]/g,'"');
ydatas = ydatas.replace(/\[\|\-\o\-\]/g,"=");
ydatas = ydatas.replace(/\"\=/,"");
var rest2 = new RegExp("&quot;","g");	
ydatas = ydatas.replace(rest2,'"');	



/* var rest2 = new RegExp("&quot;","g");	
ydatas = ydatas.replace(rest2,'"');	
rs=eval("("+ydatas+")");	 */

//alert(rs['data'][1]["zjName"]);
ydatas = htmlDecode(ydatas); 
ydatas = ydatas.replace(/\"quot\;/g,"&quot;");

ydatas = ydatas.replace(/ui-resizable/g,"");
	ydatas = ydatas.replace(/ui-icon-gripsmall-diagonal-se/g,"");
			ydatas = ydatas.replace(/ui-resizable-handle/g,"");
			ydatas = ydatas.replace(/ui-resizable-se/g,"");
		ydatas = ydatas.replace(/ui-draggable/g,"");

		ydatas= ydatas.replace(/ui-resizable-s/g,"");
	
		ydatas = ydatas.replace(/ui-icon/g,"");



jq('#dmspmk').remove();

jq('.democao').append(ydatas);

jq(function() {
jq(".zpops").draggable()
});

jq("#dmspmk .rez").resizable();	

jq('#code').val(ydatas);			
jq( "#zyscdm" ).dialog( "open" );
}