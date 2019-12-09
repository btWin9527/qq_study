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

/**
 * @method findUserList
 * @param {Number} pageNo   页码
 * @param {Number} pageSize 页数
 * @param {String} name     用户名
 * @return {Object} result  带分页的用户列表
 */
export async function findUserList(pageNo, pageSize, name) {
  let limit = pageSize;
  let offset = pageNo * pageSize;// pageNo 数据库偏移从0开始
  let result = {};
  if (name) {// 模糊查询
    // 模糊查询数据
    let d = await models.sequelize.query(`select * from jd_user where real_name like ? limit ${offset},${limit}`, {
      replacements: ['%' + name + '%'],
      model: User
    })
    result.data = d;
    // 模糊查询总记录
    let count = await models.sequelize
      .query("select count(*) num from jd_user where real_name like ?",
        {replacements: ['%' + name + '%']})
    if (count) {
      //总行数
      result.rows = count[0][0].num;
      //总页数
      result.pages = Math.ceil(count[0][0].num / pageSize)
    }
  } else {
    // 拿到一页数据
    let d = await User.findAll({
      limit: Number(limit),// pageSize
      offset: Number(offset),// 从哪条数据开始读取
      order: [[
        "id", "DESC"
      ]],// 排序类型
    });
    result.data = d;
    let count = await models.sequelize.query("select count(*) num from jd_user")
    if (count) {
      // 总行数
      result.rows = count[0][0].num;
      // 总页数
      result.pages = Math.ceil(count[0][0].num / pageSize);
    }
  }

  return result
}
