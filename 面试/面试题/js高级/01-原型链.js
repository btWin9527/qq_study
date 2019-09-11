function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function () {
  return "I am" + this.name;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");
a2.speak = function () {
  alert("Hello, " + this.identify() + ".");
};
console.log(a1.constructor === Foo);// true
console.log(a1.constructor === a2.constructor); // true
console.log(a1.constructor.prototype);// 获取实例对象的原型
/*
console.log(a1.__proto__ === Foo.prototype);
console.log(a1.__proto__ === (a2.__proto__);*/
