import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = r => require.ensure([], () => r(require('../views/home')));
const Haisha = r => require.ensure([], () => r(require('../views/haisha')));

const baseUrl = ''; // 多页面路径配置

const routes = [
  {
    name: 'root',
    path: baseUrl + '/',
    redirect: baseUrl + '/home'
  },
  {
    name: 'home',
    path: baseUrl + '/home',
    component: Home
  },
  {
    name: 'haisha',
    path: baseUrl + '/haisha',
    component: Haisha
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
});

export default router;
