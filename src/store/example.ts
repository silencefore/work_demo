const type = 'HH'
const moduleB = {
    namespaced: true,
    state: () => ({pp: 2}),
    mutations: {},
    actions: {
        adds(context) {
            context.rootState.ii++
        }
    }
}

const moduleA = {
    namespaced: true,
    state: () => ({oo: 1}),
    mutations: {
        [type](state) {
            state.oo++
        }
    },
    actions: {
        add(context) {
            context.commit(type)
            context.state.oo++
        }
    },
    getters: {},
    modules: {
        moduleB
    }
}


export default {
    state: () => ({ii: 1}),
    modules: {
        moduleA,
    },
}
