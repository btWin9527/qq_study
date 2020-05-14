/*
* TypeScript类
* 包含模块：
*       1. 字段 - 字段是类里面声明的变量。字段表示对象的有关数据
*       2. 构造函数 − 类实例化时调用，可以为类的对象分配内存
*       3. 方法 − 方法为对象要执行的操作
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("发动机为：" + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj = new Car("Engine 1");
// 访问字段
console.log("读取发动机型号:" + obj.engine);
// 访问方法
obj.disp();
// 类的继承
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积" + this.Area);
    };
    return Circle;
}(Shape));
var newObj = new Circle(123);
newObj.disp();
// 多重继承
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // 多重继承，继承了Child和Root类
var multipleObj = new Leaf();
multipleObj.str = "hello";
console.log(multipleObj.str);
// 继承类的方法重写 (类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
// 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法)
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的doPrint()方法");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的方法
        console.log("子类的doPrint()方法");
    };
    return StringPrinter;
}(PrinterClass));
/*
* 访问控制修饰符
* public:公有，可以在任何地方被访问
* protected: 受保护，可以被其自身及其子类和父类访问
* private: 私有，只能被其定义所在的类访问
* */
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var enObj = new Encapsulate();
console.log(enObj.str1);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebete = rebate;
    }
    return AgriLoan;
}());
var agObj = new AgriLoan(10, 1);
console.log("利润为：" + agObj.interest + "抽成为:" + agObj.rebete);
