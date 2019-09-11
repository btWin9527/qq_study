var bar = 2;
console.log(typeof bar,1);// number
var bar;
console.log(typeof  bar,2); // number
bar = null;
console.log(typeof bar,3); // Object
bar = 'bar' * 3;
console.log(bar,4); // NaN
console.log(typeof bar,5); // number

bar = 1/0;
console.log(bar,6); // infinity
console.log(typeof bar,7); // number