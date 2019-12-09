'use strict';
import models from '../models'

const User = models.jd_user;// 用户模型
const Role = models.jd_role;  //角色模型
const UserRole = models.jd_user_role; //用户角色关系
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

/**
 * @method findRoleByUId 根据用户id查找角色
 * @param {Number} uid 用户id
 * @return {Object} role 返回用户角色
 */
export async function findRoleByUId(uid) {
  // 获取用户角色关系对象
  //获取用户角色关系对象  findOne---只查询一条数据 一个学员有一个学号
  let userRole = await UserRole.findOne({
    where: {
      user_id: uid
    }
  });
  //得到角色对象
  let role = await Role.findOne({
    where: {
      id: userRole.role_id,
      name: userRole.role_name,
    }
  });
  return role
}

/**
 * @method findRoleByUId 获取所有用户信息 sql
 * @return {Object} role 返回所有角色
 */
export async function findAll() {
  // 将读取数据存入User,便于使用面向对象
  let d = await models.sequelize.query(`SELECT u.account, u.password, u.reg_time, u.creator, r.role_name 
            from jd_user u left join jd_user_role ur on u.id=ur.user_id 
            left join jd_role r on r.id=ur.role_id order by u.id desc `, {model: User});
  return d;
}
