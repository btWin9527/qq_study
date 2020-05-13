/*
* ts面向对象实例：
* @description:
*   以下实例定义了一个类Site, 该类有一个方法 name(), 该方法在中断输出字符串Runoob;
*   new关键字创建类的对象，该对象调用方法name()
* */
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
