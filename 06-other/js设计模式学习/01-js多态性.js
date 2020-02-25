/*
* js多态性 -- 把不变的隔离出来，然后封装可变的部分
* */
let makeSound = function (animal) {
  animal.sound();
}
/*
* 可变部分
* @description
* 方法在构造函数原型上绑定，属性在构造函数this上绑定
* */
// Duck
let Duck = function () {
}
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎')
};
// Chicken
let Chicken = function () {
}
Chicken.prototype.sound = function () {
  console.log('咯咯咯')
};
makeSound(new Duck());
makeSound(new Chicken());
// 新增Dog -- 不需要修改makeSound方法,只需要添加新的构造函数
let Dog = function () {
}
Dog.prototype.sound = function () {
  console.log('汪汪汪')
};
makeSound(new Dog());

/* -----------------------------------------分割线----------------------------------------- */

/*
* 地图渲染
* 需求：编写公共方法，满足切换不同的地图进行渲染,同时支持新增地图显示时不需要公共方法（可扩展性）
*  */
let googleMap = {
  show: function () {
    console.log('开始渲染谷歌地图')
  }
};
let baiduMap = {
  show: function () {
    console.log('开始渲染百度地图')
  }
}
/* 菜鸟版 */
/*let renderMap = function (type) {
  if (type === 'google') {
    googleMap.show();
  } else if (type === 'baidu') {
    baiduMap.show();
  }
}*/
/* 优化版本 */
let renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show();
  }
};
renderMap(googleMap);
renderMap(baiduMap);
// 新增搜狐地图
let souhuMap = {
  show: function () {
    console.log('开始渲染搜狐地图')
  }
};
renderMap(souhuMap);
