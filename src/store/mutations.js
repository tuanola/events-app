import {
  ALL_EVENTS,
  ALL_EVENTS_SUCCESS,
  EVENT_BY_ID,
  EVENT_BY_ID_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS,
  SET_FILTER_CONDITIONS,
  REMOVE_CONDITION
} from './mutation-types'

export const eventMutations = {
  [ALL_EVENTS] (state) {
    state.showLoader = true
  },
  [ALL_EVENTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.eventsList = payload
  },
  [EVENT_BY_ID] (state) {
    state.showLoader = true
  },
  [EVENT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.event = payload
  },
  [UPDATE_EVENT]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_EVENT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.event = payload
  }
}

export const filterMutations = {
  [SET_FILTER_CONDITIONS] (state, payload) {
    state.filterConditions = payload
  },
  [REMOVE_CONDITION] (state, payload) {
    state.filterConditions[payload] = ''
  }
}
