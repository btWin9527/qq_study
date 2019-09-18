"use strict";

require("core-js/modules/es.math.sign");

require("core-js/modules/es.math.trunc");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-integer");

// 1. 判断是否为整数 *
Number.isInteger(20); // true

Number.isInteger(20.0); // true
// 数值取整

Math.ceil(3.5); // 4 -- 向上取整

Math.floor(3.9); // 3 -- 向下取整

Math.round(3.6); // 4 -- 四舍五入
// 2. Math扩展 *
// 2.1 去除小数部分，取整数部分

Math.trunc(4.1); // 4

Math.trunc(-4.1); // -4
// 2.2 判断一个数是正数/负数/0 （对于非数值 转为数值）

Math.sign(-4.1); // -1

Math.sign(100); // 1

Math.sign(0); // 0

Math.sign('123ab'); // NaN
// 3. 指数运算符

Math.pow(2, 3); // 2^3
// 4. 函数扩展 【！！！】

function fn(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x + y;
}

fn(1); // 5. rest参数
// arguments不是数组，不能使用数组的方法

function fn1() {
  // console.log(value);
  var n = 0;

  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  for (var _i = 0, _value = value; _i < _value.length; _i++) {
    var v = _value[_i];
    n += v;
  }

  return n;
}

fn1(1, 2, 3, 4, 5, 6); // 6. 箭头函数

/**
 * 注意：
 * 1. 箭头函数不能作为构造函数，不能使用new
 * 2. 箭头函数没有原型 对象
 * 3. 箭头函数中的this指向是定义时的this,而不是执行时this(外层调用者)
 * 4. 箭头函数中没有绑定arguments对象
 */

var f = function f(v) {
  return v;
}; // 变量名 = 参数 => 函数体


var f2 = function f2() {
  return '123';
};

var f3 = function f3(n1, n2) {
  return {
    // 返回对象
    name: n1,
    age: n2
  };
};