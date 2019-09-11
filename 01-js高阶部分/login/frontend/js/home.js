/* 首页逻辑处理*/
$(function () {

})
// 搜索模块
let searchModule = {};
// 数据渲染模块
let tableModule = {
    init: function () {
        this.showData();
    },
    showData: function () {

    }
};

// 操作模块(CRUD)
let actionModule = {};

/**
 * @method Ajax     封装ajax
 * @param {Object}  {url,method,dataType,data}
 * @return {Promise} 返回promise对象，处理成功和失败回调
 */
function Ajax({url = null, method = 'GET', dataType = 'json', data = {}}) {
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
