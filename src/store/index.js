import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlServer: "http://localhost:3000/api/1.0/",
    headers: {
      "Authorization": "123456",
      "Content-Type": "application/json"
    },
    user: {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
