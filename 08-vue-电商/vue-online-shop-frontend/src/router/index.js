import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 商品展示列表
    {
      path: '/',
      name: 'Home',
      component: () => import("_pages/Home")
    },
    // 后台管理页面
    {
      path: '/admin',
      name: 'Admin',
      component: () => import("_pages/admin/index"),
      children: [
        // 创建新的商品
        {
          path: 'new',
          name: 'New',
          component: () => import("_pages/admin/New")
        },
        // 编辑商品信息
        {
          path: 'edit/:id',
          name: 'Edit',
          component: () => import("_pages/admin/Edit")
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import("_pages/admin/Products")
        },
      ]
    },
    // 购物车
    {
      path: '/cart',
      name: 'Cart',
      component: () => import("_pages/Cart")
    },
    // 产品详情
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import("_pages/Detail")
    }
  ]
})
