 import axios from 'axios'


 // 后面加函数是为了回调
 //  export function request(config, success, failure) {

 //  // 1. 创建axios实例
 //  const instance = axios.create({
 //      baseURL: 'http://123.207.32.32:8000',
 //      timeout: 5000
 //  })

 //      // 发送真正的网络请求     
 //      instance(config)
 //          .then(res => {
 //              success(res);
 //          })
 //          .catch(err => {
 //              failure(err)
 //          })
 //  }


 export function request(config) {
     // 1. 创建axios实例
     const instance = axios.create({
         baseURL: 'http://123.207.32.32:8000',
         timeout: 5000



     })

     //  2.1axios的拦截器
     instance.interceptors.request.use(config => {
         console.log(config);
         // 为什么要拦截？请求拦截的作用
         // 1.比如config中的一些信息不符合服务器的要求
         // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标（loading）
         // 3.某些网络请求(登录(token)),必须携带一些特殊的信息

         return config //拦截器放行
     }, err => {
         console.log(err);
     })


     // 2.2响应拦截
     instance.interceptors.response.use(res => {
         console.log(res);
         return res.data // 返回
     }, err => {
         console.log(err);
     })


     // 3.发送真正的网络请求     
     return instance(config)

 }