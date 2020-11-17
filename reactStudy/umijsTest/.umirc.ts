import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/pages/index',
      wrappers: ['@/wrappers/auth']
    },
    {exact: true, path: 'login', component: '@/pages/login'},
    {
      path: 'test',
      component: '@/pages/test',
      routes:[
        {
          path: 'test1',
          component: '@/pages/test/test1',
          exact: true,
        }
      ]
    },
  ],
});
