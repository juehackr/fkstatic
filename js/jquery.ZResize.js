(function($) {

    /**
     * Ĭ�ϲ���
     */
    var defaultOpts = {
        stage: document, //��̨
        item: 'resize-item', //�����ŵ�����
    };

    /**
     * ������
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
         *  ��ʼ����קitem
         */
        initResizeBox: function() {
            var self = this;
            $(self.options.item).each(function () {
                //�������
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
                 * �������Ƶ�
                 */
            
                var se = $('<div class="se"></div>');//����


                //��ӹ�����ʽ
                self.addHandlerCss([se]);
                //��Ӹ�����ʽ
             
                se.css({
                    'bottom': '-4px',
                    'right': '-4px',
                    'cursor': 'se-resize'
                });
              
                // �����Ŀ
                self.appendHandler([se], resizePanel);
                
                //����ק�����¼�
                self.bindResizeEvent(resizePanel, $(this));

                //�󶨴����¼�
                self.bindTrigger($(this));
            });
            self.bindHidePanel();
        },
        //���Ƶ㹫����ʽ
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
         *  ��������
         */
        appendHandler: function(handlers, target) {
            for(var i = 0; i < handlers.length; i++) {
                el = handlers[i];
                target.append(el);
            }
        },
        /**
         *  ��ʾ��ק���
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
         * ��ק�¼����� ����8�����ŵ�  ��һ����קλ��
         */
        bindResizeEvent: function(el) {

            var self = this;
            var ox = 0; //ԭʼ�¼�xλ��
            var oy = 0; //ԭʼ�¼�yλ��
            var ow = 0; //ԭʼ���
            var oh = 0; //ԭʼ�߶�

            var oleft = 0; //ԭʼԪ��λ��
            var otop = 0;
            var org = el.parent('div');

          

            //����
            var semove = false;
            el.on('mousedown','.se', function(e) {
                ox = e.pageX;//ԭʼxλ��
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                semove = true;
            });

          
            //��ק
            var drag = false;
            el.on('mousedown', function(e) {
                ox = e.pageX;//ԭʼxλ��
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
         *  ���item��ʾ��ק���
         */
        bindTrigger: function(el) {
            var self = this;
            el.on('click', function(e) {
                e.stopPropagation();
                self.triggerResize(el);
            });
        },
        /**
         *  �����̨�������� �����������
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