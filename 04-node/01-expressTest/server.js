/* 抽离配置文件*/
import express from './config/myexpress'

let app = express();
// 启动app服务
let port = 3456;
app.listenAsync(port).then(function () {
  console.log(`server started on port ${port}`);
});
