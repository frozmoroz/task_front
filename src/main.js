import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Axios.defaults.baseURL = (process.env.API_PATH !== 'production') ? 'http://localhost:8000/api' : ''

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
