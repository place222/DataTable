        var name = '456';
        var obj = {
            name:'123',
            func:function(){
                return function(){
                    console.log(this.name); //this变量的的问题 会输出456 因为this 和argument只到活动对象
                }
            }
        }
        obj.func()();
        window.onload = function(){
            function test(){
                var table = document.getElementById('#test'); //引用dom等 
                table.onclick = function(){
                    console.log('123');
                }
                table = null;
            }
            test();
        }
        
        $(function(){
            var a =$('#test').DataTable({
                data:[
                    {name:1,age:2},
                    {name:1,age:2},
                    {name:1,age:2}
                ]
            });
        });