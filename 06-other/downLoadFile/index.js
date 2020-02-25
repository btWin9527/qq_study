/* 【前端文件下载】 */

/*
* 方式一：form表单提交
* @description
* 为一个下载按钮添加click事件，点击时动态生成一个表单，利用表单提交的功能来实现文件的下载（实际上表单的提交就是发送一个请求）
* 优点：传统方式，兼容性好，不会出现URL长度限制问题;
* 缺点: 无法知道下载的进度,无法直接下载浏览器可直接预览的文件类型（如txt/png等）
* */
/**
 * @method downloadFile 下载文件
 * @param {String} downloadUrl - 请求的地址
 * @param {String} fileName - 文件名
 */
function downloadFile(downloadUrl, fileName) {
  // 创建表单
  const formObj = document.createElement('form');
  formObj.action = downloadUrl;
  formObj.method = 'get';
  formObj.style.display = 'none';
  // 创建input，主要是起传参作用
  const formItem = document.createElement('input');
  formItem.value = fileName; // 传参的值
  formItem.name = 'fileName'; // 传参的字段名
  // 插入到网页中
  formObj.appendChild(formItem);
  document.body.appendChild(formObj);
  formObj.submit(); // 发送请求
  document.body.removeChild(formObj); // 发送完清除掉
}

/*
* 方式二：open或location.href
* @description 最简单最直接的方式，实际上跟a标签访问下载链接一样
* 优点：简单方便直接
* 缺点：
*   会出现URL长度限制问题
*   需要注意url编码问题
*   浏览器可直接浏览的文件类型是不提供下载的，如txt、png、jpg、gif等
*   不能添加header，也就不能进行鉴权
*   无法知道下载的进度
* */
window.open('downloadFile.zip');
location.href = 'downloadFile.zip';

/*
* 方式三：a标签的download
* @description  download属性是HTML5新增的属性
* 兼容性：
*   Edge 13在尝试下载data url链接时会崩溃
*   Chrome 65及以上版本只支持同源下载链接
*   Firefox只支持同源下载链接
* 优点：
*     能解决不能直接下载浏览器可浏览的文件
* 缺点：
*     得已知下载文件地址
*     不能下载跨域下的浏览器可浏览的文件
*     有兼容性问题，特别是IE
*     不能进行鉴权
* */
// 检测是否支持download
const isSupport = 'download' in document.createElement('a');

/*
* 方式四：利用Blob对象
* @description 通过调用接口api获取文件流进行下载，利用Blob对象可以将文件流转化为Blob二进制对象。该对象兼容性良好
* 注意：
*     IE10以下不支持
*     在Safari浏览器上访问Blob Url或Object URL当前是有缺陷的，如下文中通过URL.createObjectURL生成的链接。caniuse官网有指出
* 思路；
*     发请求获取二进制数据，转化为Blob对象，利用URL.createObjectUrl生成url地址，赋值在a标签的href属性上，结合download进行下载
* 优点：
*     能解决不能直接下载浏览器可浏览的文件
*     可设置header，也就可添加鉴权信息
* 缺点：
*     兼容性问题，IE10以下不可用；Safari浏览器可以留意下使用情况
* */
/**
 * 下载文件
 * @param {String} path - 下载地址/下载请求地址。
 * @param {String} name - 下载文件的名字/重命名（考虑到兼容性问题，最好加上后缀名）
 */
function downloadBlobFile(path, name) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      // const blob = new Blob([this.response], { type: xhr.getResponseHeader('Content-Type') });
      // const url = URL.createObjectURL(blob);
      const url = URL.createObjectURL(this.response);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
}

/*
* 方式五：利用base64
* @description
* 这里的用法跟上面用Blob大同小异，基本上思路是一样的，唯一不同的是，上面是利用Blob对象生成Blob URL，而这里则是生成Data URL，所谓Data URL，就是base64编码后的url形式
* 优点：
*     能解决不能直接下载浏览器可浏览的文件
*     可设置header，也就可添加鉴权信息
* 缺点：
*     兼容性问题，IE10以下不可用
* */
/**
 * 下载文件
 * @param {String} path - 下载地址/下载请求地址。
 * @param {String} name - 下载文件的名字（考虑到兼容性问题，最好加上后缀名）
 */
function downloadBaseFile(path, name) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.response);
      fileReader.onload = function () {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = this.result;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    }
  };
}

/* 获取后缀名 */
function findType(name) {
  const index = name.lastIndexOf('.');
  return name.substring(index + 1);
}
