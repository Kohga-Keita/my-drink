import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueParticles from 'vue-particles'

Vue.use(vueSmoothScroll);
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
