let path = require('path');// nodejs工具类
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let TerserWebpackPlugin = require('terser-webpack-plugin')
// nodejs模块化固定用法
module.exports = {
  // 配置css,js压缩合并
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
  },
  // 配置web服务
  devServer: {
    port: 8080,
    open: true,
    contentBase: './dist'// dist\index.html
  },
  // mode: 'development',// 默认production -- 会压缩代码
  mode: 'production',// 默认production -- 会压缩代码
// 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'dist.js',
    // path: path.resolve('dist') // 绝对路径
    // __dirname -- 当前目录路径
    path: path.resolve(__dirname, 'dist'),
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',// 文件模板
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,// 压缩代码
      },
    }),
    // 抽取css文件
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    // 压缩css
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png)$/,
        // use:'file-loader'
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024// 小于等于100kb使用base64转化
          }
        }
      }
    ]
  }
}
