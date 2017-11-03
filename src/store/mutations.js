import {
  SET_FILTER_CONDITIONS,
  REMOVE_CONDITION
} from './mutation-types'

export const filterMutations = {
  [SET_FILTER_CONDITIONS] (state, payload) {
    state.filterConditions = payload
  },
  [REMOVE_CONDITION] (state, payload) {
    state.filterConditions[payload] = ''
  }
}
