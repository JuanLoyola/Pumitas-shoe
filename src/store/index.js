import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentValue: ''
  },
  mutations: {
    increaseValue (state) {
      state.currentValue++
    }
  },
  actions: {
  },
  modules: {
  }
})
