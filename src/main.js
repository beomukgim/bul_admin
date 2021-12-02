import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/css/app.min.css"
import "./style.css"

import objectMapper from "@/utils/mapper"
import fileManager from "@/utils/file-manager"
import { formatDate } from '@/utils/filters'
import Toasted from 'vue-toasted'
import VueCookies from 'vue-cookies'
import Dayjs from 'dayjs'

import CONSTANTS from '@/constants'
import axios from '@/plugins/axios'
import Api from '@/api'



Vue.config.productionTip = false

Vue.prototype.$dayjs = Dayjs
Vue.prototype.$cookies = VueCookies
Vue.prototype.$toasted = Toasted

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(objectMapper)
Vue.use(fileManager)
Vue.use(VueCookies)
Vue.use(axios)
Vue.use(CONSTANTS)
Vue.use(Api, {
	$axios: Vue.prototype.$axios,
})

Vue.filter('formatDate', formatDate)

//쿠키의 만료일은 7일 (글로벌 세팅)
Vue.$cookies.config('7d')

Vue.use(Toasted, {
	duration: 5000,
	theme: 'bubble',
	fitToScreen: false,
	position: 'top-center',
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
