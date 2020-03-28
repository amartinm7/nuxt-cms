const firebaseConfig = getFirebaseConfigEnv()
const theMovieDBConfigEnv = getTheMovieDBConfigEnv()

export { firebaseConfig, theMovieDBConfigEnv }

function decodeToBase64(base64String) {
  return Buffer.from(base64String, 'base64').toString('ascii')
}
// eslint-disable-next-line no-unused-vars
function encodeToBase64(data) {
  return Buffer.from(data).toString('base64')
}

function getFirebaseConfigEnv() {
  const firebaseConfigEnv = process.env.ESTRENOSCINEHOY_FIRESTORE_CONFIG
  if (firebaseConfigEnv === undefined || firebaseConfigEnv == null) {
    console.error(
      '(Estrenos cine hoy) FirebaseConfigEnv... empty!!. Setup environment vars...'
    )
  }
  const firebaseConfigString = decodeToBase64(firebaseConfigEnv)
  const firebaseConfig = JSON.parse(firebaseConfigString)
  return firebaseConfig
}

function getTheMovieDBConfigEnv() {
  const theMovieDBConfigEnv = process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG
  if (theMovieDBConfigEnv === undefined || theMovieDBConfigEnv == null) {
    console.error(
      '(Estrenos cine hoy) theMovieDBConfigEnv... empty!!. Setup environment vars...'
    )
  }
  return theMovieDBConfigEnv
}
