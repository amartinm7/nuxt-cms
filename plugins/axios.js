export default function({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/contact')
    }
  })

  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Axios on request... Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    // eslint-disable-next-line no-console
    console.log('Axios on response... Making request to ' + response)
  })
}
