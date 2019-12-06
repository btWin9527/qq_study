'use strict';

import fs from 'fs';  //node--文件读取
import path from 'path'; //node--路径
import Sequelize from 'sequelize'; //模型框架
import config from '../../config/config';
import logger from '../util/logger';

// const basename  =  'index.js';  //当前文件
const db = {};  //空对象 模型名.模型对象
const dbConfig = config.db;
let sequelize;

//连接数据库
try {
  sequelize = new Sequelize(dbConfig.database,
    dbConfig.username, dbConfig.password, dbConfig);
  logger.info('成功连接数据库...');
} catch (e) {//捕获错误  保存在日志文件
  logger.error('连接数据库失败: ', e);
  throw e;
}

//把生成的模型文件导入到sequelize中，然后模型就可以操作db
//__dirname 当前目录
fs.readdirSync(__dirname) //读取当前目录所有文件  忽略index.js
  .filter((file) => {
    //过滤所有的模型文件
    return file !== 'index.js';
  })
  .forEach((file) => { //循环模型文件
    //path.join 合并地址 __dirname当前目录地址   file--文件名
    //sequelize.import  将Model导入到sequelize模型框架
    const model = sequelize.import(path.join(__dirname, file));  //将Model导入到Service
    //model.name == 模型名
    db[model.name] = model;  //model就可以操作db db.jd_user = 模型对象
  });

db.sequelize = sequelize; //把sequelize对象也导出 直接执行sql脚本

export default db;
