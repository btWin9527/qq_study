/*
* TypeScript基础类型
* */

// 任意类型：any  (声明为any的变量可以赋值任意类型的值)
let testWord: any = 'world';
/*
1、变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：
let x: any = 1;    // 数字类型
x = 'I am who I am';    // 字符串类型
x = false;    // 布尔类型
2.改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let x: any = 4;
x.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
x.toFixed();    // 正确
3. 定义存储各种类型数据的数组时
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
* */

// 数字类型：number(双精度64位浮点值,可以用来表示整数和分数)
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// 字符串类型： string (一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式)
let oneName: string = "Runoob";
let years: number = 5;
let words: string = `你好,今年是${oneName}发布的${years + 1}周年`;

// 布尔类型: boolean(表示逻辑值： true和false)
let boolFlag: boolean = true;

// 数组类型: 无(声明变量为数组)
let arr: number[] = [1, 2]; // 在元素类型后面加上[]
let arrTwo: Array<number> = [1, 2]; // 或者使用数组泛型

// 元组：无(元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同)
let x: [string, number];
x = ['root', 1]; // 正常运行
// x = [1,'root']; // 报错
console.log(x[0]); // 输出Runoob

// 枚举： enum (枚举类型用于定义数值集合)
enum Color {Red, Green, Blue}

let c: Color = Color.Blue;
console.log(c); // 输出2

// void: void (用于标识方法返回值的类型,标识该方法没有返回值)
function hello():void {
    console.log("Hello Runoob");
}

// null: null (标识对象缺失)
// undefined: undefined(用户初始化变量为一个未定义的值)
// never: never(never是)
