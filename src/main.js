import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './global' // 全局性的设置

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
