import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

import paymentForm from './modules/payment_form';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    paymentForm,
  },
});