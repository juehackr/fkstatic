jQuery(function () {
 jQuery(".vip-container .con-wrap").hover(function () {
		0 == jQuery(this).index() && jQuery(".vip-container .con-wrap").eq(3).addClass("on"), jQuery(this).addClass("on").siblings().removeClass("on")
	}), jQuery(".vip-container .clearfix").mouseleave(function () {
		jQuery(".vip-container .con-wrap").removeClass("on").eq(3).addClass("on")
	}), jQuery(".vip-card .qt-btn").hover(function () {
		jQuery(this).toggleClass("btn-green-linear")
	})
});