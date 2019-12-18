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
