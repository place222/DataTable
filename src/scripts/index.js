;(function($){
     var
     instance, 
     defaults = {
        color:'red',
        fontSize:'12px'
    };

    function Table(elem,options){
        this.elem = elem;
        this.options = $.extend({},defaults,options);
        this.init();
    };
    Table.prototype = {
        hello:function(){console.log(this.options)},
        init:function(){
            this.initData();
        },
        initData:function(){
            // 数组 函数 string
            var html,
                i=0;
           if($.isArray(this.options.data)){
               
           }
           else if($.type(this.options.data) === 'function'){
               
           }
        }
    };
    $.fn.DataTable = function(options){
        instance = new Table(this,options);
        return this;
    }

})(jQuery);