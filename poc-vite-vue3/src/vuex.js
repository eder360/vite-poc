import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        incrementCount: state => state.counter++,
    },
    getters: {
        counter: state => state.counter
    },
    actions: {
        incrementCount: ({ commit }) => commit('incrementCount')
    }
})

export { store }