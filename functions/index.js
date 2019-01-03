const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.createDcument = functions.firestore
  .document('apiresfull/{Id}')
  .onCreate((snap, context) => {
    console.log(snap);
    console.log(context);
  });

exports.updateDocument = functions.firestore
  .document('apiresfull/{Id}')
  .onUpdate((change, context) => {
    console.log(change)
    console.log(context)
  });

exports.deleteDocument = functions.firestore
  .document('apiresfull/{Id}')
  .onDelete((change, context) => {
    console.log(change)
    console.log(context)
    return res.send(context.params)
  });

// Realtime Database
exports.updatedProduct = functions.database.ref('/products/{id}/{data}')
  .onUpdate ((snapshot, context) => {
    console.log('snapshot --->', snapshot)
    console.log('context ---->', context)
    return context
  });

exports.createProduct = functions.database.ref('/products/{id}/{data}')
  .onCreate((snapshot, context) => {
    const original = snapshot.val()
    console.log('valores', original)
    console.log('paramas', context.params)
    return context.params
  })