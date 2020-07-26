import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * require.ensure() 引入的多个模块
 * 打包列如 ：
 * 1.home.js
 * 2.about.js ...
 */

const About = r => require.ensure([], () => r(require('../views/about')));
const Rongyu = r => require.ensure([], () => r(require('../views/rongyu')));
const Hezuo = r => require.ensure([], () => r(require('../views/hezuo')));

const baseUrl = ''; // 多页面路径配置

const routes = [
  {
    name: 'root',
    path: baseUrl + '/',
    redirect: baseUrl + '/about'
  },
  {
    name: 'about',
    path: baseUrl + '/about',
    component: About
  },
  {
    name: 'rongyu',
    path: baseUrl + '/rongyu',
    component: Rongyu
  },
  {
    name: 'hezuo',
    path: baseUrl + '/hezuo',
    component: Hezuo
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
});

export default router;
