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
    },

    getChartData ({commit}, payload) {
      return new Promise((resolve, reject) => {
        Promise.all([getSymbolType('Time Series (Daily)'), getSymbolType('RSI'), getSymbolType('SMA')])
          .then(values => {
            let timeSeries = []
            let rsi = []
            let sma = []
            values[0].forEach(doc => {
              timeSeries.push({
                date: doc.id,
                value: doc.data()
              })
            })
            values[1].forEach(doc => {
              rsi.push({
                date: doc.id,
                value: doc.data()
              })
            })

            values[2].forEach(doc => {
              sma.push({
                date: doc.id,
                value: doc.data()
              })
            })
            resolve({'timeSeries': timeSeries, 'rsi': rsi, 'sma': sma})
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
}

async function getSymbolType (type) {
  return fireStore.collection('symbols')
    .doc('MSFT')
    .collection(type)
    .get()
}
