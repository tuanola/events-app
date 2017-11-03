import EventsList from '../components/EventsList.vue'
import Event from '../components/Event.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'

export const routes = [
  { path: '', component: EventsList },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/event/:id', component: Event }
]
