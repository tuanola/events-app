import Vue from 'vue';
import Vuex from 'vuex';

import { eventMutations, filterMutations } from './mutations';
import { eventGetters } from './getters';
import { eventActions } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    eventsList: [],
    event: {},
    showLoader: false,
    filterConditions: {
      what: '',
      where: ''
    }
  },
  getters: Object.assign({}, eventGetters),
  mutations: Object.assign({}, filterMutations, eventMutations),
  actions: Object.assign({}, eventActions)
});
