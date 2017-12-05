import axios from 'axios'
import {API_BASE} from '../config'

import {
  ALL_EVENTS,
  ALL_EVENTS_SUCCESS,
  EVENT_BY_ID,
  EVENT_BY_ID_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS
} from './mutation-types'

export const eventActions = {
  allEvents ({commit}) {
    commit(ALL_EVENTS)
    // Fetch actual events from the API
    axios.get(`${API_BASE}/events`)
      .then(response => {
        commit(ALL_EVENTS_SUCCESS, response.data)
      })
  },
  eventById ({commit}, payload) {
    commit(EVENT_BY_ID)
    axios.get(`${API_BASE}/events/${payload}`).then(response => {
      commit(EVENT_BY_ID_SUCCESS, response.data)
    })
  },
  updateEvent ({commit}, payload) {
    commit(UPDATE_EVENT)
    axios.put(`${API_BASE}/events/${payload._id}`, payload).then(response => {
      commit(UPDATE_EVENT_SUCCESS, response.data)
    })
  }
}
