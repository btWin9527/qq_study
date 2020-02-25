/*
* 移动端适配 --- 等分设计稿
*  */
// 1. 设置 html font-size，如将手机屏幕分成10份
let dpr = window.devicePixelRatio;
let meta = document.createElement('meta');
// dpr
meta.setAttribute('content', 'initial-scale=' + 1 / dpr + ', maximum-scale=' + 1 / dpr + ', minimum-scale=' + 1 / dpr + ', user-scalable=no');
document.getElementsByTagName('head')[0].appendChild(meta);
// rem
document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
}, false);

// 2.假设元素宽度为 300px，则元素宽度
/*
  x = (300px/750px) * 10rem = 4.267rem;

scss方案：
  $ue-width: 750;

@function px2rem($px) {
  @return #{$px/$ue-width*10}rem;
}
p {
  width: px2rem(100);
}
*/
// postcss-pxtorem方案：
// postcss.config.js
const pxtorem = require('postcss-pxtorem');
const pxtoremOpts = {
  rootValue: 16,  // 根字体大小，默认16
  unitPrecision: 5,  // 精度
  propList: ['font', 'font-size', 'line-height', 'letter-spacing'],  // 可以将px转换成rem的属性
  selectorBlackList: [],  // 选择器忽略并保留px
  replace: true,  // 替换包含rems的规则
  mediaQuery: false,  // 是否允许在媒体查询中转换px
  minPixelValue: 2  // 设置要替换的最小像素值
};
module.exports = {
  plugins: [
    pxtorem(pxtoremOpts),
  ],
};
