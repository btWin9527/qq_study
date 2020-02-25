/* 封装 */
// js模拟数据封装
var myObject = (function () {
  var _name = 'sven';// 私有(private)变量
  return {
    getName: function () {// 公开(public)变量
      return _name;
    }
  }
})();
console.log(myObject.getName());// 输出: sven
console.log(myObject._name);// 输出: undefined
