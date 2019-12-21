/* 入口文件*/

let my = require('./my')

console.log('hello1')
console.log('hello2')
console.log('hello3')

// 导入css
require('./index.css')
require('./b.less')
// 加载图片

import a from './assets/hot.png'

console.log(a)
let img = new Image();
img.src = a;
document.body.appendChild(img);
// 全局变量测试
console.log('jquery')
console.dir($)

// es6代码测试
let fn = () => {
  console.log('es6...')
}
fn();
class Test{
  name="abc"
}
let t = new Test();
console.log(t.name,'es6的class测试')
