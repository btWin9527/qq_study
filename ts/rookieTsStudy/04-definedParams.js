/*
* TypeScript变量声明
* 命名规则：
* 1. 变量名称可以包含数字和字母
* 2. 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格
* 3. 变量名不能以数字开头
* */
// 1. 声明变量的类型及初始值
// var [变量名] : [类型] = 值;
var uname = 'Runoob';
// 2. 声明变量的类型，但没有初始值，变量值会设置为undefined
// var [变量名] : [类型];
var unameTwo;
// 3. 声明变量并初始值，但不设置类型，该变量可以是任意类型
// var [变量名] = 值;
var unameThird = "Runoob";
// 4. 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
// var [变量名];
var unameFour;
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("名字: " + uname);
console.log("第一个科目成绩: " + score1);
console.log("第二个科目成绩: " + score2);
console.log("总成绩: " + sum);
/*
* 变量作用域
* 1. 全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用
* 2. 类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问
* 3. 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用
* */
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为：" + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量:" + obj.num_val);
