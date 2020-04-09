/* eslint-disable camelcase, no-console */
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import * as firestore from 'firebase/firestore'
console.log(firestore)

const { firebaseConfig } = require('../security/GlobalConfiguration')
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
        console.log('skipping hot reloading common error...')
      }
      firestoreRef = firebase.firestore()
    }
  }
}

FirestoreRef.init()

export default { firestoreRef }
