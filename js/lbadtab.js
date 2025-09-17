var lunboadjiazai = function () {
    jQuery('body').append('<link rel="stylesheet" href="//fkstatic.fkdmg.com/static/layui/css/layui.css" media="all">');
    layui.use(['carousel'], function () {
        var carousel = layui.carousel;
        carousel.render({
            elem: '#fkadbanner',
            interval: 4000,
            anim: 'default',
            height: jQuery('.adbanner').height() + 'px',
            width: jQuery('.adbanner').width() + 'px',
            indicator: 'none'
        });
    });
}

if (typeof (layui) != "undefined") {
    lunboadjiazai();
} else {
    jQuery.getScript("//fkstatic.fkdmg.com/static/layui/layui.all.js", function (script, textStatus, jqXHR) {
        lunboadjiazai();
    });
}