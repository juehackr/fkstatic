(function($) {

    /**
     * 默认参数
     */
    var defaultOpts = {
        stage: document, //舞台
        item: 'resize-item', //可缩放的类名
    };

    /**
     * 定义类
     */
    var ZResize = function(options) {
        this.options = $.extend({}, defaultOpts, options);
        this.init();
    }

    ZResize.prototype = {
        init: function() {
            this.initResizeBox();
        },
        /**
         *  初始化拖拽item
         */
        initResizeBox: function() {
            var self = this;
            $(self.options.item).each(function () {
                //创建面板
                var width = $(this).width();
                var height = $(this).height();
                var resizePanel = $('<div class"resize-panel"></div>');
                resizePanel.css({
                    width: width,
                    height: height,
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    'background-color': 'rgba(0,0,0,0.5)',
                    cursor: 'move',
                    display: 'none'
                });
                self.appendHandler(resizePanel, $(this));
                /**
                 * 创建控制点
                 */
            
                var se = $('<div class="se"></div>');//东南


                //添加公共样式
                self.addHandlerCss([se]);
                //添加各自样式
             
                se.css({
                    'bottom': '-4px',
                    'right': '-4px',
                    'cursor': 'se-resize'
                });
              
                // 添加项目
                self.appendHandler([se], resizePanel);
                
                //绑定拖拽缩放事件
                self.bindResizeEvent(resizePanel, $(this));

                //绑定触发事件
                self.bindTrigger($(this));
            });
            self.bindHidePanel();
        },
        //控制点公共样式
        addHandlerCss: function(els) {
            for(var i = 0; i < els.length; i++) {
                el = els[i];
                el.css({
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: '#ff6600',
                    margin: '0',
                    'border-radius': '2px',
                    border: '1px solid #dd5500',
                });
            }
        },
        /**
         *  插入容器
         */
        appendHandler: function(handlers, target) {
            for(var i = 0; i < handlers.length; i++) {
                el = handlers[i];
                target.append(el);
            }
        },
        /**
         *  显示拖拽面板
         */
        triggerResize: function(el) {
            var self = this;
            el.siblings(self.options.item).children('div').css({
                display: 'none'
            });
            el.children('div').css({
                display: 'block'
            });
        },
        /**
         * 拖拽事件控制 包含8个缩放点  和一个拖拽位置
         */
        bindResizeEvent: function(el) {

            var self = this;
            var ox = 0; //原始事件x位置
            var oy = 0; //原始事件y位置
            var ow = 0; //原始宽度
            var oh = 0; //原始高度

            var oleft = 0; //原始元素位置
            var otop = 0;
            var org = el.parent('div');

          

            //东南
            var semove = false;
            el.on('mousedown','.se', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                semove = true;
            });

          
            //拖拽
            var drag = false;
            el.on('mousedown', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                otop = parseInt(org.css('top').replace('px', ''));
                oleft = parseInt(org.css('left').replace('px', ''));
                drag = true;
            });

            $(self.options.stage).on('mousemove', function(e) {
              if(semove) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    el.css({
                        width: ow + x,
                        height: oh + y
                    });
                    org.css({
                        width: ow + x,
                        height: oh + y
                    });
                }
            }).on('mouseup', function(e) {
               semove = false;
               drag = false;
            });
        },
        /**
         *  点击item显示拖拽面板
         */
        bindTrigger: function(el) {
            var self = this;
            el.on('click', function(e) {
                e.stopPropagation();
                self.triggerResize(el);
            });
        },
        /**
         *  点击舞台空闲区域 隐藏缩放面板
         */
        bindHidePanel: function(el) {
            var stage = this.options.stage;
            var item = this.options.item;
            $(stage).bind('click', function() {
                $(item).children('div').css({
                    display: 'none'
                });
            })
        }
    }

    window.ZResize = ZResize;

})(jQuery);