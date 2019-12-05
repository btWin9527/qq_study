'use strict';
// 日志包  输出级别: info debug error
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',// 级别
  transports: [// 输出的位置
    new winston.transports.Console(),
    new winston.transports.File({filename: './logs/applog.log'}),
  ]
});
export default logger;
