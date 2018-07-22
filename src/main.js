// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
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
  VToolbar,
  VTextField,
  VTooltip,
  VCarousel,
  VDialog,
  transitions,
  VAlert
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

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
    VToolbar,
    VTextField,
    VTooltip,
    VCarousel,
    VDialog,
    transitions,
    VAlert
  }
})

Vue.config.productionTip = false
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
 created () {
   let config = {
    apiKey: "AIzaSyBqUfXzta0ZsTcwHUtZsX6azFScIdf2UUU",
    authDomain: "react-event.firebaseapp.com",
    databaseURL: "https://react-event.firebaseio.com",
    projectId: "react-event",
    storageBucket: "react-event.appspot.com",
    messagingSenderId: "610338161838"
   }
   firebase.initializeApp(config);
   firebase.auth().onAuthStateChanged(user=>{
     if(user){
      this.$store.dispatch('setUser',user);
      this.$router.replace('/intro')
     }else{
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
