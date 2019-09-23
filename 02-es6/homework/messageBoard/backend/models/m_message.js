/* 存储留言板相关数据*/
let messageArr = ([
    {
        id: 1,
        name: 'a',
        message: [
            {
                time: '2019-01-20',
                content: '发言内容'
            }, {
                time: '2019-01-21',
                content: '发言内容2'
            }
        ]
    },

]);

// 显示留言板信息
exports.showMessage = (callback) => {
    callback(messageArr)
};
// 添加留言板信息
exports.addMessage = (requestTxt, callback) => {
    // 向messageArr中添加数据，如果name存在,则添加到该数据的message中，如果不存在，则新增id添加数据
    let flag = false;
    if (!requestTxt.name || !requestTxt.msg || !requestTxt.time) return (flag);
    const currentArr = messageArr.filter((v, i) => {// 获取当前用户的留言信息
        return v.name === requestTxt.name
    });
    if (currentArr.length > 0) {// 当前用户存在
        let idx = messageArr.indexOf(currentArr[0]);
        messageArr[idx].message.push({
            time: requestTxt.time,
            content: requestTxt.msg
        })
    } else {
        let messageLen = messageArr.length;
        let id = messageArr[messageLen - 1].id;
        messageArr.push({
            id: ++id,
            name: requestTxt.name,
            message: [{
                time: requestTxt.time,
                content: requestTxt.msg
            }]
        });
    }
    flag = true;
    callback(flag);
};
