import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import elementUI from './plugins/element-ui'

Vue.config.productionTip = true

Vue.use(elementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
