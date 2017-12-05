<template>
  <div class="row event-header">
    <div class="col-md-6"><img :src="getImage(event.picture.main.url)" width="337" height="210" class="event-header-image"></div>
    <div class="col-md-6 event-title">
      <div class="float-right edit-icon"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true" @click="showModal = true"></i></div>
      <modal v-if="showModal" @modalClose="showModal = false" @modalOk="handleOk" class="edit-modal">
        <h5 slot="header">Edit Event</h5>
        <edit slot="body" ref="editEvent" @modalClose="showModal = false"></edit>
      </modal>
      <h1>
        {{ event.name }}
      </h1>
      <div class="row">
        <div class="col-md-6">
          <div>{{ parseDate(event.date.start) }} - {{ parseDate(event.date.end) }}</div>
          <div class="header-datefromnow">{{ parseDateFromNow(event.date.start, event.date.end) }}</div>
        </div>
        <div class="col-md-6">
          <span v-if="event.place.space">{{ event.place.space }}, </span>
          <span>{{ event.place.city }}, </span>
          <span>{{ event.place.country }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .event-header {
    font-size: 1rem;
  }
  .event-header-image {
    max-height: 380px;
    object-fit: cover;
  }
  .event-title {
    padding-top: 60px;
    padding-bottom: 20px;
  }
  .header-datefromnow {
    font-size: 0.9rem;
  }
  .edit-icon {
    position: relative;
    top: -20px;
    opacity: 0.5;
  }
  .edit-icon:hover {
    opacity: 1;
  }
  .edit-modal {
    position: absolute;
  }
</style>

<script>
  import dateMethods from '../mixins/dateMethods'
  import Edit from './EditEvent.vue'
  import Modal from './Modal.vue'

  export default {
    mixins: [dateMethods],
    components: {
      Modal,
      Edit
    },

    data () {
      return {
        showModal: false
      }
    },

    computed: {
      event () {
        return this.$store.getters.eventById(this.$route.params['id'])
      }
    },

    methods: {
      getImage (fileName) {
        if (fileName) {
          console.log('fileName', fileName)
          import(`../uploads/images/events/${fileName}`)
          return `../dist/${fileName}`
        }
      },
      handleOk () {
        this.$refs.editEvent.handleOk()
      }
    }
  }
</script>
