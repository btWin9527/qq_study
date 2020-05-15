/*
* TypeScript 命名空间
* 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
* */
namespace Drawing {
    export interface IShape {
        draw();
    }
}
