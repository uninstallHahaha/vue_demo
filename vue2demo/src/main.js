import Vue from 'vue'
import App from './App'

import vueRouter from './routers/indexRouter'
import store from './store/vuexIndex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //set the routers
  router: vueRouter,
  //设置vuex
  store: store,
  render: h => h(App)
})
