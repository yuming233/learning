export default {
    state: {
        name: 'james'
    },
    mutations: {
        updataName(state, changeName) {
            state.name = changeName
        }
    },
    actions: {
        aUpdataName(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('updataName', 'zhangsan')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '添加的东西'
        },
        fullname2(state, getters) {
            return getters.fullname + '+前面的东西再添加的东西'
        },
        fullname3(state, getters, rootState) { // 根节点状态会作为第三个参数暴露出来
            return getters.fullname2 + '+' + rootState.counter
        }
    }
}