window.onload = function () {
    //Set
    //es6 数据结构有四种Array Object  Set  Map
    //set 类似数组 成员信息唯一
    var arr = new Aarray()  //var arr = [];
    arr[1] = 1;//arr.push(1)

    var obj = new Object();  //var obj = {}
    obj.name = 'abc';

    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(1).add(2).add(3).add(3);
    //另一种方式
    var s2 = new Set([1, 2, 4, 2, 4, 23, 4, '2', 2, 3, 5])

    //方法
    add()   //添加数据
    delete (2) //按名称删除  匹配删 除条件 返回true  否则返回false
    clear()  //清除所有
    has();  //匹配是否存在  存在true  否则返回false
    size;  //长度

    if (set.has(1)) {
    }
    ;
    var s3 = new Set(['a', 'b', 'c']);
    var a = 'a';
    s3.has(a);  //报a没有定义  错误  解决这个问题 var a = 'a';

    //数组去重
    var a5 = [1, 2, 1, 2, 5, 2, 5, 3, 5, 3, 5, 4, 2, 5, 2];
    //es6
    [...new Set(a5)]; //[1,2,4,5]
    //es5
    function fun(a5) {
        for (var i = 0; i < a5.length; i++) {
            for (var j = i + 1; j < a5.length; j++) {
                if (a5[i] == a5[j]) {
                    a5.splice(j, 1);
                    j--;
                }
            }
        }
        return a5;
    }

    fun(a5);

    //es5
    function fun2() {
        var a6 = [];
        for (var i = 0; i < a5.length; i++) {
            if (a6.indexOf(a5[i]) == -1) {  //没有匹配成功
                a6.push(a5[i]);
            }
        }
        return a6;
    }

    fun2()

    //类型转换   set 转数组
    var s7 = new Set([2, 3, 52, 3, 4, 43, 3]);
    var s8 = Array.from(s7);
    var s9 = [...new Set(a5)];

    //循环  for  of -- （不能遍历对象）
    //keys()  values(); entries();
    for (let v of s7.keys()) {
        console.log(v)  //[2,2][3,3]
    }
    s7.forEach((v, i) => {
        console.log(v)
    });

    //1、求出大于10的数据且去重处理
    var s9 = [2, 3, 2, 4, 553, 34, 23, 45, 4, 23, 4, 553, 44, 233, 23, 4, 2, 1];
    // var a = [...new Set(s9.filter(v=>v>10))];
    //var a = Array.from(new Set(s9.filter(v=>v>10)));
    //分析思路
    //1  求出大于10
    var a = s9.filter(v => v > 10); //[23,32,23,232,232]
    //2 去重  转换set
    var b = new Set(a);
    //3 set 类型 转成数组
    Array.from(b);

    //取二组数据的
    var a1 = [2, 3, 4, 2, 2, 5, 3, 4];
    var a2 = [7, 8, 3, 2, 3, 5];
    //交集
    var temp = a1.filter((item, index) => a2.indexOf(item) != -1);
    var intersection = new Set(temp);
    //并集
    var a4 = [...new Set([...a1, ...a2])];
    //差集

}
