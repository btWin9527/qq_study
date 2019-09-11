// 配置路由文件

// 导入资源
const express = require('express');
const c_user = require('./controller/c_user');

// 实例化router对象
const router = express.Router();
// 配置路由
router.post('/login', c_user.handleSignIn);
router.get('/', c_user.handleSignOut);

// 导出router对象
module.exports = router;
