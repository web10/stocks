var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-firebase-tutorial-f2e9c.firebaseio.com"
});

// Get data from JSON formate
const stockData = require("./seed.json");

// Inseert Stock Data in firestore
stockData && Object.keys(stockData).forEach(key => {
  const nestedContent = stockData[key];
  if (typeof nestedContent === "object") {
    Object.keys(nestedContent).forEach(docTitle => {
      admin.firestore()
        .collection(key)
        .doc(docTitle)
        .set(nestedContent[docTitle])
        .then((res) => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document. Please check database configration");
        });
    });
  }
});

