import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/css/app.min.css"

import objectMapper from "@/utils/mapper"
import fileManager from "@/utils/file-manager"



Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(objectMapper)
Vue.use(fileManager)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
