import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Toasted from 'vue-toasted';
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const options = {
  theme: "toasted-primary",
  type:"error",
  position: "top-right",
  duration: 5000
}
Vue.config.productionTip = false
Vue.use(Toasted, options)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
