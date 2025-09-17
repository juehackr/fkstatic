function loadpic(){
	var sSrc = jq.trim(jq('#picurl').val());
	if(sSrc == ''||sSrc == '填写图片地址'){
		alert('请填写图片完整的地址再载入图片！');
		jq("#picurl").focus();
		return false;
	}else{
		jq("<img/>").attr("src", sSrc).load(function() {
			var imgWidth = this.width;
			var imgHeight = this.height;
			jq("#imgMap").html('<img id="imgbox" src="./images/box.gif" name="test" width="990" height="100" border="0" usemap="#Map" ref="imageMaps" /><map name="Map"><area shape="rect" coords="572,122,1369,390" href="" /></map>');
			
			var a = auto_center(imgWidth);

			jq('.img').attr({"src":sSrc,"height":imgHeight,"width":imgWidth}).css("left",a);
			jq("#imgbox").attr({"height":imgHeight,"width":imgWidth}).css("left",a);
			jq('#imgMap').imageMaps();
		});
		
	}
}

function auto_center(widht){
	
	var main_width = 990;
	var image_width = widht;
	var a = 0;
	if(image_width > main_width){
		var a = (main_width - image_width)/2;
	}
	return a+'px';
}

function showcode(gettype){
	var s = '';
	var sUrl = '';
	var sRec = '';
	var sTarget = '';
	var sdata  = '';
	var picwidth = jq(".img").width();
	var picheight = jq(".img").height();
	var shoptype = jq(":radio[name='shoptype']:checked").val();
	var cut = jq("#cut").val();
	var picurl = encodeURIComponent(jq("#picurl").val());
	
	var sSrc = jq.trim(jq('#picurl').val());
	if(sSrc == ''||sSrc == '填写图片地址'){
		alert('请填写图片完整的地址再载入图片！');
		jq("#picurl").focus();
		return false;
	}
	//读取每个热区链接的信息
	jq('.rect-value').each(function(i){
		sUrl = jq(this).prev().val();
		sRec = jq.trim(jq(this).val());
		sTarget = (jq(this).prev().attr('checked')) ? 'target="_blank"' : '';
		s += "\n\t"+'<area style="outline:none;" target="_blank" shape="rect" coords="'+sRec+'" href="'+sUrl+'" '+sTarget+' />';
	});
	
	var re = /http:\/\/shamony\.taobao\.com/;
	if(re.test(s)){
		alert('友情提示：生成的代码中含有测试连接，请修改成自己店铺或者产品连接！');
		}
	sdata = encodeURIComponent(s);
	ajaxdata = "gettype="+gettype+"&shoptype="+shoptype+"&picurl="+picurl+"&picwidth="+picwidth+"&picheight="+picheight+"&cut="+cut+"&sdata="+sdata;
	if(gettype==1) {
	jq.ajax({ 
		type: "post", 
		url : "./index.php?get=active&getmod=qphb&ajax=1", 
		dataType:'html',
		data: ajaxdata, 
		success: function(html){
			jq("#codebox").val(html);
			//alert(html);
			jq(".getcode").css("display","block");
			if(jq(".zclip").length > 0 ){
				//没得任何活动
			}else{
				jq('#copy_input').zclip({
					path: 'js/ZeroClipboard.swf',
					copy: function(){
						return jq('#codebox').val();
					},
					afterCopy: function(){
						alert("复制成功！");
						jq("#codebox").css("background-color",'#cff');
					}
				});
			}
			document.getElementById("load").innerHTML = '<img style="vertical-align: middle;" src="./images/loading.gif"/>为节省资源您需要等待<span id="time" class="red">'+ t +'</span>秒！';
			jq('.send').attr('disabled', 'true');
			delay();
		} 
	}); 
	}else{
		var a = jq("<a href='./index.php?get=active&getmod=qphb&ajax=1&"+ajaxdata+"' target='_blank'>ajax</a>").get(0);
		var e = document.createEvent('MouseEvents');
		e.initEvent( 'click', true, true );
		a.dispatchEvent(e);
	}
}