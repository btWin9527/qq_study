const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');
const manufacturerController = require('../../controllers/manufacturer');

router.get('/manufacturers', manufacturerController.all);// 获取所有的制造商（manufacturers）
router.get('/manufacturers/:id', manufacturerController.byId);// 获取单个制造商，这里 :id 代表动态路由，用于匹配任意字符
router.post('/manufacturers', manufacturerController.create);// 用户创建单个制造商
router.put('/manufacturers/:id', manufacturerController.update);// 用于修改单个制造商
router.delete('/manufacturers/:id', manufacturerController.remove);// 用于删除单个制造商

router.get('/products', productController.all);// 获取所有的产商品（products）
router.get('/products/:id', productController.byId);// 获取单个商品，这里 :id 代表动态路由，用于匹配任意字符串
router.post('/products', productController.create);// 用户创建单个商品
router.put('/products/:id', productController.update);// 用于修改单个商品
router.delete('/products/:id', productController.remove);// 用于删除单个商品

module.exports = router;
