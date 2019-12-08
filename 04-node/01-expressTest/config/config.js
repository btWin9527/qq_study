'use strict';

const config = {
  // timezone: "+08:00",// 时区配置 -- 北京东8区
  port: process.env.RORT || 3456,
  db: {// 数据库
    database: 'jindu_loan',
    username: 'root',
    // password: 'root',
    password: '12345678',
    host: '127.0.0.1',
    port: 3306,
    timezone: '+08:00', //时区
    dateStrings : true, //解决时间格式
    dialect: 'mysql',// 方言
    define: {// 模型默认定义
      timestamps: false // 取消默认添加的属性
    }
  }
}
export default config
