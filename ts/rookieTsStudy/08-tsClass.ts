/*
* TypeScript类
* 包含模块：
*       1. 字段 - 字段是类里面声明的变量。字段表示对象的有关数据
*       2. 构造函数 − 类实例化时调用，可以为类的对象分配内存
*       3. 方法 − 方法为对象要执行的操作
* */

class Car {
    // 字段
    engine: string;

    // 构造函数
    constructor(engine: string) {
        this.engine = engine;
    }

    // 方法
    disp(): void {
        console.log("发动机为：" + this.engine);
    }
}

// 创建一个对象
var obj = new Car("Engine 1");
// 访问字段
console.log("读取发动机型号:" + obj.engine);
// 访问方法
obj.disp();

// 类的继承
class Shape {
    Area: number

    constructor(a: number) {
        this.Area = a;
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("圆的面积" + this.Area)
    }
}

var newObj = new Circle(123);
newObj.disp();

// 多重继承
class Root {
    str: string;
}

class Child extends Root {
}

class Leaf extends Child {
} // 多重继承，继承了Child和Root类

var multipleObj = new Leaf();
multipleObj.str = "hello";
console.log(multipleObj.str);

// 继承类的方法重写 (类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
// 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法)
class PrinterClass {
    doPrint(): void {
        console.log("父类的doPrint()方法")
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint();// 调用父类的方法
        console.log("子类的doPrint()方法")
    }
}

/*
* 访问控制修饰符
* public:公有，可以在任何地方被访问
* protected: 受保护，可以被其自身及其子类和父类访问
* private: 私有，只能被其定义所在的类访问
* */

class Encapsulate {
    str1: string = "hello"
    private str2: string = "world"
}

var enObj = new Encapsulate();
console.log(enObj.str1)
// console.log(enObj.str2);// 报错

// 类和接口
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用

interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebete: number

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebete = rebate;
    }
}

var agObj = new AgriLoan(10, 1);
console.log("利润为：" + agObj.interest + "抽成为:" + agObj.rebete);
