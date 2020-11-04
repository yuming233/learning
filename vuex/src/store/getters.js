export default {
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