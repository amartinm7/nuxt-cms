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
            :to="getDetailPathURL(movie._id, movie._title, mediaTypePath)"
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
          <p>
            {{ $t('releaseDate') }}
            <span class="uk-label uk-margin-small-left">
              {{ movie._release_date | moment('DD-MM-YYYY') }}
            </span>
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
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import MediaTypePaths from '../../middleware/modules/util/MediaTypePaths'
import MediaTypes from '../../middleware/modules/util/MediaTypes'
import LocateManager from '../../middleware/modules/vue/mixins/LocateManager'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCard',
  mixins: [MediaManager, LocateManager],
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      mediaTypePath: MediaTypePaths.movies,
      mediaType: MediaTypes.movies
    }
  },
  methods: {
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
