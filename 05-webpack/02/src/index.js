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
