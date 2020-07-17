const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'upload/'});
const app = express();
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


app.post('/upload', upload.single('imgData'), function (req, res) {
  res.send({ret_code: '0'});
});

app.listen(8888, () => {
  console.log('server is running at http://localhost:8888')
})
