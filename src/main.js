import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
