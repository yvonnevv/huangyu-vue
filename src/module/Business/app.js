import Vue from 'vue'

import App from './app.vue'
import store from './manage/store'
import router from './manage/router'
import Snake from '../../util/preloader'
import { Toast, Loading } from 'vue-ydui/dist/lib.rem/dialog'

Vue.use(Snake, router)
Vue.prototype.$dialog = { toast: Toast, loading: Loading }

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
