export default {
    // 传递参数
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

}