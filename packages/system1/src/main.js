import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mefa from '../../../src/mefa'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Mefa.onRouteUpdate((route) => {
  router.push({ path: route })
})