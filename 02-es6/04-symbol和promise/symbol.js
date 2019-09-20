//symbol   ES6新的数据类型  表示独一无二的值
//声明的方式
let s = Symbol();
//独一无二
let s2 = Symbol();
console.log(s == s2)  //false

var s3 = Symbol('abc');
//for()  keyFor()
var s4 = Symbol.for('abc'); //定义名称abc
var s5 = Symbol.for('abc'); //定义名称
Symbol.keyFor(s4); //获取名称

//实际的运用
//注意  symbol作为对象属性名，不能用点运算符
var s6 = Symbol();
var o2 = {}
o2[s6] = 'hello wolrd';
var o3 = {
    [s6]: 'hello wolrd',
    s6: 'abc'
}
o3.s6   //'abc'
o3['s6']  //'abc'
o3[s6]  //'hello wolrd';

//注意   如果用symbol作用属性名后，Object.keys()  for in  不能输出symbol类型的属性名
Object.keys(o3) //["s6"]
for (let v in o3) {
    console.log(v) ////["s6"]
}
Object.getOwnPropertyNames(o3)  //["s6"]
