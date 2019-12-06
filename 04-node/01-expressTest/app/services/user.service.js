'use strict';
import models from '../models'

const User = models.jd_user;// 用户模型

/**
 * @method findUser 查找用户
 * @param {*} account   账号
 * @param {*} password  密码
 */
export function findUser(account, password) {
  return User.findOne({// 查询一条数据,User模型对象自带方法
    where: {// 查询条件 sql
      account,
      password,
    }
  })
}
