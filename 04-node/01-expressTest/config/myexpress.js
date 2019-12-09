'use strict';
/*
* 依赖下载
* npm i
* express
* body-parser       http请求body解析
* cookie-parser     解析cookie
* express-session   服务端session
* npm i babel-cli babel-preset-env -D     (转换ex5)
*  babel-cli        babel转码
* babel-preset-env  自动根据环境转码
* 1.【运行服务】
* npm i babel-node    (运行项目)
* 2. 【配置抽离】
* npm i babel-plugin-add-module-exports -D      （添加export default 方法）
* 3. 【输出日志】
* npm i winston
* 4. 【控制器--处理接口】
* 5. 【安装sequelize框架链接数据库】
* npm i sequelize -S
* */
import path from 'path'; // node工具--路径
import util from 'util';// node工具包
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session'

export default () => {
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
  // session支持
  app.use(session({
    secret: 'secret',// 签名
    resave: true,// 是否允许session重新设置
    saveUninitialized: false,// 是否保存未初始化的数据
    cookie: {
      maxAge: 1000 * 60 * 30// session有效期
    }
  }));

  // 将异步方法变为Promise(app.listen是异步)
  // 将异步回调包装成promise 增加一个方法listenAsync
  app.listenAsync = util.promisify(app.listen);
  // 路由
  // process.cwd() === 得到当前程序执行的目录
  require(process.cwd() + '/app/routes/user.route.js')(app);
  return app;
}

