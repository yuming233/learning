import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'

// 安装插件
Vue.use(Vuex)

// // 创建modules对象   这个要放上面
// const moduleA = {}


const state = {
  counter: 100,
  students: [{
      id: 100,
      name: 'as',
      age: 180
    },
    {
      id: 100,
      name: 'as',
      age: 12
    },
    {
      id: 100,
      name: 'as',
      age: 14
    },
    {
      id: 100,
      name: 'as',
      age: 24
    },

  ],
  info: {
    name: 'kob',
    age: 18

  }
}


// 创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions: {

  },
  modules: {
    a: moduleA
  },
  getters
})



// 导出store
export default store