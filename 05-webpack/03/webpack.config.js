let path = require('path');// nodejs工具类
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let TerserWebpackPlugin = require('terser-webpack-plugin')
let webpack = require('webpack')
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
    contentBase: './dist',// dist\index.html
    proxy: {// 跨域代理配置
      '/api': {
        target: "http://localhost:3000",
        pathRewrite: {// 取消路由前缀
          "/api": ""
        }
      }
    }
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
    // 全局变量
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          // 可以配置options或者使用.babelrc配置babel
          options: {
            presets: ['@babel/preset-env'],
            "plugins": [
              ["@babel/plugin-proposal-class-properties", {"loose": true}]
            ]
          }
        }
      },
      /*{
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },*/
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
        use: 'file-loader'
        /* use: {
           loader: 'url-loader',
           options: {
             limit: 100 * 1024// 小于等于100kb使用base64转化
           }
         }*/
      }
    ]
  }
}
