1. 安装依赖 webpack webpack-cli
2. npx 直接运行nodemodules下面的依赖(npx webpack)
    【解释】
    将src下所有js文件合并压缩到dist/main.js
3. npx webpack执行过程

4. webpack零配置比较弱
-- 手动配置webpack.config.js

5. 将打包的js自动添加到html
    html-webpack-plugin

6. 如何启动一个web服务
    npm run build -- npx webpack
    webpack-dev-server

----------------------------------------------
1. 样式loader
style-loader 把样式整合到html上
css-loader   装载css @import
['style-loader','css-loader']   执行顺序从右到左
less    less-loader
sass    node-sass sass-loader

2. 把css文件合并
mini-css-extract-plugin     (抽取css文件，引入到Html) -- 没有压缩css

3. 压缩css
optimize-css-assets-webpack-plugin
【】指定optimization选项后,webpack默认js压缩合并取消

4. 手动配置js压缩合并
terser-webpack-plugin

5. 小图片使用base64,大图片使用单独http请求

图片装载file-loader, 不能压缩base64
把小图片压缩车base64,    url-loader

6. 对于img元素处理, 需要html-withimg-loader 【todo:目前打包有bug待解决】

7. webpack全局变量
-- 类似jquery全局配置

8. 解析es6代码
npm i -D @babel/core @babel/preset-env @babel/plugin-proposal-class-properties babel-loader

9. webpack配置跨域处理

【补充】
http://www.baidu.com:80     (http默认80端口)
https://www.baidu.com:443   (https默认443端口)

例子：
前端:localhost:8080
后端:localhost:3000

方法1：
devServer:{
     proxy:{// 跨域代理配置
          '/api':{
            target:"http://localhost:3000"
          },
           pathRewrite: {// 取消路由前缀
                    "/api": ""
          }
      }
}
方法2：后端cors配置

方法3： nodejs配置webpack-dev-middleware

10. 区分不同开发环境
-- 开发环境

-- 测试环境

-- 上线环境

使用webpack-merge将基类文件与子类文件合并
基类文件 webpack.base.js
子类文件 webpack.dev.js   webpack.prod.js

11. 多个html文件打包处理

