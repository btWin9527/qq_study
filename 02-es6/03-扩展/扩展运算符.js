window.onload = function () {
    //扩展运算符    ...   将数组对象转为用逗号分隔的参数序列；
    //对象中扩展运算符的运用
    var obj = {a: 1, b: 2};
    var obj2 = {...obj}; ////深拷贝
    //var obj2 = obj; //浅拷贝
    obj.b = 100;
    obj2
    //es5
    var obj3 = Object.assign({b: 10}, obj);  //合并对象   将源对象复制到目标对象 第一个参数是目标对象，第二参数源对象

    var obj4 = {...obj, ...{b: 4}};
    var obj4 = {...obj, b: 4}

    //数组中运用
    //es5
//    function fun(v){
//        var n = 0;
//        for(var i of v){
//            n+=i;
//        }
//        return n;
//    };
//es6
    function fun(x, y) {
        return x + y;
    };
    fun(...[2, 5])  //2,5

    var arr1 = [1, 2, 3, 4];
    var arr2 = [5, 6, 7];
    //合并arr1,arr2;
    arr1.push(...arr2)//[1,2,3,4,5,6,7]
    arr1 = arr1.concat(arr2); //es5
    //es6
    var a = [...arr1, ...arr2];

    //深拷贝  浅拷贝
    var arr1 = [1, 2, 3, 4];
    //var arr2 = arr1;  //浅拷贝
    //var arr2 = arr1.concat();//深拷贝
    //var arr2 = arr1.slice();//深拷贝
    var arr2 = [...arr1];//深拷贝
    arr1[2] = 100;
    arr2;
    var a = [...arr1, 'a', 'b', ...arr2];

    //扩展运算符和解构
    let [a, ...b] = [1, 2, 3, 4, 5];
    /*  let [a, ...b] = ['a'];
      //错误   注意  扩展运算会只能放在最后一位
      let [...a, b] = [1, 2, 3, 4, 5]
      let [a, ...b, c] = [1, 2, 3, 4, 5]*/

}
