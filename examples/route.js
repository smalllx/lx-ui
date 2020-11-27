/*
 * @Author: 林娴
 * @LastEditors: 林娴
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./view/Home.vue'),
    meta: {
      title: '首页'
    }
  }
]
const router = new VueRouter({
  routes
})

export default router
