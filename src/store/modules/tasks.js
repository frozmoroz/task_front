import axios from 'axios'

const tasks = {
  state: () => ({
    tasks: []
  }),
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks = payload
    },

    ADD_TASK: (state, payload) => {
      state.tasks.push(payload)
    },

    CHANGE_STATUS: (state, { number, status }) => {
      const task = state.tasks.find(task => task.number === number)

      task.status = status
    },
    authenticate (state, { token, expiration }) {
      console.log('q22', token, expiration)
    }
  },

  actions: {
    // changeStatus: ({ commit }, token, expiration) => commit('CHANGE_STATUS', token, expiration),
    getTasks ({ commit }) {
      axios
        .get('/tasks')
        .then(response => {
          commit('SET_TASKS', response.data)
        })
    }
  },

  getters: {
    getTasks: state => {
      return state.tasks
    },

    getTaskById: (state) => (number) => {
      return state.tasks.find(task => task.number === number)
    }
  }
}

export default tasks
