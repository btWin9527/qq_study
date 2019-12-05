/* 抽离配置文件*/
import express from './config/myexpress'
import logger from "./app/util/logger";// 导入日志
import config from "./config/config";// 导入配置

let app = express();
// 启动app服务
app.listenAsync(config.port).then(function () {
  logger.info(`Server started on port ${config.port}`);
});
