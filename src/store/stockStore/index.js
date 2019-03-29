import firebase from 'firebase'
import 'firebase/firestore'

export default {
  state: {},
  mutations: {},
  actions: {

    /* Fetch all stock */
    getAllStock ({commit}, payload) {
      return new Promise((resolve, reject) => {
        const firestore = firebase.firestore()
        firestore.settings({timestampsInSnapshots: true})
        firestore.collection('stocks').get().then(snap => {
          let stockList = []
          snap.forEach(doc => {
            stockList.push(doc.data())
          })
          resolve(stockList)
        })
      })
    }
  }
}
