const user = {
  namespaced: true,
  state: {
    hasLogin: false,

    data: {},
  },
  getters: {
    user: (state) => state.data,
    hasLogin: (state) => state.hasLogin,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = { ...state.data, ...payload }
    },

    SET_USER_LOGIN: (state, payload) => {
      state.hasLogin = payload
    },
  },
  actions: {
    setUser: ({ commit }, payload) => {
      commit("SET_USER", payload)
    },

    setUserLogin: ({ commit }, payload) => {
      commit("SET_USER_LOGIN", payload)
    },
  },
}

export default user
