;(function($){

    var beautifier;

    var Beautifier = function(ele,opt){
        this.$element = ele;
        this.defaults = {
            color:'red',
            fonSize:'12px',
            textDecoration:'none'
        };
        this.options = $.extend({},this.defaults,opt);
    }
    Beautifier.prototype = {
        beautify:function(){
            return this.$element.css({
                color:this.options.color,
                fonSize : this.options.fonSize,
                textDecoration:this.options.textDecoration
            })
        }
    }

    $.fn.myPlugin = function(options){
        beautifier = new Beautifier(this,options);
        return this; //这个地方的return this,我不return this呢 好像就不是jquery的对象了
    }
    
}($));