/* 涉及题目： 原型继承和class继承 */

// 组合继承

function Parent(value) {
  this.val = value;
}

Parent.prototype.getValue = function () {
  console.log(this.val, 'val')
}

function Child(value) {
  Parent.call(this, value);
}

Child.prototype = new Parent();
const child = new Child(1);
child.getValue();
console.log(child instanceof Parent, '继承');
