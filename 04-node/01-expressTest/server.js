/* 抽离配置文件*/
import express from './config/myexpress'
import logger from "./app/util/logger";// 导入日志
let app = express();
// 启动app服务
let port = 3456;
app.listenAsync(port).then(function () {
  logger.info(`server started on port ${port}`);
});
