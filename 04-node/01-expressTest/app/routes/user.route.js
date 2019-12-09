'use strict';
import express from 'express'
import userCtrl from '../controllers/user.ctrl'
import LoanStatus from "../util/status.loan";

const router = express.Router();// 路由--地址

export default function (app) {
  // 登录
  router.route('/user/login').post(userCtrl.login);
  // 获取用户信息
  router.route('/user/info').get(userCtrl.info);
  // 获取所有用户信息
  router.route('/user/list').get(userCtrl.list);
  router.route('/user/pageList').get(userCtrl.pageList);

  // 拦截 OPTIONS ajax跨域
  let checkLogin = (req, res, next) => {
    if (req.originalUrl === '/api/user/login') {
      next()
    } else {
      if (req.session.userInfo && req.session.userInfo.token == req.headers['token']) {
        next();
      } else {
        LoanStatus.RESULT.data = {
          code: 10000,
          msg: "请登录..."
        };
        res.send(LoanStatus.RESULT.data);
      }
    }
  };
  app.use(checkLogin);

  // 给所有路由添加前缀
  app.use("/api", router);
}
