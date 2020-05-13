<template>
  <div>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div class="uk-position-relative uk-visible-toggle uk-light">
        <span class="uk-card-badge uk-label-success ech-basic">
          &nbsp;{{ movie._vote_average.toFixed(1) }}&nbsp;
        </span>
        <a
          class="uk-button uk-button-default uk-align-center"
          @click="initVideoURL(movie)"
        >
          <img
            :src="getPosterURL(movie._poster_path, index)"
            alt="poster-cover"
          />
        </a>
      </div>
      <div>
        <div class="uk-card-body">
          <nuxt-link
            class="uk-link-reset"
            :to="getTvShowDetailURL(movie._id, movie._name)"
          >
            <h3 class="uk-card-title">
              {{ movie._name }}&nbsp;<span class="uk-label">{{
                movie._id
              }}</span>
            </h3>
          </nuxt-link>
          <p class="uk-dropcap">{{ movie._overview }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import { GetTvShowsVideosControllerRequest } from '../../middleware/modules/tvShows/getVideos/userapplication/controller/GetTvShowsVideosController'
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowCard',
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getTvShowDetailURL(movie_id, movie_name) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_name])
      return `/${language}/tvshows/details/${movie_id}-${slugger}`
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    async initVideoURL(movie) {
      const vm = this
      console.log('initVideoURL...' + vm.$uikit.modal(`#openVideo${movie._id}`))
      const isoLangCode = this.currentLocale().iso
      const getTvShowsVideosControllerResponse = await beanContainer.getTvShowsVideosController.getFirstVideoURL(
        new GetTvShowsVideosControllerRequest({
          movie_name: movie._name,
          movie_id: movie._id,
          isoLangCode
        })
      )
      this.$emit(
        'outbound-open-video-modal',
        getTvShowsVideosControllerResponse.url
      )
    }
  }
}
</script>
<style></style>
