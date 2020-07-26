import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Jituan = r => require.ensure([], () => r(require('../views/jituan')));
const Hangye = r => require.ensure([], () => r(require('../views/hangye')));

const baseUrl = ''; // 多页面路径配置

const routes = [
  {
    name: 'root',
    path: baseUrl + '/',
    redirect: baseUrl + '/jituan'
  },
  {
    name: 'jituan',
    path: baseUrl + '/jituan',
    component: Jituan
  },
  {
    name: 'hangye',
    path: baseUrl + '/hangye',
    component: Hangye
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
});

export default router;
