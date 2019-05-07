// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
var request = require('request');
var axios = require('axios');
const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp();

const url = 'https://www.alphavantage.co/query?function=SMA&symbol=MSFT&interval=daily&time_period=10&series_type=open&apikey=Z3O79INYJG77Y1SF';

// Functions for firestore.
exports.fetchNewSymbol = functions.https.onRequest((request, response) => {

  response.set('Access-Control-Allow-Origin', '*')
  response.set('Access-Control-Allow-Headers', '*')

  cors(request, response, () => {
    axios.get(url)
      .then(stockData => {
        // Insert Stock Data in firestore
          const nestedContent = stockData.data["Time Series (Daily)"];
          console.log(nestedContent);
          if (typeof nestedContent === "object") {
            Object.keys(nestedContent).forEach(docTitle => {
              admin.firestore()
                .collection('stock-test')
                .doc(docTitle)
                .set(nestedContent[docTitle])
                .then((res) => {
                  //console.log("Document successfully written!");
                })
                .catch((error) => {
                  console.error("Error writing document. Please check database configration");
                });
            });
          }
          response.send('Stock Updated!!');
      })
      .catch(e => {
        console.log( "error: ", e);
        response.send('error');
      })
  })
})

exports.fetchSymbolData = functions.https.onRequest((request, response) => {

  response.set('Access-Control-Allow-Origin', '*')
  response.set('Access-Control-Allow-Headers', '*')

  cors(request, response, () => {
    axios.get(url)
      .then(symbolData => {
        // Insert Stock Data in firestore
        const nestedContent = symbolData.data["Technical Analysis: SMA"];
        if (typeof nestedContent === "object") {
          Object.keys(nestedContent).forEach(docTitle => {
            admin.firestore()
              .collection('symbols')
              .doc('MSFT')
              .collection('SMA')
              .doc(docTitle)
              .set(nestedContent[docTitle])
              .then((res) => {
                console.log('SMA')
              })
          });
        }
        return axios.get('https://www.alphavantage.co/query?function=RSI&symbol=MSFT&interval=daily&time_period=10&series_type=open&apikey=Z3O79INYJG77Y1SF');
      })
      .then((symbolData) => {
        // Insert Stock Data in firestore
        const nestedContent = symbolData.data["Technical Analysis: RSI"];
        if (typeof nestedContent === "object") {
          Object.keys(nestedContent).forEach(docTitle => {
            admin.firestore()
              .collection('symbols')
              .doc('MSFT')
              .collection('RSI')
              .doc(docTitle)
              .set(nestedContent[docTitle])
              .then((res) => {
                console.log("RSI")
              })
          });
        }
        response.send('Stock Updated!!');
      })
      .catch(e => {
        console.log( "error: ", e);
        response.send('error');
      })
  })
})

exports.fetchData = functions.https.onRequest((req, res) => {
  res.send("Cron job executed... Data are fetched");
})
