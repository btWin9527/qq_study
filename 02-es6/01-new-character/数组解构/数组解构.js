/*
 * @Description: In User Settings Edit
 * @Author: guoxiaoye
 * @Date: 2019-09-12 10:16:58
 * @LastEditTime: 2019-09-12 13:52:06
 * @LastEditors: Please set LastEditors
 */
window.onload = function () {
    //解构是ES6的新特性, 比ES5代码简洁，清晰  减少代码量
    //什么是解构？ 从数组和对象中提取值，对变量进行赋值，称为解构
    let [a, b, c] = [1, 2, 3];

    var a = 1,
        b = 2,
        c = 3;
    var [a, b, c] = [1, 2, 3];
    //模式匹配   左边是变量  =（匹配） 右边对应的值
    var [x, y, z, a, b, c, d, e] = [10, 20, 29, 3, 2, 4, 2, 4];
    var arr = [1, 2, 3];
    var [x, y, z] = arr;
    var [x, y, z] = [1, 2]; //z undefined
    // var x = 1;
    // var y = 2;
    // var z;

    var x = 1;
    var y = [1, 2];
    var z = 3
    var [x, y, z] = [1, [1, 2], 3]; //数组
    var [x, y, z] = [1, {
        'name': 'amy'
    }, 3]; //对象

    //默认值  备胎
    var [x = 1, y = 2] = arr;
    //    x = arr[0] || 1;
    //    y = arr[1] || 1;
    //    if(arr[0]){
    //        x = arr[0]
    //    }else {
    //        x = 1;
    //    }

    var [x = 1, y = 2] = [10, 20]; // x = 10 ,y = 20;
    var [x = 1, y = 2] = [10]; // x = 10 ,y = 2;

    var [x = 10, y = 20] = []; //x=10,y=20;
    var [x, y = 'b'] = ['a']; //x='a',y='b';
    var [x = 1, y] = [10, 20]; //x = 10,y=20;
    var [x = 1] = [null]; //x= null

    //例外  成员等于undefined 默认值才会生效
    var [x = 1] = [undefined]; //x=1;
    var [x, y = 'b'] = ['a', undefined]; ////x='a',y='b';

    //函数
    function f() {
        return '12345'
    }
    var [x = f()] = [1]; //x=1
    var [x = f()] = []; //x='12345'
    var [x = f()] = [undefined]; //x='12345'

}