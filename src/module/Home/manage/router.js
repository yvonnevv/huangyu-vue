import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const baseUrl = ''; // 多页面路径配置

const routes = [
  {
    name: 'root',
    path: baseUrl + '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
});

export default router;
