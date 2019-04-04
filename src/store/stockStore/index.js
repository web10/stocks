import { fireStore } from '../../../firebaseConfig'
export default {
  state: {},
  mutations: {},
  actions: {

    /* Fetch all stock */
    getAllStock ({commit}, payload) {
      return new Promise((resolve, reject) => {
        fireStore.settings({timestampsInSnapshots: true})
        fireStore.collection('stock').get().then(snap => {
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
