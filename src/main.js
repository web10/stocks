// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { fireBase } from '../firebaseConfig'
import router from './router'
import store from './store'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VForm,
  VCard,
  VGrid,
  VTabs,
  VToolbar,
  VTextField,
  VTooltip,
  VCarousel,
  VDialog,
  transitions,
  VAlert,
  VDataTable,
  VStepper,
  VProgressCircular,
  VDivider
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import { ImageUploader } from 'vue-image-upload-resize'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VForm,
    VCard,
    VBtn,
    VIcon,
    VGrid,
    VTabs,
    VToolbar,
    VTextField,
    VTooltip,
    VCarousel,
    VDialog,
    transitions,
    VAlert,
    VDataTable,
    VStepper,
    VProgressCircular,
    VDivider,
    ImageUploader
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>',
  created () {
    this.$store.dispatch('setLoadin', true)
    fireBase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('setUser', user).then(done => {
          this.$router.replace('/intro')
          this.$store.dispatch('setLoadin', false)
        })
      } else {
        this.$store.dispatch('setLoadin', false)
        this.$router.replace('/')
      }
    })
  },
  data () {
    return {
      dialog: false
    }
  }
})
