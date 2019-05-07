import firebase from 'firebase'

/* config for Vue template - realtime database */
let config = {
  apiKey: "AIzaSyCxZojw9EvyHdQvusieLHg-NvsPRIv2GvQ",
  authDomain: "vue-firebase-tutorial-f2e9c.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-f2e9c.firebaseio.com",
  projectId: "vue-firebase-tutorial-f2e9c",
  storageBucket: "vue-firebase-tutorial-f2e9c.appspot.com",
  messagingSenderId: "259411002381"
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
