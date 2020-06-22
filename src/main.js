import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

import '@/icons' // icon

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
