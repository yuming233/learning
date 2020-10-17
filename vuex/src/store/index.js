import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations: { // 传递参数
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    iscrementCount(state, count) {
      state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu) // 是给students添加，所以是state.students.push
    },
    updateInfo(state) {
      Vue.set(state.info, 'address', '洛杉矶') // 给info添加个属性字符串  set：对象就传key，数组传number
    },
    delInfo(state) {
      Vue.delete(state.info, 'address') // 删除信息 
    }

  },
  actions: {},
  modules: {},
  getters: {
    pinfang(state) {
      return state.counter * state.counter
    },
    more20(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20Length(state, getters) {
      return getters.more20.length // 获取到了大于二十岁人的数量
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age) // 函数传参数大于多少岁的
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  }
})

// 导出store
export default store