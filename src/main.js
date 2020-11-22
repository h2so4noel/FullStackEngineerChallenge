import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = `http://localhost:8080/` // TODO: url/ports should be dynamic, or use .env

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
