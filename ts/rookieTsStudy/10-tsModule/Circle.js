"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Circle is draw (external module)");
    };
    return Circle;
}());
exports.Circle = Circle;
