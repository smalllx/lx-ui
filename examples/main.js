/*
 * @Author: 林娴
 * @LastEditors: 林娴
 */
import Vue from 'vue'
import App from './App.vue'
import router from './route'
import LxUI from '../packages'

// 注册组件
Vue.use(LxUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
