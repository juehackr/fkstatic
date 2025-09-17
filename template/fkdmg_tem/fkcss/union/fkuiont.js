function fkuions() {
    jQuery("<link>").attr({ rel: "stylesheet", type: "text/css", href: "https://www.fkdmg.com/static/hongbao/remodal.css" }).appendTo("head");
    jQuery("<link>").attr({ rel: "stylesheet", type: "text/css", href: "https://www.fkdmg.com/static/hongbao/remodal-default-theme.css" }).appendTo("head");
    var html = "";
    html += ('<div class="remodal-bg"></div>');
    html += ('<div class="remodal" data-remodal-id="modal"><a data-remodal-action="close" class="remodal-close"></a><div class="fkunds"><a class="a1" href="/VIP/union/" target="_blank"  style="left:32px;"></a><a class="a2" style="left: 294px;"></a><img src="https://jixianci.fkdmg.com/template/fkdmg_tem/fkcss/union/img/fkuion.png" /></div></div>');
    jQuery("body").append(html);
var dddd = new Date();
var str = dddd.getFullYear()+(dddd.getMonth()+1)+dddd.getDate();
    //debugger;
    if (getCookie("jrt"+str) == null) {      
        jQuery.getScript("https://www.fkdmg.com/static/hongbao/remodal.min.js", function () {

            //debugger;
            var options = {
                hashTracking: false,
                //closeOnOutsideClick: false
            };
            var inst = jQuery('[data-remodal-id=modal]').remodal(options);

            jQuery(".fkunds a").click(function () {
                inst.close();
            });

            jQuery(document).on('closed', '.remodal', function (e) {
                var exp = new Date();
                exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
                document.cookie = "jrt"+str+"=1111;path=/;domain="+window.location.host+";expires=" + exp.toGMTString();
                console.log('Modal is closed' + (e.reason ? ', reason: ' + e.reason : ''));
                console.log(exp.toString());
            });

            inst.open();
        });
		// jQuery('#honbao').hide();
    }
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
}

fkuions();

function deleteCookie(name){
              var date=new Date();
              date.setTime(date.getTime()-10000);
              document.cookie=name+"=v; expire="+date.toGMTString();
}