var layid = location.search.replace(/^\?p=/, '');
layer.load();
var tongjidata =  new Vue({
  el: '#unhome',
  data: {
      zongjiner: '0',
      tuizon:'0',
      yiduihuan:'0',
      weiduihuan:'0'
  }
});
window.onload = function(){
if(jQuery('.tongji').length>=1){
  gxtongji();
  }
  layer.closeAll('loading');
}

function gxtongji(){
  Vue.http.post('/source/union/unget.php', {
    typ:'tongji'
        },{emulateJSON:true}).then(function(res){
    if(res.body.msm==1){
    var tuidata = res.body.data;
    tongjidata.zongjiner = tuidata.zong;
    tongjidata.tuizon = tuidata.tuizong;
    tongjidata.yiduihuan = tuidata.yidui;
    tongjidata.weiduihuan = tuidata.weidui;
    }
    });
}

if(jQuery('#zuilog').length>=1){
  layui.use('table', function(){
    var table = layui.table;    
    table.render({
      elem: '#zuilog'
      ,url:'/source/union/unget.php?typ=zuilog'
      ,cols: [[
        {field:'uid', width:80, title: '用户ID'}
        ,{field:'username',  title: '用户名'}      
        ,{field:'dateline', title: '订单时间'}
        ,{field:'qian',  title: '抵扣金额'}
        ,{field:'jiang', title: '奖励金'}
        ,{field:'pay_status',width:120, title: '支付状态'}   
      ]]
      ,page: true
    });
  });
}

//获取兑换记录
if(layid=='undhlog'){
  layui.use('table', function(){
    var table2 = layui.table;    
    table2.render({
      elem: '#duihuanlog'
      ,url:'/source/union/unget.php?typ=undhlog'
      ,cols: [[
        {field:'spname', width:225, title: '商品名称'}
        ,{field:'shijian', width:150, title: '兑换时间',align :'center'}
        ,{field:'huafei',width:120,  title: '花费金额',align :'center'}
        ,{field:'ip', width:130,title: '操作IP'}
        ,{field:'beizhu',title: '系统备注'}
        ,{field:'zhuangtai',width:120, title: '兑换状态',align :'center'}   
      ]]
      ,page: true
    });
  });
}else if(layid=='ddsh'){
 layui.use('table', function(){
    var table3 = layui.table;    
    table3.render({
      elem: '#unddshzx'
      ,url:'/source/union/unget.php?typ=unddshzx'
      ,cols: [[
        {field:'id', title: 'ID',style:'display:none;'}
        ,{field:'spname', width:225, title: '商品名称'}
        ,{field:'shijian', width:150, title: '兑换时间',align :'center'}
        ,{field:'huafei',width:120,  title: '花费金额',align :'center'}
        ,{field:'uid', width:100,title: '用户ID',align :'center'}
        ,{field:'beizhu', width:350,title: '系统备注'}
        ,{field:'right',width:100, title: '操作',align :'center', toolbar: '#barcaozuo'}   
      ]]
      ,page: true
    });

      //监听工具条
  table3.on('tool(unddshzx)', function(obj){
    var data = obj.data;
  if(obj.event === 'del'){
      layer.confirm('真的要退回这个兑换申请吗?', function(index){
        layer.prompt({title: '请填写关闭原因', formType: 2}, function(text, index){
          layer.close(index);
        Vue.http.post('/source/union/undui.php', {
          typ:'deldd',
          id:data.id,
          gbyy:text
              },{emulateJSON:true}).then(function(res){
              if(res.body.msm==1){
                obj.del();
              }
              layer.alert(res.body.data,{icon:res.body.msm});
          });
        });
          layer.close(index);
     
      });
    }else if(obj.event === 'edit'){ //订单审核操作
     // layer.alert('编辑行：<br>'+ JSON.stringify(data))
     layer.confirm('是否已经完成了转账/发货?', function(index){
      layer.close(index);
     layer.prompt({title: '请填写支付宝订单号或快递单号', formType: 2}, function(text, index){
      layer.close(index);
      Vue.http.post('/source/union/undui.php', {
        typ:'ddtg',
        id:data.id,
        newbz:text
            },{emulateJSON:true}).then(function(res){
            if(res.body.msm==1){
              obj.del();
            }
            layer.alert(res.body.data,{icon:res.body.msm});
        });
    });
    layer.close(index);
  });
    }
  });
  });
  jQuery('[data-field="id"]').hide();
}



  function fkcopyhq(){
    var clipboard = new ClipboardJS('#copyhm', {
      text: function (trigger) {
         return '这是疯狂美工VIP内部优惠码,自助开通时输入这个优惠码购买疯狂工具VIP可以更优惠:'+'\n'+jQuery('#youhuimas').text();
     }
 });
    clipboard.on('success', e => {  
      layer.msg('复制成功！');        
          });  
          clipboard.on('error', e => {
            layer.msg('复制失败,请自行手动复制！');       
          }); 

   var clipboard2 = new ClipboardJS('#copyhurl', {
     text: function (trigger) {
        return '这是疯狂美工VIP内部优惠链接,通过这个链接开通疯狂工具VIP可以更优惠:'+'\n'+jQuery('#youhuiurls').text();
    }
});
          clipboard2.on('success', e => {  
            layer.msg('复制成功！');        
                });  
                clipboard2.on('error', e => {
                  layer.msg('复制失败,请自行手动复制！');         
                }); 
}fkcopyhq();


jQuery('.delthissp').click(function () { 
  var timd = jQuery(this).attr('data-spid');
  layer.confirm('确定要删除这个商品吗？', {
    btn: ['确定','取消'] ,
    icon:3
  },function(){
    layer.load();
    layer.msg('请稍候...');
    Vue.http.post('/source/union/unget.php', {
      typ:'delsp',
      jp:timd
          },{emulateJSON:true}).then(function(res){
      if(res.body.msm==1){
        layer.alert(res.body.data, { icon: 1 });
        location.reload();
      }else{
        layer.alert(res.body.data, { icon: 0 });
      }
      layer.closeAll('loading');
      });
  },function(){
  
  });
});

jQuery('.spduihuan').click(function(){
  var timd = jQuery(this).attr('data-timo');
  var timjson = eval('(' + timd + ')');
if(discuz_uid==0){
  userdl();
  layer.alert('请先登录后再进行此操作!',{title:'兑换失败',icon:0});
  return false;
}else if(tongjidata.weiduihuan<timjson.jiage){
layer.alert('您的未兑换金额不足：'+timjson.jiage+' 元，加油继续努力! 相信不久后您就可以带走此奖品哦:)',{title:'兑换失败',icon:0});
    return false;
  }

  layer.confirm('您将花费：<b>'+timjson.jiage+'元</b> 兑换此奖品，兑换后不能撤回，请问是否继续操作？', {
    btn: ['确定兑换','取消兑换'] ,
    icon:3
  },function(){
    layer.load();
    layer.msg('请稍候...');
    Vue.http.post('/source/union/undui.php', {
      typ:'dui',
      jp:timjson.id
          },{emulateJSON:true}).then(function(res){
      if(res.body.msm==1){
        gxtongji();//更新统计
        layer.alert(res.body.data,{icon:1});
      }else{
        layer.alert(res.body.data,{icon:0});
      }
      layer.closeAll('loading');
      });
  },function(){
  
  });
});

function spbjsq(){
  layui.use(['form'], function(){
    var form = layui.form,layer = layui.layer;
    form.val('example');
  });
}spbjsq();

jQuery('#tjsps').click(function(){

if(jQuery('[name="title"]').val()=='' || jQuery('[name="sptyp"]').val()=='' || jQuery('[name="pic"]').val()=='' || jQuery('[name="jiage"]').val()==''  || jQuery('[name="kucun"]').val()=='' || jQuery('[name="jianjie"]').val()==''){
  layer.alert('请填写完全信息后再提交!',{icon:0});
  return false;
}

  var formdata = jQuery('#spdata').serialize();
    jQuery.ajax({
      type: 'post',
      url: "/source/union/unget.php?formhash=" + jQuery("#yformhash").html() + "&typ=spbj", //拼接
      data: formdata,
      error: function () {
        layer.alert('提交出错请检查您的设置');
      },
      success: function (html) {
          rs = eval("(" + html + ")");
          if(rs.msm==1){
            layer.alert(rs.data,{icon:1});
            location.href = '/VIP/union/?p=jiangpin';
          }else{
            layer.alert(rs.data,{icon:0});
          }
      }
  });
});