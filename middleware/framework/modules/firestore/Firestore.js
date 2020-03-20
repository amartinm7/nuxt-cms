import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore' // no borrar si no, no funciona

const firebaseConfig = require('../../../../firestoneEnv.json')
firebase.initializeApp(firebaseConfig)

const firestoreRef = firebase.firestore()

export { firestoreRef }
