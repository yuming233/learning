import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import {
  request
} from './network/request.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 1.axios的基本使用
// axios({ // 支持promise
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get' // 请求类型
// }).then(res => {
//   console.log(res);
// })


// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000' // 根路径
// axios.defaults.timeout = 5000 // 超时设置


// // 2.axios发送并发请求
// axios.all([axios({
//   url: '/home/multidata'

// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(results => {
//   console.log(results);
// })




// // 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);

}).catch(err => {
  console.log(err);
})