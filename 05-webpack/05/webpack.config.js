let path = require('path');// nodejs工具类
let HtmlWebpackPlugin = require('html-webpack-plugin');
// nodejs模块化固定用法
module.exports = {
  // mode: 'development',// 默认production -- 会压缩代码
  mode: 'production',// 默认production -- 会压缩代码
// 多个入口
  entry: {
    index: './src/index.js',
    my: './src/my.js'
  },
  // 多个出口
  output: {
    filename: '[name].js',
    // path: path.resolve('dist') // 绝对路径
    // __dirname -- 当前目录路径
    path: path.resolve(__dirname, 'dist'),
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',// 文件模板
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',// 文件模板
      filename: 'my.html',
      chunks: ['my']
    }),
  ],
  module: {
    rules: []
  }
}
