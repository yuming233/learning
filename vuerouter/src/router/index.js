import Vue from 'vue'
import VueRouter from 'vue-router'
import HellowWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)  // 通过Vue.use()插件,安装插件

// 创建一个router对象
const routes = [
  {
    path: '/hello',
    component: HellowWorld
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 将router对象传入到vue实例
export default router
