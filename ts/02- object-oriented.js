/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-09-12 15:26:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 15:28:23
 */
// 面向对象与ts
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('rubby');
    };
    return Site;
}());
var obj = new Site();
obj.name();
