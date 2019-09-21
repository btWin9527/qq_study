const BASE_URL = 'http://127.0.0.1:8888/'
$(function () {
  // 初始化留言板模板
  leaveMessage.init();
})

let leaveMessage = {

  // 初始化方法
  init() {
    this.bind();
    this.showMessage();
  },
  // 点击事件
  bind() {
    $('.container .submit').on('click', () => {
      let [_name, _msg] = [$('.name').val(), $('.message').val()];
      // 校验输入是否为空
      if (!_name || !_msg) return alert('请输入信息');
      // 通过时间戳来解决同一人多次发言信息覆盖问题
      let time = new Date().getTime();
      let data = {
        name: _name,
        msg: _msg,
        time: time
      };
      this.handleLeaveMessage(data);
    })
  },
  // 留言板逻辑
  async handleLeaveMessage(data) {
    const res = await getJSON(BASE_URL + 'message/add', 'post', data);
    console.log(res, 'res')
    // 清空输入信息
    $('.name , .message').val('');
  },

  // 显示留言板
  async showMessage() {
    // 发送请求
    const res = await getJSON(BASE_URL + 'message/list', 'get');
    let {code, data, message} = res;
    if (code === 1) return alert(message);// 接口请求信息失败
    let str = '';
    data.forEach((v, i) => {
      v.message.forEach((v1, i1) => {
        str += `
                 <li class="list-group-item">
                 ${v.name}
                 <span>说：</span>
                 ${v1.content}
                 <span style="float: right;"> ${v1.time}</span>
                 </li>
             `;
      })
    })

    $('.messageList').html(str);
  }
}
