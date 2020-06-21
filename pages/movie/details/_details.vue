<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-movies-card-detail
        :movies="movies"
        @outbound-open-video-modal="playVideo"
      ></ech-movies-card-detail>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-people :credits="credits"></ech-slider-people>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-videos
        :videos="videos"
        :poster-path="movies[0]._poster_path"
        :posters="posters"
        @outbound-open-video-modal="playVideo"
      ></ech-slider-videos>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-slider-posters :posters="posters"></ech-slider-posters>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-disqus></ech-disqus>
    </section>
    <div>
      <vk-modal center :show.sync="showVideo">
        <vk-modal-close @click="closeVideo"></vk-modal-close>
        <iframe
          :src="url"
          width="1920"
          height="1080"
          frameborder="0"
          uk-responsive
          uk-video="automute: true"
        ></iframe>
      </vk-modal>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../../middleware/BeanContainerRegistry'
import { GetMovieDetailsControllerRequest } from '../../../middleware/modules/movies/getDetails/userapplication/controller/GetMovieDetailsController'
import VideoControllerManager from '../../../middleware/modules/vue/mixins/VideoControllerManager'
import DetailsHeaderManager from '../../../middleware/modules/vue/mixins/DetailsHeaderManager'
import EchSliderPeople from '../../../components/slider/EchSliderPeople'
import CreditsManager from '../../../middleware/modules/vue/mixins/CreditsManager'
import EchDisqus from '../../../components/disqus/EchDisqus'
import EchSliderPosters from '../../../components/slider/EchSliderPosters'
import EchSliderVideos from '../../../components/slider/EchSliderVideos'
import EchMoviesCardDetail from '../../../components/movies/EchMoviesCardDetails'
import MediaTypes from '../../../middleware/modules/domain/MediaTypes'
import StringHandler from '../../../middleware/framework/modules/string/StringHandler'
import MediaHandler from '../../../middleware/framework/modules/media/MediaHandler'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesDetails',
  scrollToTop: true,
  components: {
    EchMoviesCardDetail,
    EchSliderVideos,
    EchSliderPosters,
    EchDisqus,
    EchSliderPeople
  },
  mixins: [VideoControllerManager, CreditsManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store, context }) {
    const language = app.i18n.locale
    const movie_id = params.details.split('-')[0]
    const getMovieDetailsControllerResponse = await beanContainer.getMovieDetailsController.execute(
      new GetMovieDetailsControllerRequest({ movie_id, language })
    )
    if (getMovieDetailsControllerResponse._error) {
      console.log(app)
      console.log(route)
      console.log(params)
      console.log(context)
      app.router.push('/') // fallback volver a main page
      return
    }
    const movie = {
      ...getMovieDetailsControllerResponse
    }
    return {
      movies: [movie]
    }
  },
  data() {
    return {
      movies: [],
      movie_title: '',
      movie_id: 0,
      mediaType: MediaTypes.movie
    }
  },
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
</script>
<style></style>
