// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
var request = require('request');
var axios = require('axios');
const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp();

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo';

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

exports.fetchData = functions.https.onRequest((req, res) => {
  res.send("Cron job executed... Data are fetched");
})
