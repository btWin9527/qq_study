// 导入用户数据
const m_user = require('../models/m_user');

/**
 * @method handleSignIn    登录接口
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */
exports.handleSignIn = (req, res, next) => {
    const username = req.body.username;

    m_user.checkUsername(username, (data) => {
        let responseData = null;
        // 用户存在逻辑
        if (data) {
            // 判断密码是否正确
            const password = req.body.password;
            if (password) {
                let currentPassword = data.password;
                responseData =
                    Number(password) === Number(data.password) ?
                        {
                            code: 200,
                            mgs: '登录成功'
                        }
                        : {
                            code: 300,
                            msg: '密码错误'
                        };
            }
            // 前端未传密码
            else {
                responseData = {code: 500, msg: '服务器响应错误，请进行正确操作'};
            }
        }
        // 用户不存在
        else {
            responseData = {code: 300, msg: '用户名错误'};
        }
        res.send(responseData);
    });
};

// todo:用户退出 -- 待开发
exports.handleSignOut = (req, res, next) => {
    res.send({
        code: 200,
        msg: '退出成功'
    })
};
