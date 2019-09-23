let arr = [
    {
        name: 'a',
        value: 1
    },
    {
        name: 'b',
        value: 2
    },
    {
        name: 'c',
        value: 4
    }
];

/*
* 需求：
* 将上述数据以数组和对象的形式提取出其中的name和value
* 结果表现为
* [ { a: 1 }, { b: 2 }, { c: 4 } ]
* { a: 1, b: 2, c: 4 }
* */
function getNewArr(arr) {
    let map = new Map();
    arr.map((v, i) => map.set(v.name, v.value));
    return map
}

let resultMap = getNewArr(arr);
let tempArr = [];
let tempObj = {};
for (let [key, value] of resultMap) {
    // 结果转为数组
    tempArr.push({
        [key]: value
    });
    // 结果转为对象
    tempObj[key] = value;
}
console.log(tempArr,'数组')
console.log(tempObj,'对象')
