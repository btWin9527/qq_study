'use strict';
import logger from "../util/logger";
import * as userService from '../services/user.service'
import LoanStatus from "../util/status.loan";

const operations = {
  // 登录接口   义务逻辑--记录登录用户信息session
  login: function (req, res) {
    let {account, password} = req.body;
    logger.info('====>login...' + account + ',' + password);
    userService.findUser(account, password)
      .then((data) => {
        if (data) {
          LoanStatus.RESULT.data = {
            id: data.id,
            account: account,
            token: new Date().getTime(),
          }
          req.session.userInfo = data;// 保存用户信息到session
          res.status(200).json(LoanStatus.RESULT);
        } else {
          res.status(404).send('读取数据失败');
        }
      });
  },
  // 获取用户信息 -- 根据用户id查找相关信息
  info: function (req, res) {
    // 用户id
    let uid = req.session.userInfo.id;
    userService.findRoleByUId(uid)
      .then((role) => {// 角色信息
        LoanStatus.RESULT.data = {
          roles: [{
            id: role.id,
            name: role.role_name
          }]
        };
        res.status(200).json(LoanStatus.RESULT);
      })
  }
};

export default operations;
