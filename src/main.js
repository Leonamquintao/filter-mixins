import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.filter('toLowercase', (value) => {
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
