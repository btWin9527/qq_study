// 导入fs模块，使用文件读取代替database
const fs = require('fs');
const path = require('path');
let file = path.join(__dirname, './shop.json');

/**
 * @method          getFileData   封装promise处理文件读取异步操作,获取用户信息
 * @param {String}  username      用户输入用户名
 * @return {Object} Promise       返回promise对象，避免回调地狱
 */
function getFileData(username) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf-8', (err, data) => {
            let fileData = err ? {} : JSON.parse(data);
            let shopData = fileData[0] ? fileData : null;
            resolve(shopData);
        });
    })
}

/**
 * @method getShopData              获取商品信息
 * @param {Function}  callback      回调函数，返回商品信息
 */
exports.getShopData = async (callback) => {
    const shopData = await getFileData();
    callback(shopData);
};

/**
 * @method getOneShop              获取商品信息
 * @param {number}    id            商品id值
 * @param {Function}  callback      回调函数，返回商品信息
 */
exports.getShopDetail = async (id, callback) => {
    const shopData = await getFileData();
    let backShop = Object.keys(shopData).filter((keys) => shopData[keys].id === id);
    callback(backShop[0] ? shopData[backShop[0]] : null);
};
/**
 * @method getOneShop              获取商品信息
 * @param {number}    addData            商品id值
 * @param {Function}  callback      回调函数，返回商品信息
 */
exports.getShopAdd = async (addData, callback) => {
    const shopData = await getFileData();
    // filter判断商品名称是否重复
    let keysArr = Object.keys(shopData);
    let backShop = keysArr.filter((keys) => shopData[keys].shopName === addData.shopName);
    if (backShop.length !== 0) return callback(0);
    // 重新写入文件
    shopData[keysArr.length] = addData;
    fs.writeFile(file, JSON.stringify(shopData), (err) => {
        if (err) {
            throw err;
        }
        callback(1);
    });
};
/**
 * @method getOneShop               获取商品信息
 * @param {number}    id            商品id值
 * @param {Function}  callback      回调函数，返回商品信息
 */
exports.getShopDel = async (id, callback) => {
    const shopData = await getFileData();
    let currentKey;
    let backShop = false;
    Object.keys(shopData).forEach((keys) => {
        if (shopData[keys].id === id) {
            currentKey = keys;
            backShop = true;
        }
    });
    if (backShop) {
        shopData[currentKey] = {};
        // 进行删除
        fs.writeFile(file, JSON.stringify(shopData), (err) => {
            if (err) {
                throw err;
            }
            callback(1);
        });

    } else {
        // 传入数据有误
        callback(0);
    }
};
