;(function($){
    //1.实例方法和静态方法的共享 $.DataTable()
    //2.今天结束 再参考其他同类的看看 如何封装的
     var
     _initHeader,
     defaults = {
            id:'#test', //要查找的元素的Id
            color:'red',
            fontSize:'12px',
            data:[]
    };

    _initHeader = function(){

    }
    //考虑是否使用静态方法为更好
    function init(table){
        _initHeader();
        //1.拿数据 
        //1.1 直接赋值到data属性的json对象
        //1.2 是一个函数
        //1.3
        _getData();
        //2.解析json结构
        //3.按结构插入表格
    }
    function Table(options){
        this.options = $.extend({},defaults,options);
        this.$elem = $(this.options.id);
        init(this);
    };

    //API 
    Table.prototype = {
        //考虑文档碎片
        create:function(){
            this.$elem.append('<tr><td>1</td></tr>')
        },
        draw:function(){
            console.log('我来进行重绘');
        }
    };

    $.extend({
        DataTable:function(options){
            //看看这里生命周期
            return new Table(options);
        }
    })

})(jQuery);