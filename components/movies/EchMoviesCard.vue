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
            :to="getMovieDetailURL(movie._id, movie._title)"
          >
            <h3 class="uk-card-title ech-basic">
              {{ movie._title }}&nbsp;<span class="uk-label">
                {{ movie._id }}</span
              >
            </h3>
          </nuxt-link>
          <span uk-icon="quote-left"></span>
          <p class="uk-dropcap">
            {{ movie._overview }}
          </p>
        </div>
        <div class="uk-flex uk-flex-right uk-width-auto">
          <div
            v-for="genre in movie._genres"
            :key="genre.id"
            :todo="genre"
            class="uk-padding-small"
          >
            <span class="uk-label-warning ech-basic">
              &nbsp;{{ genre.name }}&nbsp;
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import { GetMovieVideosControllerRequest } from '../../middleware/modules/movies/getVideos/userapplication/controller/GetMovieVideosController'
import * as ServiceLocator from '../../middleware/framework/modules/ServiceLocator'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCard',
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getMovieDetailURL(movie_id, movie_title) {
      const language = this.$i18n.locale
      const slugger = ServiceLocator.Slugger.sluggify([movie_title])
      return `/${language}/movies/details/${movie_id}-${slugger}`
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
      const isoLangCode = this.currentLocale().iso
      const getMovieVideosControllerResponse = await beanContainer.getMovieVideosController.getFirstVideoURL(
        new GetMovieVideosControllerRequest({
          movie_title: movie._title,
          movie_id: movie._id,
          isoLangCode
        })
      )
      console.log('emit...' + getMovieVideosControllerResponse.url)
      this.$emit(
        'outbound-open-video-modal',
        getMovieVideosControllerResponse.url
      )
    }
  }
}
</script>
<style></style>
