import Vue from 'vue'

import App from './app.vue'
import store from './manage/store'
import router from './manage/router'
import Snake from '../../util/preloader'
import http from '../../util/httpRequest'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'

Vue.use(Snake, router)
Vue.prototype.$dialog = { confirm: Confirm, alert: Alert, toast: Toast, notify: Notify, loading: Loading }
Vue.prototype.$http = http

const vm = new Vue({
  el: '#app',
  store,
  router,
  render: page => page(App),
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})

window.vm = vm
