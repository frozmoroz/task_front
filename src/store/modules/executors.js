import axios from 'axios'

const executors = {
  state: () => ({
    executors: []
  }),
  mutations: {
    SET_EXECUTORS: (state, payload) => {
      state.executors = payload
    }
  },

  actions: {
    getExecutors ({ commit }) {
      axios
        .get('/executors')
        .then(response => {
          commit('SET_EXECUTORS', response.data)
        })
    }
  },

  getters: {
    getExecutors: state => {
      return state.executors
    }
  }
}

export default executors
