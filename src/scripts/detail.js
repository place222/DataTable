;(function($){
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
        var beautifier = new Beautifier(this,options);
        return beautifier.beautify();
    }
    
}($));