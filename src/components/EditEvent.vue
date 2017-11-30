<template>
  <div class="edit-event-form">
  <div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" v-model="event.name">
    </div>
  </div>
    <div class="form-group">
    <label for="people">Participants:</label>
    <div>
      <input-tag :tags="event.people" id="people"></input-tag>
    </div>
  </div>
    <div class="form-group row">
      <label for="dates" class="col-sm-2 col-form-label">Dates:</label>
      <div class="col-sm-10">
        <vue-daterange-picker
                double
                :selected-start-date="dateForPicker(event.date.start)"
                :selected-end-date="dateForPicker(event.date.end)"
                :start-date="today"
                end-date="null"
                :place-holder-start="dateForPicker(event.date.start)"
                :place-holder-end="dateForPicker(event.date.end)"
                @get-dates="getDates"
                id="dates"
        />
      </div>
    </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <div>
      <vue-editor v-model="event.description.text" :editorToolbar="customToolbar" id="description"></vue-editor>
    </div>
  </div>
  </div>
</template>

<style>
  #description {
    height: 220px;
  }
  .edit-event-form .vue-input-tag-wrapper .input-tag,
   .edit-event-form .vue-input-tag-wrapper .input-tag .remove {
    color: #666;
    background-color: #e3e3e3;
    border: 0;
  }
</style>

<script>
import { VueEditor } from 'vue2-editor'
import moment from 'moment'
import VueDaterangePicker from './daterangepicker/vue-daterange-picker.vue'
import InputTag from 'vue-input-tag'

export default {
  data () {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['image', 'code-block']
      ]
    }
  },

  components: {
    InputTag,
    VueDaterangePicker,
    VueEditor
  },

  created () {
    if (this.event === {} || !this.event.name) {
      this.$store.dispatch('eventById', this.$route.params['id'])
    }
  },
  computed: {
    event () {
      return this.$store.getters.eventById(this.$route.params['id'])
    },
    today () {
      return moment().format('MM/DD/YYYY')
    }
  },
  methods: {
    dateForPicker (date) {
      return moment(date).format('MM/DD/YYYY')
    },
    getDates () {
      console.log('dates')
    }
  }
}
</script>
