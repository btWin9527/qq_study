'use strict';
import logger from "../util/logger";

const operations = {
  // 登录接口
  login: function (req, resp) {
    logger.info('====>login...');
    let data = {
      code: 200,
      msg: 'success'
    };
    resp.send(JSON.stringify(data));
  }
}

export default operations;
