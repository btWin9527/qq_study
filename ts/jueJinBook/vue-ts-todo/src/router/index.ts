import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "create" */ "../views/Home.vue")
  },
  {
    path: "/create",
    name: "create",
    component: () => import(/* webpackChunkName: "create" */ "../views/Create.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
