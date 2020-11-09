import Vue from 'vue'
import App from './App.vue'

import {store} from './store';

import 'modern-normalize'

Vue.config.productionTip = false

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {
//     paymentForm
//   },
// });

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
