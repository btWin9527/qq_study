import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import ThroughBox from '@/components/ThroughBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/throughBox',
      name: 'ThroughBox',
      component: ThroughBox
    }
  ]
})
