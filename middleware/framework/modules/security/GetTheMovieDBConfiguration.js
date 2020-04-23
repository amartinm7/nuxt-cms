/* eslint-disable camelcase, no-console */

// eslint-disable-next-line no-unused-vars
function decodeToBase64(base64String) {
  return Buffer.from(base64String, 'base64').toString('ascii')
}
// eslint-disable-next-line no-unused-vars
function encodeToBase64(data) {
  return Buffer.from(data).toString('base64')
}

function getTheMovieDBConfigEnv() {
  const theMovieDBConfigEnv = process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG
  if (theMovieDBConfigEnv === undefined || theMovieDBConfigEnv == null) {
    console.error(
      '(Estrenos cine hoy) theMovieDBConfigEnv... empty!!. Setup environment vars ESTRENOSCINEHOY_THEMOVIEDB_CONFIG...'
    )
  }
  return theMovieDBConfigEnv
}

const theMovieDBConfigEnv = getTheMovieDBConfigEnv()

export { theMovieDBConfigEnv }
