import MediaHandler from '../../../framework/modules/media/MediaHandler'
import StringHandler from '../../../framework/modules/string/StringHandler'

export default {
  head() {
    const vm = this
    const title = vm.movies[0]._title || vm.movies[0]._name
    const keyword =
      'Estrenos cine hoy, peliculas, series, actores, actrices, TV Shows, movies, actor, actress, movies rating, news, tv networks'
    return {
      title: `${StringHandler.truncate(title, 65)}`,
      description: keyword,
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'title',
          name: 'title',
          content: title
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyword
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 155)}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 65)}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'twitter:title',
          property: 'og:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'twitter:description',
          name: 'og:description',
          content: `${StringHandler.truncate(vm.movies[0]._overview, 65)}`
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `www.estrenoscinehoy.com/${vm.$route.path}`
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: MediaHandler.getPosterURL(vm.movies[0]._poster_path)
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.estrenoscinehoy.com/${vm.$route.path}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: `${vm.$i18n.locale}`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        }
      ]
    }
  }
}
/**
<!-- Primary Meta Tags -->
<title>estrenoscinehoy</title>
<meta name="title" content="estrenoscinehoy">
  <meta name="description" content="dfdsfdfdsfdsfdsffddfdsf dsf

sdfadsfdf
sdfdsfdsf">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
  <meta property="og:url" content="https://www.estrenoscinehoy.com/es/movie/details/475430-artemis-fowl">
  <meta property="og:title" content="estrenoscinehoy">
  <meta property="og:description" content="dfdsfdfdsfdsfdsffddfdsf dsf

sdfadsfdf
sdfdsfdsf">
<meta property="og:image" content="">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://www.estrenoscinehoy.com/es/movie/details/475430-artemis-fowl">
  <meta property="twitter:title" content="estrenoscinehoy">
  <meta property="twitter:description" content="dfdsfdfdsfdsfdsffddfdsf dsf

sdfadsfdf
sdfdsfdsf">
<meta property="twitter:image" content="">
**/
