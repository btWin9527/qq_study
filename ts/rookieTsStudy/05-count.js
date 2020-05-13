/*
* TypeScript 运算符:
算术运算符
逻辑运算符
关系运算符
按位运算符
赋值运算符
三元/条件运算符
字符串运算符
类型运算符
* */
// 算数运算符
var y = 5;
console.log(y + 2); // 加法
console.log(y - 2); // 减法
console.log(y * 2); // 乘法
console.log(y / 2); // 除法
console.log(y % 2); // 取模(余数)
console.log(y++); // 自增 （5）
console.log(++y); // 自增 （6）
console.log(y--); // 自减 （5）
console.log(--y); // 自减 （6）
// 关系运算符
var x = 5;
console.log(x == 5); // 等于
console.log(x != 5); // 不等于
console.log(x > 5); // 大于
console.log(x < 5); // 小于
console.log(x <= 5); // 小于或等于
console.log(x >= 5); // 大于或等于
// 逻辑运算符
console.log(x < 2 && y > 3); // and
console.log(x == 5 || y == 1); // or
console.log(!(x == y)); // not
// 赋值运算
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a); // 10
a += b;
console.log("a+=b: " + a); // 20
a -= b;
console.log("a-=b: " + a); // 10
a *= b;
console.log("a*=b: " + a); // 100
a /= b;
console.log("a/=b: " + a); // 10
a %= b;
console.log("a%=b: " + a); // 0
// 三元运算符
var num = -2;
var result = num > 0 ? "大于 0" : "小于 0，或等于 0";
console.log(result);
// 类型运算符
var num = 12;
console.log(typeof num); // 输出结果： number
