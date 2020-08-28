import {createRouter, createWebHashHistory} from 'vue-router';

// 使用createRouter创建路由

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/todolist',
      // 必须添加.vue后缀
      component: () => import('../views/todo-list.vue')
    }
  ]
})
