// 模拟js阻塞加载(如果将js文件引入到body之前，浏览器会先加载>解析>执行js代码，然后再加载页面)
console.log('start');
working(5*1000);
console.log('end');

// Date对象
function working(time) {
  var nowTime = Date.now(); //1970年到现在的ms数
  var exitTime = nowTime + time;
  while (nowTime<exitTime) {
    // 干活
    nowTime = Date.now();
  }
}


