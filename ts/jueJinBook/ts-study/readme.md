# ts基础学习

## 掘金小册学习进度

> TypeScript的枚举类型结束 5.16

## 1. 初始化ts工作环境

1. 安装TypeScript
2. 用tsc --init 初始化配置
3. 编辑tsconfig.json 配置TypeScript选项

## 2. Ts的数据类型

### 2.1 ts的原始类型

> boolean/number/string/void/undefined/null/symbol/bigint

```ts
// 1. boolean
const isLoading: boolean = false;

// 2. number
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

// 3. string
const book: string = 'ts';

// 4. void
function warnUser():void {
  alert('this is warning message');
}

// 5. null 和 undefined(正式项目一般会开启--strictNullChecks, 即null和undefined只能赋值给any和他们各自(一个例外是undefined是也可以分配给void),可规避许多问题)
let a: undefined = undefined;
let b: null = null;

// 6. symbol (唯一不变)
const sym1 = Symbol('key1');

// 7. bigInt
const max = Number.MAX_SAFE_INTEGER;
const max1 = max + 1;
const max2 = max + 2;
max1 === max2; // js中true

const max3 = BigInt(Number.MAX_SAFE_INTEGER);
const max4 = max3 + 1n;
const max5 = max3 + 2n;
max4 === max5; // false

/*
用BigInt(number)把Number转化为BigInt, 同时如果类型是BigInt,则需要在数字后面加n;
*/
```

### 2.2 ts其它数据类型

> any/unknown/never/object

```ts
// 1. any(一般不建议使用)
let notSure: any = 4;
notSure = 'maybe a string instead';
// 2. unknown
// unknown 和 any 的主要区别是 unknown 类型会更加严格:在对unknown类型的值执行大多数操作之前,我们必须进行某种形式的检查,而在对 any 类型的值执行操作之前,我们不必进行任何检查
let anyValue:unknown;
anyValue.foo.bar; // OK

let unknownValue: unknown;
unknownValue.foo.bar; // ERROR
value(); // ERROR
new value(); // ERROR
value[0][1]; // ERROR
// unknow进行类型保护

function getValue(value:unknown):string {
  if(value instanceof Date){ // 这里吧value的类型缩小为Date实例的范围
        return value.toISOString();
    }
    return String(value);
}

// 3. never (没有类型是 never 的子类型或可以赋值给 never 类型（除了never本身之外）)
function error(message:string):never {
  throw new Error(message);
}
// 空数组，且永远是空的
const empty: never[] = [];

// 4. array
const oldList: Array<number> = [1,2,3]; // 泛型定义
const newList: number[] = [1,2,3]; // 元素类型后面加[]

// 5. tuple (元组 -- 表示一个已知元素数量和类型的数组，各元素的类型不必相同)
let x: [string,number];
// x = [ 'hello',10,false ];  // Error
// x = ['hello']; // Error
/*  
    [string,number]类似于:
    interface Tuple extends Array<string | number> {
            0: string;
            1: number;
            length: 2;
        }
    【特殊情况】: ts允许向元组中使用数组的push方法插入新元素,但访问会报错
*/
// 6. Object (object 表示非原始类型)


```

### 2.3 枚举类型

> 声明一组命名的常数，当一个变量有几种可能的取值时，可以将其定义为枚举类型

```ts
// 1. 数字枚举 -- (当声明一个枚举类型时，虽未赋值，但其值是默认的数字类型，且默认从0开始依次累加)
    enum Direction { // 若第一个值赋值后，其他的值会跟第一个值进行累加
        Up,
        Down,
        Left,
        Right 
   }
    console.log(Direction.Up === 0); // true    
    console.log(Direction.Down === 1); // true    
    console.log(Direction.Left === 2); // true    
    console.log(Direction.Right === 3); // true    

// 2. 字符串枚举 
    enum strDirection {
        Up = 'Up',
        Down = 'Down',
        Left = 'Left',
        Right = 'Right' 
   }
    console.log(Direction['Right'],Direction.Up); // Right Up

// 3. 异构枚举 (混合枚举,不建议使用)
    enum BooleanLikeHeterogeneousEnum {
        No = 0,
        Yes = "YES",
    }
// 4. 反向映射 -- (通过枚举值获取枚举名称)
    console.log(Direction[0]); // Up
// [了解]js实现ts枚举(双向映射)
    var jsDirection;
    (function(jsDirection) {
      jsDirection[jsDirection['Up'] = 10] = 'Up'; // 等价于jsDirection[10] = 'Up'; jsDirection['Up']=10;
      jsDirection[jsDirection["Down"] = 11] = "Down";
      jsDirection[jsDirection["Left"] = 12] = "Left";
      jsDirection[jsDirection["Right"] = 13] = "Right";
    })(jsDirection || (jsDirection={}));

// 5. 常量枚举
    const enum ConstDirection {
        Up = 'Up',
        Down = 'Down',
        Left = 'Left',
        Right = 'Right'
    }
    const a = Direction.Up; // 转换为js后只有 var a = "Up"; 枚举已经消失，借此提升性能
// 6. 联合枚举与枚举成员的类型
    enum LhDirection {
        Up,
        Down,
        Left,
        Right
    }
    const lhA = 0;
    console.log(lhA === LhDirection.Up); // true
    type c = 0;
    declare let b: c;
    b = 1 // 不能将类型“1”分配给类型“0”
    b = Direction.Up // ok
// 7. 联合枚举类型
    enum LhmjDirection {
        Up,
        Down,
        Left,
        Right
    }  
    declare let a: LhmjDirection 
    enum Animal {
        Dog,
        Cat
    }
    a = LhmjDirection.Up // ok
    a = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”
    // 把 a 声明为 Direction 类型，可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right，只有这四个类型其中的成员才符合要求
// 8. 枚举合并 (我们可以分开声明枚举,他们会自动合并)
// [补充：]为枚举添加静态方法
    enum Month {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December,
    }
    // 静态方法:判断是否为夏天
   /* function isSummer(month: Month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false
        }
    } */
    // namespace结合枚举
    namespace Month {
        export function isSummer(month:Month) {
          switch (month) {
             case Month.June:
             case Month.July:
             case Month.August:
                 return true;
             default:
                 return false
         }
        }
    }
    console.log(Month.isSummer(Month.January)); // false
```

### 2.4 接口(interface)

> 接口一般用于描述一种非基本类型的其它自定义类型

```ts
    // ?: 表示可选属性, readonly表示只读属性
    interface User {
        name: string;
        age?: number;
       readonly isMale: boolean;
       say: (words:string)=>string;
    }

    const getUserName = (user:User) => user.name

    // 属性检查
    interface Config {
        width?: number;
    }
    function CalculateAreas(config:Config):{area:number} {
      let square = 100;
      if(config.width) {
        square = config.width * config.width;  
      }
        return {area: square};
    }
    let mySquare = CalculateAreas({width:5});
    
    // 可索引类型 (可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型)
    interface Phone {
        [name: string]:string
    }
    interface User {
        name: string;
        age?: number;
        readonly isMale: boolean;
        say: () => string;
        phone: Phone;
    }
    
    // 继承接口
    interface VIPUser extends User {
        broadcast: () => void
    }
   /*
    // 继承多个接口
    interface VIPUser extends User, SupperUser{
        broadcast: () => void
    }
   */
```

### 2.5 类(Class)

> es6已经有class出现

```ts
// 抽象类 (abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法)
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log('roaming the earch ...');    
    }
   }
// 访问限定符 (public/ private/ protected)
    // 在ts中，成员默认为public,此成员是可以被外部访问
    class Car {
        public run() {
            console.log('启动...')  
      }
        private test: 'test';
        protected newWords: 'words';
    }
    const car = new Car();
    car.run(); // 启动...
    // private : 只能被类的内部访问
    // car.test; 

    // protected: 只可以被类的内部及类的子类访问
    class GTR extends Car {
        init() {
            console.log(this.newWords);
        }
    }
    const gtr = new GTR();
    gtr.init(); // words

// class 可以作为接口
    export default class Props {
        public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never = [];
        public speed: number = 500;
        public height: number = 160;
        public animation: string = 'eseInOutQuad';
        public isAuto: boolean = true;
        public autoPlayInterval: number = 4500;
        public afterChange: ()=>{};
        public beforeChange: ()=>{};
        public selectedColor: string;
        public showDots: boolean = true;
    }
```
