// ES6兼容写法

if (!Number.isNaN) {
  Number.isNaN = function (num) {
    return Number(num) && window.isNaN(num);
  }
}
