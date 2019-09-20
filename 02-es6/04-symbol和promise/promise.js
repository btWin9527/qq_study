window.onload = function(){
//promise   是异步编程的一种解决方案   一种规范
    //解决 JS中多个异步回调难以维护和控制的问题
    //同步   异步
    //同步  执行完一件事以后再去执行另一件事   缺点  阻塞
    //异步  执行一件事的同时可以再去执行另一件事   缺点  请求的结果还没有拿到，就执行了后面的代码
    var data;
    $.ajax({
        url:'',
        data:{},
        success:function(data){
            data = data;
            for(var i = 0;i<data.length;i++){}  //回调
            $.ajax({
                url:'',
                data:{},
                success:function(data){
                    data = data;
                    for(var i = 0;i<data.length;i++){}  //回调
                    $.ajax({
                        url:'',
                        data:{},
                        success:function(data){
                            data = data;
                            for(var i = 0;i<data.length;i++){}  //回调
                        }
                    });
                }
            });
        }
    });
    // 请求到数据    发送第一个请求，然后ID  再发送第二请求，把ID传，拿 到token,再发送第三个请求。。。

    //promise对象是一个构造函数
    //接受一个函数做为参数,此函数的二个参数分别是 resolve,reject
    //resolve 的作用是promise对象的状态从未完成到成功，成功后，将异步操作的结果作为参数传递
    //reject 的作用是promise对象的状态从未完成到失败，失败后，将异步操作的结果作为参数传递
    //then() 方法分别指定resolve   reject的回调函数
    var p = new Promise(function(resolve,reject){
        if(true){  //请求成功
            resolve('ok')
        }else {
            reject('error')
        }
    });
    p.then(function(v){
        console.log(v)
    },function(v){
        console.log(v)
    })

    //链式写法
    var p = new Promise(function(resolve,reject){
        if(true){  //请求成功
            resolve('ok')
        }else {
            reject('error')
        }
    });
    p.then(function(v){
        console.log(v);
        return new Promise(function(resolve,reject){
            if(false){  //请求成功
                resolve('ok')
            }else {
                reject('error')
            }
        });
    },function(v){
        console.log(v)
    }).then(function(v){
        console.log(1)
    },function(v){
        console.log(2)
    }).then(function(v){
        console.log(3)
    },function(v){
        console.log(4)
    })

}