
// 导入资源
const express = require('express');
const c_user = require('./controller/c_user');
const c_message = require('./controller/c_message');

// 实例化router对象
const router = express.Router();
// 配置路由
// 登录相关路由
router.post('/login', c_user.handleSignIn);
router.get('/logout', c_user.handleSignOut);
// 留言版接口
router.get('/message/list',c_message.showMessage);
router.post('/message/add',c_message.addMessage);

// 导出router对象
module.exports = router;
