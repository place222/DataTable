;(function($){
    //1.实例方法和静态方法的共享 $.DataTable()
    //2.今天结束 再参考其他同类的看看 如何封装的
     var
     defaults = {
            id:'test', //要查找的元素的Id
            color:'red',
            fontSize:'12px',
            header:[],
            data:[]
    };

    function _initHeader(instance){
        var html = '<thead>';
        $.each(instance.options.header,function(i,name){
            html+= '<th>' + name + '</th>'
        });
        html+= '</thead>';
        instance.$elem.append(html);
    }
    function _initContainer(instance){
        _initRows(instance);
        _initPagenation(instance);
    }
    function _initRows(instance){
        $.each(instance.options.data,function(i,name){
            var html = '<tr>';
            $.each(instance.options.data[i],function(name,prop){
                html += '<td>' + prop + '</td>'
            });
            html+= '</tr>';
            instance.$elem.append(html);
        });
    }
    function _initPagenation(instance){
        console.log('插入分页');
    }
    function _insertData(data){

    }
    //考虑是否使用静态方法为更好
    function init(instance){
        _initHeader(instance);
        _initContainer(instance);
        //2.解析json结构
        //3.按结构插入表格
    }
    function Table(elem,options){
        this.options = $.extend({},defaults,options);
        this.$elem = elem ? elem :$('#' + this.options.id);
        init(this);
        console.log(this);
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
            return new Table(null,options);
        }
    })

    $.fn.extend({
        DataTable:function(options){
            return new Table(this,options);
        }
    })
})(jQuery);