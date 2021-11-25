import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import user from "./modules/user"
import header from "./modules/header"

export default new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    header,
  },
  strict: process.env.NODE_ENV !== "production",
})
