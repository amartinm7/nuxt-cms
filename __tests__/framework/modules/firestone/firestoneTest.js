// eslint-disable-next-line import/default
import * as firestoreRef from '../../../../middleware/framework/modules/firestore/Firestore'

describe('firestore', () => {
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

    const newUserRef = await firestoreRef.firestoreRef.collection('users').add(postData)
    const newUser = await newUserRef.get()
    console.log(newUser.data())
    expect(postData).toEqual(newUser.data())
  })
})
