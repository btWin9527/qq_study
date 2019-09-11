// 导入fs模块，使用文件读取代替database
const fs = require('fs');
const path = require('path');
let file = path.join(__dirname, './user.json');

/**
 * @method          getFileData   封装promise处理文件读取异步操作,获取用户信息
 * @param {String}  username      用户输入用户名
 * @return {Object} Promise       返回promise对象，避免回调地狱
 */
function getFileData(username) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf-8', (err, data) => {
            let fileData = err ? {} : JSON.parse(data);
            let userArr = Object.keys(fileData).filter((keys) => fileData[keys].username === username);
            let userData = userArr[0] ? fileData[userArr[0]] : null;
            resolve(userData);
        });
    })
}

/**
 * @method checkUsername            校验用户名是否存在
 * @param {String}    username      用户输入用户名
 * @param {Function}  callback      回调函数，处理用户校验结果操作
 */
exports.checkUsername = async (username, callback) => {
    const userData = await getFileData(username);
    callback(userData);
};

