// 开发配置
let base = require('./webpack.base')
let {smart} = require('webpack-merge')
module.exports = smart(base,{
  mode: 'development'
})
