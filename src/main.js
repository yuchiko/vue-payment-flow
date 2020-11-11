import Vue from 'vue'
import App from './App.vue'
import VueCurrencyInput from 'vue-currency-input'
import "vue-slider-component/theme/antd.css";

import {store} from './store';

import 'modern-normalize'

const pluginOptions = {
  /* see config reference */
  globalOptions: { 
    currency: null,
    locale: 'de',
    distractionFree: false,
    valueAsInteger: true,
    autoDecimalMode: true
  }
}
Vue.use(VueCurrencyInput, pluginOptions)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
