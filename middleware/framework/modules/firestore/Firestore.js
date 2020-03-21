import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import * as firestore from 'firebase/firestore'
console.log(firestore)

const { firebaseConfig } = require('../security/GlobalConfiguration')

// eslint-disable-next-line import/no-mutable-exports
let firestoreRef = null

class FirestoreRef {
  constructor() {
    console.log('init firestore...')
  }

  static init() {
    if (firestoreRef == null) {
      firebase.initializeApp(firebaseConfig)
      firestoreRef = firebase.firestore()
    }
  }
}

FirestoreRef.init()

export { firestoreRef }
