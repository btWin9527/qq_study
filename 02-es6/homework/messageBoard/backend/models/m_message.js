/* 存储留言板相关数据*/
let messageArr = ([
  {
    id: 1,
    name: 'a',
    message: [
      {
        time: '2019-01-20',
        content: '发言内容'
      },{
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
exports.addMessage = (requestTxt, callback) => {
  // 向messageArr中添加数据，如果name存在,则添加到该数据的message中，如果不存在，则新增id添加数据
  console.log(requestTxt, 'resss')
}
