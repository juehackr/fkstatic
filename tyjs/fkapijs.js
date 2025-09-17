

var datevv = new Date();
var dqnyr = datevv.getFullYear() + "-" + (datevv.getMonth() + 1) + "-" + datevv.getDate();


var shoumiico = function () {
    if (jQuery(".fk1111ico").length > 0) {  //已经加载就免加载
        return;
    }

    jQuery("#fenxue").hide();
    var miicocode = '<div class="fk1111ico css3dd" style="position: fixed;z-index:9999;top:130px;left:20px;"><span style="float: left;color: #fff;position: relative;left: 40px;top: 19px;font-size: 19px;padding: 0px 11px;cursor: pointer;" class="gn11ico">X</span><a href="https://www.fkdmg.com/VIP/huodong/?ly=pfad#weex" target="_blank"><img src="https://img.alicdn.com/imgextra/i1/456989075/O1CN01MObF9z2GuOvRTFE83-456989075.png"/></a></div>';

    if (localStorage.getItem("fk1111ico") != dqnyr) {
        jQuery("body").prepend(miicocode);
    }

    jQuery(document).on('click', '.fk1111ico .gn11ico', function () {
        jQuery(".fk1111ico").hide();
        localStorage.setItem("fk1111ico", dqnyr);
    });

    //显示横幅广告
    var miicocode2 = '<div class="fk11hf" style="display:block;text-align: center;background:#6600ff;position: relative;"><a href="https://www.fkdmg.com/VIP/huodong/?ly=hhad#weex" target="_blank"><img src="https://img.alicdn.com/imgextra/i3/456989075/O1CN01jnLwxI2GuOvPSwKDL-456989075.gif"/></a><span class="gbhfad" style="cursor: pointer;background: #fff000;padding: 0 5px;border-radius: 8px;font-size: 12px;position: relative;">X</span></div>';

    if (localStorage.getItem("fk11hf") != dqnyr) {
        jQuery("body").prepend(miicocode2);
    }

    jQuery(document).on('click', '.fk11hf .gbhfad', function () {
        jQuery(".fk11hf").hide();
        localStorage.setItem("fk11hf", dqnyr);
    });
}

var tyhengfu = function () {


    if (window.location.href.indexOf("jixianci") == -1) {
        //显示横幅广告
        var miicocode2 = '<div class="fk11hf" style="display:block;text-align: center;background:#6600ff;position: relative;"><a href="https://www.fkdmg.com/VIP/huodong/?ly=hhad" target="_blank"><img src="https://img.alicdn.com/imgextra/i3/456989075/O1CN01jnLwxI2GuOvPSwKDL-456989075.gif"/></a><span class="gbhfad" style="cursor: pointer;background: #fff000;padding: 0 5px;border-radius: 8px;font-size: 12px;position: relative;">X</span></div>';

        if (localStorage.getItem("fk11hfty") != dqnyr) {
            jQuery("body").prepend(miicocode2);
        }

        jQuery(document).on('click', '.fk11hf .gbhfad', function () {
            jQuery(".fk11hf").hide();
            localStorage.setItem("fk11hfty", dqnyr);
        });
    } else {

        jQuery("#fenxue").hide();
        var miicocode = '<div class="fk1111ico css3dd" style="position: fixed;z-index:9999;top:130px;left:20px;"><span style="float: left;color: #fe4a14;position: relative;left: 17px;top: 19px;font-size: 14px;padding: 0px 11px;cursor: pointer;" class="gn11ico">X</span><a href="https://www.fkdmg.com/VIP/huodong/?ly=pfad" target="_blank"><img src="https://img.alicdn.com/imgextra/i4/456989075/O1CN01d5Y8lN2GuOvV0OffM-456989075.gif"/></a></div>';

        if (localStorage.getItem("fk1111icoty") != dqnyr) {
            jQuery("body").prepend(miicocode);
        }

        jQuery(document).on('click', '.fk1111ico .gn11ico', function () {
            jQuery(".fk1111ico").hide();
            localStorage.setItem("fk1111icoty", dqnyr);
        });

    }

    if (localStorage.getItem("fk11adty") == dqnyr) {
        return;
    } else {
        localStorage.setItem("fk11adty", dqnyr);
    }


    if (typeof (layer) != "undefined") { //已引入
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['auto'],
            skin: 'layui-layer-nobg', //没有背景色
            shade: 0.8,
            anim: 1,
            content: '<div id="fk1111" style="width:538px; height:470px;"><style>.layui-layer{box-shadow: none;}.layui-layer-page .layui-layer-content {position: relative;overflow: hidden;}</style><a href="https://www.fkdmg.com/VIP/huodong/?ly=tcad" target="_blank"><img src="https://img.alicdn.com/imgextra/i1/456989075/O1CN01FeaYpV2GuOvE3TEZO-456989075.png" style="max-width: 100%;"></a></div>'
        });
    } else { //未引入
        jQuery.getScript("//cdn.jsdelivr.net/gh/juehackr/fkstatic@master/layer/layer.js", function () {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                area: ['auto'],
                skin: 'layui-layer-nobg', //没有背景色
                shade: 0.8,
                anim: 1,
                content: '<div id="fk1111" style="width:538px; height:470px;"><style>.layui-layer{box-shadow: none;}.layui-layer-page .layui-layer-content {position: relative;overflow: hidden;}</style><a href="https://www.fkdmg.com/VIP/huodong/?ly=tcad" target="_blank"><img src="https://img.alicdn.com/imgextra/i1/456989075/O1CN01FeaYpV2GuOvE3TEZO-456989075.png" style="max-width: 100%;"></a></div>'
            });
        });
    }



}

var showfkad = function () {
    //加载小悬浮开始
    shoumiico();
    //加载小悬浮结束
    if (jQuery("#fk1111").length > 0) {  //已经加载就免加载
        return;
    }
    if (localStorage.getItem("fk11ad") == dqnyr) {
        return;
    } else {
        localStorage.setItem("fk11ad", dqnyr);
    }
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: ['auto'],
        skin: 'layui-layer-nobg', //没有背景色
        shade: 0.8,
        anim: 1,
        content: '<div id="fk1111" style="width:538px; height:470px;"><style>.layui-layer{box-shadow: none;}</style><a href="https://www.fkdmg.com/VIP/huodong/?ly=tcad#weex" target="_blank"><img src="https://img.alicdn.com/imgextra/i1/456989075/O1CN01FeaYpV2GuOvE3TEZO-456989075.png" style="max-width: 100%;"></a></div>'
    });
}


//判断是手机端还是pc端
function isshouji() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
}

let kefuurl = !isshouji()?'https://amos.alicdn.com/getcid.aw?v=2&uid=juehackr&site=cntaobao&s=2&groupid=0&charset=utf-8':'https://pudadang.com/d/index/e/p/2.html';

var kfcode = !isshouji()?`<div class="fkbtn" style="position: fixed;bottom: 5px;right: 10px;z-index: 999;"><a href="${kefuurl}" target="_blank" ><img src="https://img.alicdn.com/imgextra/i4/456989075/O1CN01qjDbjS2GuOw6nRUew-456989075.gif"/></a></div>`:`<div class="fkbtn" style="position: fixed;bottom: 0;z-index: 999;width: 100%;background:rgba(255,255,255,0.89);height: 60px;line-height: 60px;font-size: 20px;text-align: center;"><a href="${kefuurl}" target="_blank">点击联系<b style="color: #00b126;">疯狂美工客服</b>为您解忧</a></div>`;

if (window.location.href.indexOf("jixianci") == -1 && window.location.href.indexOf("tudashi") == -1) {
    jQuery("body").prepend(kfcode);
}

if (window.location.href.indexOf(".mgzxzs.com/weex/") != -1 || window.location.href.indexOf(".mgzxzs.com/xcx/") != -1 || window.location.href.indexOf("/thread-") != -1 || window.location.href.indexOf("/forum.php") != -1 || jQuery("#pt .z").text().indexOf('疯狂手淘WEEX') != -1 || jQuery("#pt .z").text().indexOf('小程序装修模块') != -1) {
    var xfhtml = '<div class="xcxxf" style="position: fixed;height: 0px;left:50%;margin-left:-835px;top: 230px;"><a style="display: block;border-radius: 5px;overflow: hidden;" href="https://www.fkdmg.com/lcd/?ly=wenz" target="_blank" rel="nofollow"><img src="https://img.alicdn.com/imgextra/i1/456989075/O1CN01cHxe5G2GuOyaANQq7-456989075.gif"/></a></div>';
    jQuery("body").prepend(xfhtml);
}



function sonmikad(){
    
/***无套路赠送手淘模块 */

var hdhtml = `<div class="hdtanchuang">
<style>.hdtanchuang{
    position: fixed;
    z-index: 99999;
    left: 50%;
    margin-left: -475px;
    top: 50%;
    margin-top: -330px;    
    
}
.hdtanchuang .hdimsa{

    animation: hdtcacss3 2s linear 2s infinite alternate;
    -webkit-animation: hdtcacss3 2s linear 2s infinite alternate;
}
.tmbjs{    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0.3;}.hdtcgb{    display: inline-block;
        color: #fff;
        font-size: 47px;
        position: relative;
        z-index: 3;
        border: 3px solid #fff;
        border-radius: 25px;
        width: 39px;
        height: 39px;
        text-align: center;
        line-height: 31px;
        cursor: pointer;
        margin-left: 445px;}
        
        @keyframes hdtcacss3
{
    0%   {transform:scale(1.0)}
    25%  {transform:scale(1.05)}
    50%  {transform:scale(1.1)}
    75%  {transform:scale(1.05)}
    100% {transform:scale(1.0)}
}
 
@-webkit-keyframes hdtcacss3 
{
    0%   {transform:scale(1.0)}
    25%  {transform:scale(1.05)}
    50%  {transform:scale(1.1)}
    75%  {transform:scale(1.05)}
    100% {transform:scale(1.0)}
}
        </style>
<div class="tmbjs"></div>
<div class="hdimsa" title="无套路真心送,手淘模块,扫码加客服领取" style="background: url(https://img.fkdmg.com/ossimg/%E6%89%8B%E6%B7%98%E8%B5%A0%E9%80%81%E6%B4%BB%E5%8A%A8.png);width: 950px;height: 602px;position: relative;z-index: 2;"></div>
<a class="hdtcgb">×</a>
</div>`;

if (!localStorage.getItem("stmktc") && !isshouji()) {
    jQuery(".hdtanchuang").remove();
    jQuery("body").append(hdhtml);
}

jQuery(".hdtcgb").click(function () {
    jQuery(".hdtanchuang").remove();
    localStorage.setItem("stmktc", 1);
});

/***无套路赠送手淘模块结束 */
}//sonmikad()