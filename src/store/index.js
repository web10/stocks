import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './userStore'
import StockStore from './stockStore'
Vue.use(Vuex)

export default new Vuex.Store(
  {
    modules: {
      userStore: UserStore,
      stockStore: StockStore
    },
    state: {
      loading: true,
      user: {
        id: 'daadfd'
      }
    },
    mutations: {
      setLoadin (state, payload) {
        state.loading = payload
      }
    },
    actions: {
      setLoadin ({commit}, payload) {
        commit('setLoadin', payload)
      }
    },
    getters: {}
  }
)
