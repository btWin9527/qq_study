/* 正0和负0的判断*/
function isminus0(num) {
  return num === 0 && (1 / num === -infinity);
}

/* 判断正0和负0*/
console.log(Object.is(0,-0));