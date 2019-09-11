// 导入商品数据
const m_shop = require('../models/m_shop');

/**
 * @method handleShopList  商品显示
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */

exports.handleShopList = (req, res, next) => {
    console.log('come')
    m_shop.getShopData((data) => {
        let responseData = {
            code: 200,
            msg: '商品信息获取成功',
            data: data,
        };
        res.send(responseData);
    });
};
/**
 * @method handleOneShop   商品显示
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */

exports.handleShopDetail = (req, res, next) => {
    const id = req.params.id ? Number(req.params.id) : 0;
    console.log(id,'detail')
    m_shop.getShopDetail(id, (data) => {
        let responseData = null;
        if (data) {
            responseData = {
                code: 200,
                msg: '商品信息获取成功',
                data: data,
            };
        } else {
            responseData = {
                code: 300,
                msg: '商品信息获取失败',
                data: null,
            };
        }

        res.send(responseData);
    });
};
/**
 * @method handleShopAdd   商品添加
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */
exports.handleShopAdd = (req, res, next) => {
    const addData = req.body;
    m_shop.getShopAdd(addData, (data) => {
        let responseData = null;
        if (data && data === 1) {
            responseData = {
                code: 200,
                msg: '商品添加成功',
                data: null,
            };
        } else {
            responseData = {
                code: 300,
                msg: '商品名称已经存在',
                data: null,
            };
        }
        res.send(responseData);
    });
};
/**
 * @method handleShopDel   商品添加
 * @param  {Object}   req  请求资源
 * @param  {Object}   res  响应资源
 * @param  {Function} next 运行下一个函数
 */
exports.handleShopDel = (req, res, next) => {
    const delId = req.params.id;
    console.log(delId,'delid')
    m_shop.getShopDel(delId, (data) => {
        // 1:删除成功; 0:数据传入有误
        let responseData = null;
        if (data && data === 1) {
            responseData = {
                code: 200,
                msg: '商品删除成功',
                data: null,
            };
        } else {
            responseData = {
                code: 300,
                msg: 'id传入有误',
                data: null,
            };
        }
        res.send(responseData);
    })
};
