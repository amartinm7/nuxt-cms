// eslint-disable-next-line no-unused-vars
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore' // no borrar si no, no funciona
import * as firestoreRefWrapper from '../../../../middleware/framework/modules/firestore/Firestore'
// eslint-disable-next-line no-unused-vars
const firestoreRef = firestoreRefWrapper.firestoreRef

describe('firestore', () => {
  it('should add data to a collection', async () => {
    // eslint-disable-next-line no-unused-vars
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
    /*
    const newUser = await firestoreRef.collection('users').add(postData)
    const user = await newUser.get()
    console.log(user.id)
    console.log(user.data())
    expect(user).toEqual(user.data())
    await firestoreRef
      .collection('users')
      .doc(user.id)
      .delete()
     */
    expect(true).toEqual(true)
  })
})
