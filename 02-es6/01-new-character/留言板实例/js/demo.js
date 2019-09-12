/*
 * @Description: leave message module
 * @Author: guoxiaoye
 * @Date: 2019-09-12 10:16:58
 * @LastEditTime: 2019-09-12 13:54:10
 * @LastEditors: Please set LastEditors
 */

$(function () {
    /**
     * 初级选手写法
     */

    /*   $('.submit').click(function () {
          var _name = $('.name').val();
          var _msg = $('.message').val();
          const map = new Map();
          map.set(_name, _msg);
          var str = '';
          for (let [key, value] of map) {
              str += `
                  <li class="list-group-item">
                  ${key}
                  <span>说：</span>
                  ${value}
                  </li>
              `
          }
          $('.messageList').html(str);
      }) */


    /* 
     中级写法
    */

    /*  
     // 外部定义变量
      const map = new Map();
      // 外部定义唯一class名 -- container
      $('.container .submit').click(function () {
          var _name = $('.name').val();
          var _msg = $('.message').val();
          // 校验输入是否为空
          if (!_name || !_msg) return alert('请输入信息');
          map.set(_name, _msg);
          // 清空输入信息
          $('.name , .message').val('');
          list();
      })
      // 抽离处理方法
      let list = () => {
          var str = '';
          for (let [key, value] of map) {
              str += `
                    <li class="list-group-item">
                    ${key}
                    <span>说：</span>
                    ${value}
                    </li>
                `
          }
          $('.messageList').html(str);
      } */

    // 初始化留言板模板
    leaveMessage.init();
})

/**
 * 高级写法 -- 字面量抽离
 */
let leaveMessage = {
    // 外部变量
    map: new Map(),

    // 初始化方法
    init: function () {
        this.bind();
    },
    // 点击事件
    bind: function () {
        // 箭头函数处理点击事件方法内部this指向
        $('.container .submit').on('click', () => {
            let _name = $('.name').val(),
                _msg = $('.message').val();
            // 校验输入是否为空
            if (!_name || !_msg) return alert('请输入信息');
            this.map.set(_name, _msg);
            // 清空输入信息
            $('.name , .message').val('');
            this.handleLeaveMessage();
        })
    },
    // 留言板逻辑
    handleLeaveMessage: function () {
        let str = '';
        for (let [key, value] of this.map) {
            str += `
                      <li class="list-group-item">
                      ${key}
                      <span>说：</span>
                      ${value}
                      </li>
                  `;
        }
        $('.messageList').html(str);
    }
}