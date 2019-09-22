import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUsers: state => state.users
  },
  actions: {
    fetchUsers: async ({ commit }) => {
      try {
        const response = await axios.get('http://10.0.0.136:80/users')
        commit('SET_USERS', response.data.users)
      } catch (error) {
        console.error(error)
      }
    },
    addUser: async ({ commit }, user) => {
      try {
        await axios.post('http://10.0.0.136:80/users', user)
        commit('ADD_USER', user)
      } catch (error) {
        console.error(error)
      }
    }
  },
  mutations: {
    SET_USERS: (state, users) => state.users = users,
    ADD_USER: (state, user) => state.users.push(user)
  }
})
