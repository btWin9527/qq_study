/*
* TypeScript 接口
* @description: 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法
* 用法：
 interface interface_name {
}
* */
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    }
};
console.log("Customer 对象");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () {
        return "Hello!!!";
    }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
// commandline 是字符串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字符串数组
options = { program: "test1", commandline: ["hello", "world"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式
options = {
    program: "test1", commandline: function () {
        return "** Hello World**";
    }
};
var fn = options.commandline;
console.log(fn());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("年龄：" + drummer.age);
console.log("喜欢的乐器:" + drummer.instrument);
