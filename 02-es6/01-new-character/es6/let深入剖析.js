/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 10:16:58
 * @LastEditTime: 2019-09-12 10:16:58
 * @LastEditors: your name
 */
$(function () {
    //暂时性死区
    var x = 1;

    function f() {
        if (true) {
            x = 2;
            console.log(x);
            let x; //只要在块级作用域内let命令，在当前作用域下不能声时同样的名称
        }
    };
    f();
    //y并没有定义
    let x = y,
        y = 10;

    function f2() {
        console.log(x, y)
    };

    function f3(i) {
        let i;
        console.log(i)
    };
    f3(10)

    //块级作用域的重要性
    //循环结束后，i成为全局变量
    for (var i = 0; i < 6; i++) {
        //循环体
    };
    console.log(i);
    for (let i = 0; i < 6; i++) {};
    console.log(i); //error

    var arr = [];
    for (let i = 0; i < 6; i++) {
        arr[i] = function () {
            console.log(i)
        }
    };
    arr[3]();

    ++i; //先给i加1，然后再赋 值
    i++; //先赋 值，然后加1
    var a = 5;
    b = a++; //先赋值 再加  b=a; a = a+1;   //b=5
    b = ++a; //先自加，再赋值  a=a+1; b=a    //b=6

})