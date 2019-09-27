/**
 * 数组对象去重
 */
const arr = [
  {name: 1, msg: '1'},
  {name: 3, msg: '3'},
  {name: 2, msg: '2'},
  {name: 2, msg: '6'},
  {name: 3, msg: '4'},
];

/* 方法一：计数器原理
 * 原理：
 * 定义临时数组,存储原数组的第一项;
 * 通过双重for循环实现去重
* */
function arrayFor(arr, key) {
  let temp = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let n = 0;
    for (let j = 0; j < temp.length; j++) {
      if (arr[i][key] !== temp[j][key]) {
        n++;
      }
      if (n === temp.length) {
        temp.push(arr[i])
      }
    }
  }
  return temp;
}

let newArr = arrayFor(arr, 'name');
console.log(newArr, '数组对象去重方法一');

/* 方法二：Map去重（Map中key是唯一的）*/

function arrayMap(arr, key) {
  let map = new Map();
  // 方法1
  /*arr.forEach((v, i) => {
      // 若map中没有相同的name值，则向其中添加新值（减少map赋值次数）
      if (!map.has(v[key])) map.set(v[key], v);
  });
  return [...map.values()];*/
  // 方法2
  return arr.filter((v) => {// 通过遍历数组，返回满足条件元素所组成的新数组
    // 简写
    return !map.has(v[key]) && map.set(v[key], v)
    // 初始思路
    /* if (!map.has(v[key])) {
       map.set(v[key], v);
       return true;
     }*/
  })
}

let newArr2 = arrayMap(arr, 'name');
console.log(newArr2, '数组对象去重方法二');

/* 方法三：对象覆盖去重*/
function arrayObj(arr, key) {
  let obj = {}, result = [];
  arr.forEach(v => {
    obj[v[key]] = v;
  });
  // todo:展开运算符优化
  for (let k in obj) {
    result.push(obj[k])
  }
  return result
}

let newArr3 = arrayObj(arr, 'name');
console.log(newArr3, '数组对象去重方法三');

