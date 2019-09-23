/* 留言板controller*/
const m_message = require('../models/m_message');

/**
 * @method showMessage  显示留言板信息
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */
exports.showMessage = (req, res, next) => {
  m_message.showMessage((data) => {// data表示留言板数据
    let responseData = null;
    if (data) {
      responseData = {
        code: 0,
        data: data,
        message: '数据请求成功'
      };
    } else {
      responseData = {
        code: 1,
        data: null,
        message: '数据请求失败'
      };
    }

    res.send(responseData)
  })
}
/**
 * @method addMessage  添加留言板信息
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */
exports.addMessage = (req, res, next) => {
  const requestTxt = req.body;
  m_message.addMessage(requestTxt, (data) => {
    let responseData = null;
    if (data) {
      responseData = {
        code: 0,
        data: null,
        message: '数据添加成功'
      };
    } else {
      responseData = {
        code: 1,
        data: null,
        message: '数据添加失败'
      };
    }

    res.send(responseData)
  })
}
