// 1. 导入资源
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

// 2. 配置常量参数
const HOST_NAME = '127.0.0.1';
const PORT = 8888;

// 3. 配置资源
const app = express();
// 设置允许跨域请求
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/node_modules', express.static('./node_modules'));
// 配置第三方资源(express-art-template)
app.engine('html', require('express-art-template'));
// req会有一个 body属性: req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);

// 500响应
app.use((err, req, res, next) => {
    res.send({
        code: 500,
        msg: err.message
    })
});

// 404响应
app.use((req, res, next) => {
    res.render('404.html');
    next();
});

// 监听端口
app.listen(PORT, HOST_NAME, () => {
    console.log('web server run...');
});
