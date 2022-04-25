import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'
import BootstrapVue from 'bootstrap-vue'
import IconsPlugin from 'bootstrap-vue'

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(AOS)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
