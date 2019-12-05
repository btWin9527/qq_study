'use strict';
/*
* 依赖下载
* npm i
* express
* body-parser
* cookie-parser
* express-session
* npm i babel-cli babel-preset-env -D     (转换ex5)
*  babel-cli
* babel-preset-env
* npm i babel-node    (运行项目)
* 【运行服务】
* */
import path from 'path'; // node工具--路径
import express from 'express';
import bodyParser from 'body-parser';

let app = express();

// 处理跨域
app.use(function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});
// 解析json,post
app.use(bodyParser.json());// 创建application/json解析
app.use(bodyParser.urlencoded({extended: true}));// // req会有一个 body属性: req.body

// 启动app服务
app.listen(3456, function () {
  console.log('server started on port 3456');
});
