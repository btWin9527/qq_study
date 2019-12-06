'use strict';
import logger from "../util/logger";
import * as userService from '../services/user.service'

const operations = {
  // 登录接口
  login: function (req, res) {
    let {account, password} = req.body;
    logger.info('====>login...' + account + ',' + password);
    userService.findUser(account, password)
      .then((data) => {
        console.log(data);
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).send('读取数据失败');
        }
      });
  }
};

export default operations;
