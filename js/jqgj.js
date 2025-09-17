function closeWindowr(time){
	jq('#texsscdm').attr("disabled", "true"); 
    jq('#texsyldm').attr("disabled", "true");
	jq('#texsyldmal').attr("disabled", "true"); 
    jq('#texsscdmal').attr("disabled", "true");
  if(time>0){   
    jq('#texsscdm').attr("value", '请等待'+time+'秒'); 
	jq('#texsyldm').attr("value", '请等待'+time+'秒'); 
	 jq('#texsyldmal').attr("value", '请等待'+time+'秒'); 
	jq('#texsscdmal').attr("value", '请等待'+time+'秒'); 
	//jq(".sdlogin").html('<img src="static/image/common/loading.gif">'+time+'秒后'');
	
    time--;
    window.setTimeout('closeWindowr('+time+')',1000);
  }else{   
    jq('#texsscdm').removeAttr("disabled");
    jq('#texsscdm').attr("value", '生成代码'); 
	jq('#texsyldm').removeAttr("disabled");
    jq('#texsyldm').attr("value", '生成并预览效果'); 
	
	jq('#texsyldmal').removeAttr("disabled");
    jq('#texsyldmal').attr("value", '生成并预览效果'); 
	jq('#texsscdmal').removeAttr("disabled");
    jq('#texsscdmal').attr("value", '生成代码'); 
	
  }   
}; 


var mytools = {  
       webdebugger: {
        Webtest: function (neoron) {
            var win = window.open();
            win.document.open();
            win.document.write(neoron);
            win.document.close();
        }    } };


function yulandaima(reszi) {
	var neyyss = jq('#scdm_html').val();
if(neyyss.indexOf("&amp;gt;") < 1 && neyyss.indexOf("&gt;") < 0  && neyyss.indexOf(">") < 0 ){
	return false;	
}

if (jq('#scdm_html').val()==""){
	var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'>请先生成代码再预览效果！</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);	
		return false
}
var postdta = "";
if(reszi !=""){
 postdta =reszi;
}else{
	 postdta=jq('#scdm_html').val();
}

jq.post("/static/yulandaima/yulan.php",
    {
        leix:jq("input[name='dplx']:checked").val(),
        data:postdta,
    },
function(data,status){
var yldm = htmlDecode(data);
var rest2 = new RegExp("alquot","g");
yldm = yldm.replace(rest2,"&quot;");

var copysuc = jq("<div class='copy-yltips'><div class='copy-yltips-wrap'><input type='button' value='预览窗口打开失败,请点击此按钮预览效果！' name='sddkyl' id='sddkyl' class='btn-ok'><a href='###' class='szblj'  target='_blank'>设置预览窗口不被拦截的方法</a></div></div>");
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


function htmlEncode(value){
        return jq('<div />').text(value).html();
}
function htmlDecode(value) {
        return jq('<div />').html(value).text();
}

jq('#qkbbsj').click(function(){
	jq('.bbcs input.input-box').val("");
})

//取图片尺寸填写
function psize(obj,sx){
	var sSrc = obj.value;
	if(IsURL(sSrc)){
		jq("<img/>").attr("src", sSrc).load(function() {
		imgWidth = this.width;
		imgHeight = this.height;
	    ttIsURL(sSrc);
		
		
		if(sx==1){jq("#show_height").val(imgHeight);
		jq("#show_width").val(imgWidth);}else{
			jq("#jiantougao").val(imgHeight);			
		}
		
		
		});	
	}
	
}




function ttIsURL(csss) {
if(jq('div').is('#dmspmk')){	
jq("#dmspmk").css({
	"background":'url('+csss+')',
	"width":imgWidth,
	"height":imgHeight
});}
}


function IsURL(bgurl) {
	var strRegex = "((^http)|(^https)|(^ftp)):\/\/(\\w)+\.(\\w)+";
	var re = new RegExp(strRegex);
	if (re.test(bgurl)){
		return true;
	} else {
		 return false;
	}
}

jq(function() {
  jq('label.dplxla').click(function(){
    var radioId = jq(this).attr('for');
    jq('label.dplxla').removeClass('checked') && jq(this).attr('class', 'dplxla checked');
    jq('input[name="dplx"]').removeAttr('checked') && jq('.dplx' + radioId).attr('checked', 'checked');
  });
});


jq('label#jrqpx').click(function(){
if (jq("#jiaruqp").get(0).checked) {
  jq('label#jrqpx').attr('class', 'jrqpdaim');
}else{
	jq('label#jrqpx').attr('class', 'checked');
}});



function piaofuyangs(id){
        var objS = document.getElementById(id);
        var grade = objS.options[objS.selectedIndex].value;
		var clid = id.replace(/[^0-9]/ig,"");
		if(grade=="自定义样式"){		
			//alert();	 
		jq('#zdyp'+clid).removeAttr("disabled");
		}else{	
		jq('#zdyp'+clid).attr("disabled", "true");
		}		  
}





//ty模块ps

function tysc(ipss){	
		if(!tycheck()){
		return false;
	}	
			
	jq('#scdm_html').empty();
	jq(".fuzhi").hide();
	jq("#texsfzdm").hide();
	  jq(".zclip").hide();
	　if(ipss==0){
          var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>预览代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);		
			}else{
				var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);	
			
			}
			
		
	var formdata = jq('#shetsps').serialize()
	
 if(jq('label').is('#jrqpx')){	 
	 if (jq("#jiaruqp").get(0).checked) {		
   formdata =formdata+"&jrqp=1";
}else{
	 formdata =formdata+"&jrqp=0";
}
	 }

	
	jq.ajax({
		type:'post',
		url:"portal.php?mod=fktools&aid="+ aid +"&formhash="+jq("#yformhash").html()+"&ajax=1",//拼接
		data:formdata,
		error:function(){
		  alert('生成出错请检查您的设置');
		},
		success:function(html){
		rs=eval("("+html+")");	
		jq('#scdm_html').empty();
		var rest = new RegExp("iquoti","g");
		var rest2 = new RegExp("&quot;","g");
		
		var lur = rs['jieguo'];		
        lur = lur.replace(rest,"'")
		lur = lur.replace(rest2,"'")
		
		jq('#scdm_html').val(lur);
		jq(".copy-tips").fadeOut(1000);
		closeWindowr(4);
 　　　　if(ipss==0){
           yulandaima();
			}
 			plstzclip();
			}
	})	
	
}






//tyal模块ps


jq(document).ready(function(){ 
jq('#texsyldmal').click(function(){
	tyscal(0);
});
jq('#texsscdmal').click(function(){
	tyscal(1);
});
jq('.fzsb').click(function(){
jq('.fuzhi').hide();
 var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='gt'></i>请在以下编辑框中手动复制下哦。</div></div>");
jq("body").find(".copy-tips").remove().end().append(copysuc);	
jq(".copy-tips").fadeOut(3000);

//JS选中文本框中内容
document.getElementById("scdm_html").focus();
document.getElementById("scdm_html").select();
//jquery选中文本框中内容
jq("#scdm_html").focus();
jq("#scdm_html").select();
});
});


function tyscal(ipss){
	
		if(!tycheck()){
		return false;
	}	
			
	jq('#scdm_html').empty();
	jq(".fuzhi").hide();
	jq("#texsfzdm").hide();
	  jq(".zclip").hide();
	　if(ipss==0){
          var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>预览代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);		
			}else{
				var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='dd'></i>代码生成中,请稍后...</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);				
			}
	
	var formdata = jq('#shetsps').serialize()
	
 if(jq('label').is('#jrqpx')){	 
	 if (jq("#jiaruqp").get(0).checked) {		
   formdata =formdata+"&jrqp=1";
}else{
	 formdata =formdata+"&jrqp=0";
}
	 }

	jq.ajax({
		type:'post',
		url:"portal.php?mod=fktools_al&aid="+ aid +"&formhash="+jq("#yformhash").html()+"&ajax=1",//拼接
		data:formdata,
		error:function(){
		  alert('生成出错请检查您的设置');
		},
		success:function(html){
		rs=eval("("+html+")");	
		jq('#scdm_html').empty();
		var rest = new RegExp("&amp;","g");	
		var rest2 = new RegExp("&quot;","g");	
		var rest3 = new RegExp("alquot","g");	
		var rest4 = new RegExp("单引号","g");
		var lur = rs['jieguo'];			
		lur =htmlEncode(lur);
		lur = lur.replace(rest,'&');	
	    lur = lur.replace(rest2,'"');
		 lur = lur.replace(rest4,"'");
		var yldm =  lur;
		lur = lur.replace(rest3,"&quot;");
		jq('#scdm_html').val(lur);			
		jq(".copy-tips").fadeOut(1000);
		closeWindowr(4);
 　　　　if(ipss==0){	 	
           yulandaima(yldm);
		}
 		plstzclip();
			}
	})	
	
}

function tycheck(){
	var pics = jq("#picbox .control-group").length;
	for (var i=1;i<=pics;i++){
	var url = jq("#mkdm"+i).val();	
	if(url=="" || url=="请在此处填写轮播内容"){
		jq("#mkdm"+i).focus();
		alert("注意：输入框 "+i+" 尚未填写，还不能生成代码哦！");
		return (false);
	}else{
		if(i==pics){
				return (true);
			}
}
	}
}


//取图片尺寸填写
function psizei(obj,toid){
	var sySrc = obj.value;
	if(IsURL(sySrc)){
		jq("<img/>").attr("src", sySrc).load(function() {
		imgWidth = this.width;
		imgHeight = this.height;
	
	jq("#"+toid).css({
	"background-image":'url("'+sySrc+'")',
	"width":imgWidth,
	"height":imgHeight
});	
	});	
	}	
}


function getzei(obj){
	var sySrc = obj.value;
	if(IsURL(sySrc)){
		jq("<img/>").attr("src", sySrc).load(function() {
		imgWidth = this.width;
		imgHeight = this.height;	
jq(".video"+obj.id).css({"height":imgHeight+"px","width":imgWidth+"px"});
	});	
	}	
}

//plstzclip
function plstzclip(){
	var neyyss = jq('#scdm_html').val();
if(neyyss.indexOf("&amp;gt;") > 0 || neyyss.indexOf("&gt;") > 0 || neyyss.indexOf(">") > 0 ){
 	jq(".fuzhi").show();
	jq("#texsfzdm2").show();
	jq(".zclip").show();
	jq("#scdm_html").css({"font-size":"12px","color":"#333","text-align":"left","line-height":"inherit"});
	
jq('#texsfzdm2').zclip({ 
            path: "/static/ZeroClipboard.swf", 
            copy: function(){			
			if(jq('#scdm_html').val()==""){
			var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cw'></i>请先生成代码再复制代码！</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
			}else{
			 return jq('#scdm_html').val(); 	
			 }} ,
		afterCopy: function(){		
	var copysuc = jq("<div class='copy-tips'><div class='copy-tips-wrap'><i class='cg'></i>复制成功</div></div>");
			jq("body").find(".copy-tips").remove().end().append(copysuc);
			jq(".copy-tips").fadeOut(3000);
		}
})}else{
	
	jq(".fuzhi").hide();
	jq("#texsfzdm2").hide();
	jq(".zclip").hide();
	jq("#scdm_html").css({
	"font-size":"20px",
	"color":"#F00",
	"text-align":"center",
	"line-height":"100px"
});
}}

//临时调试

jq('#f_width').bind('input propertychange', function() {
jq("#piaofu1").css({
	"width":jq("#f_width").val()
});}); 

jq('#f_height').bind('input propertychange', function() {
jq("#piaofu1").css({
	"height":jq("#f_height").val()
});}); 

jq("#fudondm").change(function(){
	jq('.htmlmkmk').html(jq('#fudondm').val());
    		});	
			
jq(".htmlmk").resize(function(){
	jq('#f_width').val(jq(".htmlmk").width());
	jq('#f_height').val(jq(".htmlmk").height());
});



jq('#show_widths').bind('input propertychange', function() {
jq("#dmspmk").css({
	"width":jq("#show_widths").val()
});}); 

jq('#show_heights').bind('input propertychange', function() {
jq("#dmspmk").css({
	"height":jq("#show_heights").val()
});}); 


