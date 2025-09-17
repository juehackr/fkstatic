/**
 * Created by Administrator on 14-6-18.
 */
function changeUI(input,element_id) {
    input.blur();
    if(element_id == "J_bgimg") {
        jQuery("#J_bgimg").click();
    } else {
        jQuery("#"+element_id).mouseup();
    }
}

var stack,EditCommand,ElementCommand,MoveCommand;
jQuery(function() {
    stack = new Undo.Stack(),
        EditCommand = Undo.Command.extend({
            constructor: function(input, oldValue, newValue,element_id) {
                this.input = input;
                this.oldValue = oldValue;
                this.newValue = newValue;
                this.element_id=element_id;
            },
            execute: function() {
            },
            undo: function() {
                if(jQuery(this.input).attr("type") == "radio") {
                    jQuery("input:radio[value="+this.oldValue+"]").click();
                } else if(this.input[0].selectedIndex != undefined) {
                    this.input[0].selectedIndex=this.oldValue;
                    this.input.change();
                } else {
                    this.input.val(this.oldValue);
                }
                changeUI(this.input,this.element_id);
            },

            redo: function() {
                if(jQuery(this.input).attr("type") == "radio") {
                    jQuery("input:radio[value="+this.newValue+"]").click();
                } else if(this.input[0].selectedIndex != undefined) {
                    this.input[0].selectedIndex=this.newValue;
                    this.input.change();
                } else {
                    this.input.val(this.newValue);
                }
                changeUI(this.input,this.element_id);
            }
        }),
        ElementCommand = Undo.Command.extend({
            constructor: function(element,fun,index) {
                this.element = element;
                this.fun =fun;
                this.index=index;
            },
            execute: function() {
            },
            undo: function() {
                if(this.fun == "add") {
                    this.element.elet.draggable( "destroy" );
                    this.element.elet.remove();

                    for( var i=0; i<dmspmk.otherwise.length; i++ ){
                        var t=dmspmk.otherwise[i];
                        if(t.id == this.element.id) {
                            dmspmk.otherwise.splice(i,1);
                        }
                    }

                    jQuery("#J_bgimg").click();
                }else {
                    var cur=jQuery("#dmspmk>span:eq("+(this.index -1)+")");
                    if(cur.length != 0) {
                        cur.before(this.element.elet);
                    } else {
                        jQuery("#dmspmk").append(this.element.elet);
                    }
                    dmspmk.otherwise.splice(this.index,0,this.element);
                    this.element.itmove();
                    this.element.itremove();
                    this.element.bindInput();
                    this.element.changeFocus();
                }
            },
            redo: function() {
                if(this.fun == "add") {
                    var cur=jQuery("#dmspmk>span:eq("+(this.index -1)+")");
                    if(cur.length != 0) {
                        cur.before(this.element.elet);
                    } else {
                        jQuery("#dmspmk").append(this.element.elet);
                    }
                    dmspmk.otherwise.splice(this.index,0,this.element);
                    this.element.itmove();
                    this.element.itremove();
                    this.element.bindInput();
                    this.element.changeFocus();
                }else {
                    this.element.elet.draggable( "destroy" );
                    this.element.elet.remove();

                    for( var i=0; i<dmspmk.otherwise.length; i++ ){
                        var t=dmspmk.otherwise[i];
                        if(t.id == this.element.id) {
                            dmspmk.otherwise.splice(i,1);
                        }
                    }

                    jQuery("#J_bgimg").click();
                }
            }
        }),
        MoveCommand = Undo.Command.extend({
            constructor: function(element,oldLeft,oldTop,newLeft,newTop) {
                this.oldLeft= oldLeft;
                this.oldTop= oldTop;
                this.newLeft= newLeft;
                this.newTop= newTop;
                this.element = element;
            },
            execute: function() {
            },
            undo: function() {
                this.element.left=this.oldLeft;
                this.element.top=this.oldTop;
                this.element.elet.css("left",this.oldLeft);
                this.element.elet.css("top",this.oldTop);
                this.element.changeFocus();
            },
            redo: function() {
                this.element.left=this.newLeft;
                this.element.top=this.newTop;
                this.element.elet.css("left",this.newLeft);
                this.element.elet.css("top",this.newTop);
                this.element.changeFocus();
            }
        });
    stack.changed = function() {
        stackUI();
    };

    var undo = jQuery(".btn-undo"),
        redo = jQuery(".btn-redo");
    function stackUI() {
        if(stack.canUndo()) {
            undo.addClass("btn-able");
            undo.attr('disabled',false);
            undo.removeClass("btn-disable");
        } else {
            undo.addClass("btn-disable");
            undo.attr('disabled',true);
            undo.removeClass("btn-able");
        }
        if(stack.canRedo()) {
            redo.addClass("btn-able");
            redo.attr('disabled',false);
            redo.removeClass("btn-disable");
        } else {
            redo.addClass("btn-disable");
            redo.attr('disabled',true);
            redo.removeClass("btn-able");
        }
    }
    stackUI();

    jQuery(document.body).delegate(".btn-undo, .btn-redo", "click", function() {
        var what = jQuery(this).attr("id");
        stack[what]();
        return false;
    });

    jQuery(document).keydown(function(event) {
        if (!event.ctrlKey || (event.keyCode != 90 && event.keyCode != 89)) {
            return;
        }
        event.preventDefault();
        if (event.keyCode == 89) {
            stack.canRedo() && stack.redo();
        } else {
            stack.canUndo() && stack.undo();
        }
    });

    //表单控件
    var startValue;
    var focusBool=false;
    jQuery(".wd300 input").on("change", function() {
        if(jQuery(this).attr("type") == "radio") {
            var newValue = jQuery("input[name='"+jQuery(this).attr("name")+"']:checked").val();
        }else {
            var newValue = jQuery(this).val();
        }
        var fun_id=jQuery(this).parents(".zgc-attlist").attr("id").replace("_attrib","");
        if (newValue != startValue && focusBool == true) {
            if(ET_editing != null && fun_id != "J_bgimg") {
                fun_id=ET_editing.elet.attr("id");
            }
            stack.execute(new EditCommand(jQuery(this), startValue, newValue,fun_id));
            startValue = newValue;
            focusBool=false;
        }
    });
    jQuery(".wd300 input").on("focus", function() {
        if(jQuery(this).attr("type") == "radio") {
            startValue= jQuery("input[name='"+jQuery(this).attr("name")+"']:checked").val();
        }else {
            startValue = jQuery(this).val();
        }

        focusBool=true;
    });
    jQuery(".wd300 textarea").on("change", function() {
		var newValue = jQuery(this).val();
        var fun_id=jQuery(this).parents(".zgc-attlist").attr("id").replace("_attrib","");
        if (newValue != startValue && focusBool == true) {
            if(ET_editing != null) {
                fun_id=ET_editing.elet.attr("id");
            }
            stack.execute(new EditCommand(jQuery(this), startValue, newValue,fun_id));
            startValue = newValue;
            focusBool=false;
        }
    });
    jQuery(".wd300 textarea").on("focus", function() {
		startValue = jQuery(this).val();
        focusBool=true;
    });
    var oldSelect;
    jQuery(".wd300 select").on("click", function() {
        var newSelect = this.selectedIndex;
        var fun_id=jQuery(this).parents(".zgc-attlist").attr("id").replace("_attrib","");
        if (newSelect != oldSelect && focusBool == true) {
            if(ET_editing != null && fun_id != "J_bgimg") {
                fun_id=ET_editing.elet.attr("id");
            }
            stack.execute(new EditCommand(jQuery(this), oldSelect, newSelect,fun_id));
            oldSelect = newSelect;
            focusBool=false;
        }
    });
    jQuery(".wd300 select").on("focus", function() {
        oldSelect = this.selectedIndex;
        focusBool=true;
    });

    //元素增删
    jQuery(".zgc-widgets ul li:not(:first)").on("click", function() {
        var index=jQuery("#dmspmk > span").index(ET_editing.elet);
        stack.execute(new ElementCommand(ET_editing,"add",index));
    });
//    jQuery(".zg_close").on("click", function() {
//        var index=jQuery("#dmspmk div").index(ET_editing.elet);
//        stack.execute(new ElementCommand(ET_editing,"del",index));
//    });

//    //元素移动
//    var oldX, oldY;
//    var oldET;
//    jQuery(".zgc-widgets ul li:not(:first)").on("mousedown", function() {
//        if(ET_editing != null) {
//        oldX=ET_editing.left;
//        oldY=ET_editing.top;
//        oldET=ET_editing;
//        }
//    });
//    jQuery(".zgc-widgets ul li:not(:first)").on("mouseup", function() {
//        if(ET_editing != null) {
//        stack.execute(new MoveCommand(ET_editing,oldX,oldY));
//        }
//    });
});