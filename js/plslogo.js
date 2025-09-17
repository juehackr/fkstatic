
jQuery('#user .pop.login,#user .pop.reg,.fkloginjh .fkdlbtn,.fkundlright .fkregbtn').click(function(){
 // jQuery(".dliogs").dialog( "open" );
	userdl();
});

jQuery('#user').mouseover(function(){
 jQuery('#user .user_menu').show();
});

jQuery('#user').mouseout(function(){
 jQuery('#user .user_menu').hide();
});


function userdl(){
layer.open({
  type: 2,
  title: '用户登录 / 注册',
  shadeClose: true,
  shade: 0.8,	
  area: ['655px', '438px'],
  skin: 'userdl',
  content: [referers,'no']//iframe的url
}); 
}
function userwxdl(){
layer.open({
  type: 2,
  title: '用户登录',
  shadeClose: true,
  shade: 0.8,	
  area: ['305px', '395px'],
  skin: 'userwxdl',
  content: [wxdlurl,'no']//iframe的url
}); 
}

var browser = {
  versions: function() {
    var u = navigator.userAgent;
    return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
			iPhone: u.indexOf('iPhone') > -1 , //iPhone
			iPad: u.indexOf('iPad') > -1, //iPad
			webApp: u.indexOf('Safari') > -1 //Safari
		};
	}
}