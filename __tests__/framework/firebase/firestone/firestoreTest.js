import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'

let firestoreRef = {}

describe('firestore', () => {
  beforeEach(() => {
    const firebaseConfig = require('../../../../firestoneEnv.json')
    firebase.initializeApp(firebaseConfig)

    firestoreRef = firebase.firestore()
  })

  it('should add data to a collection', async () => {
    const postData = {
      name: {
        surname: 'Uno',
        lastName1: 'App1',
        lastName2: 'App2'
      },
      avatar:
        'https://i.pinimg.com/originals/bb/7e/69/bb7e69e69a5371fb161f1152d202c64b.jpg',
      favourites: {
        movies: [1, 2, 3],
        tvShows: [1, 3.4]
      }
    }

    const ref = await firestoreRef
      .collection('users')
      .doc('yDkByG4deS4Jcro4I2dk')
      .set({
        email: 'me@megmail.com'
      })

    const fightRef = await firestoreRef.collection('users').add(postData)
    const fight = await fightRef.get()
    console.log(fight)
  })
})
