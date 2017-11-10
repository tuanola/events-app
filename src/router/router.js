import EventsList from '../components/EventsList.vue'
import Event from '../components/Event.vue'
import MainHead from '../components/MainHead.vue'
import EventHead from '../components/EventHead.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'

export const routes = [
  {
    path: '',
    components: {
      default: EventsList,
      top: MainHead
    }
  },
  {
    path: '/about',
    components: {
      default: About,
      top: MainHead
    }
  },
  {
    path: '/contacts',
    components: {
      default: Contacts,
      top: MainHead
    }
  },
  {
    path: '/event/:id',
    components: {
      default: Event,
      top: EventHead
    }
  }
]
