let express = require("express");
let app = express();
// 通过插件，让webpack与node一起启动
/*let webpack = require('webpack')
let middle = require('webpack-dev-middleware')
let config = require('./webpack.config.js')
let compiler = webpack(config)
app.use(middle(compiler))*/
app.get("/api/user", (req, res) => {
  res.json({name: 'aaa'})
})
app.get("/user", (req, res) => {
  res.json({name: 'bbb'})
})
app.listen(3000, function () {
  console.log('服务启动')
})
