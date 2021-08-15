export const eventGetters = {
  allEvents: (state, getters) => {
    return state.eventsList;
  },
  eventById: (state, getters) => (id) => {
    if (getters.allEvents.length > 0) {
      return getters.allEvents.filter(e => e._id === id)[0];
    } else {
      return state.event;
    }
  }
};
