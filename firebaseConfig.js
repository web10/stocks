import firebase from 'firebase'

/* config for Vue template - realtime database */
let config = {
  apiKey: 'AIzaSyA6q3Cx9io25_OSYKgOZtAs1YrvugRG2bA',
  authDomain: 'vuetify-template-c69fb.firebaseapp.com',
  databaseURL: 'https://vuetify-template-c69fb.firebaseio.com',
  projectId: 'vuetify-template-c69fb',
  storageBucket: 'vuetify-template-c69fb.appspot.com',
  messagingSenderId: '361467220892'
}
/* config for stocks app
 let config = {
 apiKey: 'AIzaSyCfkyhlgX60zul12wjxIDT2B-hD8-blqe0',
 authDomain: 'stocks-e9e75.firebaseapp.com',
 databaseURL: 'https://stocks-e9e75.firebaseio.com',
 projectId: 'stocks-e9e75',
 storageBucket: 'stocks-e9e75.appspot.com',
 messagingSenderId: '597438893177'
 } */

export const fireBase = firebase.initializeApp(config)
export const fireStore = firebase.firestore()
export const databaseURL = 'https://vue-firebase-tutorial-f2e9c.firebaseio.com'
