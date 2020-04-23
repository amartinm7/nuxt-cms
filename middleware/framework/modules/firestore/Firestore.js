/* eslint-disable camelcase, no-console */
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import * as firestore from 'firebase/firestore'
console.log(firestore)

const { firebaseConfig } = require('../security/GetFireBaseConfiguration')
let firestoreRef = null

class FirestoreRef {
  constructor() {
    console.log('init firestore...')
  }

  static init() {
    if (firestoreRef == null) {
      try {
        firebase.initializeApp(firebaseConfig)
      } catch (e) {
        console.log(
          'Ech-firestore: skipping hot reloading common error. Everything works well up to now.'
        )
      }
      firestoreRef = firebase.firestore()
    }
  }
}

FirestoreRef.init()

export default { firestoreRef }
