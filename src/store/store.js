import Vue from 'vue'
import Vuex from 'vuex'

import { filterMutations } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filterConditions: {
      what: '',
      where: ''
    }
  },
  getters: {
    storedFilterKey: state => state.what
  },
  mutations: Object.assign({}, filterMutations)
})
