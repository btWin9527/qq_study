/* vuex配置 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
*
* require.context()函数创建自己的上下文，允许传递要搜索的目录，指示是否也应搜索子目录的标志以及用于匹配文件的正则表达式
require.context()在构建时，webpack 在代码中进行解析
* */
const modulesFiles = require.context('./modules', true, /\.js$/)

// 自动引入vuex模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store
