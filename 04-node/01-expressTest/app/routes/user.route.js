'use strict';
import express from 'express'
import userCtrl from '../controllers/user.ctrl'

const router = express.Router();// 路由--地址

export default function (app) {
  // 登录
  router.route('/user/login').post(userCtrl.login);
  // 获取用户信息
  router.route('/user/info').get(userCtrl.info);
  // 获取所有用户信息
  router.route('/user/list').get(userCtrl.list);
  // 给所有路由添加前缀
  app.use("/api", router);
}
