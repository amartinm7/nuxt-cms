import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import firestore from 'firebase/firestore' // no borrar, si no, no funciona
console.log(firestore)

const { firebaseConfig } = require('../security/GlobalConfiguration')
firebase.initializeApp(firebaseConfig)

const firestoreRef = firebase.firestore()

export { firestoreRef }
