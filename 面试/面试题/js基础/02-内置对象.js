var arr = new Array(42);
console.log(arr);// 长度为42的空数组
arr.map(function () {
  console.log(111); // 什么都不会打印
});

/*
* 不推荐使用new Array()创建数组，字面量形式创建会更加快
* */
[,,,,,].map(function () {
  console.log(111);// 什么都不会打印
});
