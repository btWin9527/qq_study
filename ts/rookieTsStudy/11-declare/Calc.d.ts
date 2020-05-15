/*
* 声明文件
* 声明文件或模块的语法格式如下：
* declare module Module_Name {
}
* 引入声明文件的语法：
* /// <reference path = " runoob.d.ts" />
* */
declare module Runoob {
    export class Calc {
        doSum(limit: number): number;
    }
}
