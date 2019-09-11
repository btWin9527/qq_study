$(function () {
    login.init();
});
/* 登录功能实现*/
const login = {
    // 初始化
    init: function () {
        this.bind();
    },
    // 绑定点击事件
    bind: function () {
        $('#j_loginBtn').on('click', () => {
            let loginData = this.getFormData();
            if (!loginData) return alert('用户名或密码不能为空');
            let params = {
                url: `${BASE_URL}/login`,
                method: 'post',
                dataType: 'json',
                data: loginData
            };
            Ajax(params).then((res) => {
                const {code, msg} = res;
                Number(code) === 200 ? $('#body').load('./home.html') : alert(msg);
            }, (err) => {
                $('#body').html(err.responseText);
            })
        })
    },
    // 获取用户名和密码
    getFormData: function () {
        const username = $('#j_loginUsername').val().trim();
        const password = $('#j_loginPassword').val().trim();
        // 校验用户名和密码非空
        return !username || !password ?
            null :
            {
                username,
                password
            };
    }
};

/**
 * @method Ajax     封装ajax
 * @param {Object}  {url,method,dataType,data}
 * @return {Promise} 返回promise对象，处理成功和失败回调
 */

function Ajax(
    {
        url = null,
        method = 'GET',
        dataType = 'json',
        data = {}
    }) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            method,
            dataType,
            data,
            success: function (res) {
                resolve(res);

            },
            error: function (err) {
                reject(err);
            }
        })
    })
}
