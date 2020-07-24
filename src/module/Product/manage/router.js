import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * require.ensure() 引入的多个模块
 * 打包列如 ：
 * 1.home.js
 * 2.about.js ...
 */

const Kuangchan = r => require.ensure([], () => r(require('../views/kuangchan')));
const Tianhai = r => require.ensure([], () => r(require('../views/tianhai')));
const Jijian = r => require.ensure([], () => r(require('../views/jijian')));
const Touzi = r => require.ensure([], () => r(require('../views/touzi')));

const baseUrl = ''; // 多页面路径配置

const routes = [
  {
    name: 'root',
    path: baseUrl + '/',
    redirect: baseUrl + '/kuangchan'
  },
  {
    name: 'kuangchan',
    path: baseUrl + '/kuangchan',
    component: Kuangchan
  },
  {
    name: 'tianhai',
    path: baseUrl + '/tianhai',
    component: Tianhai
  },
  {
    name: 'jijian',
    path: baseUrl + '/jijian',
    component: Jijian
  },
  {
    name: 'touzi',
    path: baseUrl + '/touzi',
    component: Touzi
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
});

export default router;
