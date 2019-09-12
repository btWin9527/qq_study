/*
 * @Descripttion: 
 * @version: 
 * @Author: guoxiaoye
 * @Date: 2019-09-12 14:47:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 15:13:47
 */

// tsc a.ts将ts转义为.js文件
var message: string = "Hello world";
console.log(message);
/* 
    1. tsc常用编译参数
    --help    显示帮助
    --module  载入扩展模块
    --target  设置ecma版本
    --declaration  额外生成一个.d.ts扩展名的文件
    --removeComments 删除文件的注释
    --out     编译多个文件并合到一个输出的文件
    --sourcemap  生成一个sourcemap(.map)文件	
    --module noImplicitAny  在表达式和声明上有隐含的any类型时报错
    --watch      在监视模式下运行编译器，会监视输出文件，在他们改变时重新编译
*/

