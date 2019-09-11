// 配置路由文件,处理formData数据的接收
// https://blog.csdn.net/u012615439/article/details/80004678
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
// 导入资源
const express = require('express');
const c_user = require('./controller/c_user');
const c_shop = require('./controller/c_shop');

// 实例化router对象
const router = express.Router();
// 配置路由
// 登录相关路由
router.post('/login', c_user.handleSignIn);
router.get('/logout', c_user.handleSignOut);
// 商品数据相关路由
router.get('/shop/list', c_shop.handleShopList);
router.get('/shop/list/detail/:id', c_shop.handleShopDetail);
router.get('/shop/list/del/:id', c_shop.handleShopDel);
router.post('/shop/list/add', multipartMiddleware, c_shop.handleShopAdd);

// 导出router对象
module.exports = router;
