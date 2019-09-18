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
2 ** 3; // 2^3

// 4. 函数扩展 【！！！】
function fn(x, y = 1) {
    return x + y
}
fn(1);

// 5. rest参数
// arguments不是数组，不能使用数组的方法
function fn1(...value) {
    // console.log(value);
    var n = 0;
    for (var v of value) {
        n += v;
    }
    return n;
}
fn1(1, 2, 3, 4, 5, 6);

// 6. 箭头函数
/**
 * 注意：
 * 1. 箭头函数不能作为构造函数，不能使用new
 * 2. 箭头函数没有原型 对象
 * 3. 箭头函数中的this指向是定义时的this,而不是执行时this(外层调用者)
 * 4. 箭头函数中没有绑定arguments对象
 */
let f = v => v; // 变量名 = 参数 => 函数体
let f2 = () => '123';
let f3 = (n1, n2) => ({ // 返回对象
    name: n1,
    age: n2
});

/* 
    babel的使用：

    1. 下载依赖
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    npm install --save @babel/polyfill
    npm install --save core-js

    2. 配置babel.config.js
    const presets = [
    [
        "@babel/env",
        {
            targets: {
                ie: '9',
                edge: "17",
                firefox: "60",
                chrome: "50",
                safari: "11.1",
            },
            "corejs": "3", // <---  此处加个这个，就没有报错警告了
            useBuiltIns: "usage",
        },
    ],
];

module.exports = {
    presets
};

    3. 转化es低阶版本
    ./node_modules/.bin/babel src --out-dir lib
    （或）npx babel src --out-dir lib

    【注意】
    + for of IE不支持
    + iterator,generator 不支持
    + module/Proxies/Symbol 不支持
    + Map/Set/WeakMap/WeakSett 不支持
    + 生成器函数  不支持
*/