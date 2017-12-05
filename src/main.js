import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/router.js'
import { store } from './store/store.js'

import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'
import './css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
