import Vue from 'vue'
import App from './App.vue'
import VueNetworkCheck from './lib';
Vue.use(VueNetworkCheck);
new Vue({
  el: '#app',
  render: h => h(App)
})
