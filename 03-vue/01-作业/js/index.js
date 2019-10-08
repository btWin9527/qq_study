/* module(M层)*/
let data = {
  allUsers: [
    {name: '陈奕迅', qq: '123456', id: 1},
    {name: '李荣浩', qq: '12345678', id: 2},
    {name: '张三', qq: '321123', id: 3},
    {name: '李四', qq: '321111', id: 4},
    {name: '王五', qq: '131321', id: 5},
    {name: '赵六', qq: '32112341', id: 6},
  ],
  selectUsers: []
};

// 组件封装
let components = {
  'user-li': {
    template: '#userLi',
    // props: ['userdata', 'isstate', 'cursorstate'],
    props: {
      // 传递数据
      userdata: {
        type: Object,
        default() {
          return {}
        }
      },
      // 是否开启选中状态
      isstate: {
        type: Boolean,
        default: false
      },
      // 是否开启li鼠标显示手型
      cursorstate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        // 切换选中状态
        state: false
      }
    },
    filters: {
      /* 为当前内容拼接()*/
      joinSign(val) {
        return `( ${val} )`;
      }
    },
    methods: {
      changeState() {
        this.state = !this.state;
      }
    }
  }
};

/* vm层*/
let vm = new Vue({
  el: '#app',
  data,
  computed: {
    /* 所有好友人数*/
    allUsersNum() {
      return this.allUsers.length;
    },
    /* 选中好友人数*/
    selectUsersNum() {
      return this.selectUsers.length;
    }
  },
  // 过滤器
  filters: {
    /* 为当前内容拼接()*/
    joinSign(val) {
      return `( ${val} )`;
    }
  },
  components,
  methods: {
    // 处理点击联系用户
    handlerSelectUsers(v) {
      let isExitState = this.isExitArr(v, this.selectUsers);
      if (isExitState === -1) {
        this.selectUsers.push(v);
      } else {
        let idx = this.selectUsers.indexOf(v);
        this.selectUsers.splice(idx, 1);
      }
    },
    // 处理删除联系用户
    removeSelect(v, i) {
      // 取消联系人中对应的选中状态
      let idx = this.allUsers.indexOf(v);
      this.selectUsers.splice(i, 1);
      this.$refs['user' + idx][0].changeState();
    },
    // 判断元素在数组中是否存在
    isExitArr(val, arr) {
      return arr.findIndex(v => val === v);
    },
  },
});
