/* eslint-disable no-console */
export default function({ $http }) {
  $http.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $http.onResponse((config) => {
    console.log('Making request to ' + config.url)
    this.$http.setHeader('Content-Type', 'text/html')
  })

  $http.onRetry((request, options, errors, retryCount) => {
    console.log('Making request to onRetry')
  })

  $http.onError((error) => {
    if (error.response.status === 500) {
      console.log(error)
    }
  })
}
