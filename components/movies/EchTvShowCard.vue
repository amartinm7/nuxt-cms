<template>
  <div>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
      >
        <div class="uk-width-expand">
          <a
            class="uk-button uk-button-default uk-align-center"
            @click="initVideoURL(movie)"
          >
            <img
              class="ech-default-img"
              :src="getPosterURL(movie._poster_path, index)"
              :alt="movie._name"
            />
          </a>
        </div>
      </div>
      <div>
        <span
          class="uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
        >
          {{ movie._vote_average.toFixed(1) }}
        </span>
        <div class="uk-card-body">
          <h3 class="uk-card-title ech-basic uk-text-center">
            <nuxt-link
              class="uk-link-reset"
              :to="getDetailPathURL(movie._id, movie._name, mediaTypePath)"
              >{{ movie._name }}
            </nuxt-link>
            <span
              :id="movie._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(movie._id)"
              >{{ movie._id }}</span
            >
          </h3>
          <p>
            <ech-star-rating :rating-value="movie._vote_average / 2">
            </ech-star-rating>
          </p>
          <p class="uk-dropcap uk-text-justify">{{ movie._overview }}</p>
          <div class="uk-child-width-expand@s" uk-grid>
            <div>
              <p>
                {{ $t('firstAirDate') }}
                <span
                  class="uk-label uk-margin-small-left ech-basic ech-spin-icon"
                >
                  {{ movie._first_air_date | moment('DD-MM-YYYY') }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import { GetTvShowsVideosControllerRequest } from '../../middleware/modules/tvShows/getVideos/userapplication/controller/GetTvShowsVideosController'
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '../../middleware/modules/domain/MediaTypes'
import MediaTypesPaths from '../../middleware/modules/domain/MediaTypePaths'
import LocateManager from '../../middleware/modules/vue/mixins/LocateManager'
import Utils from '../../middleware/modules/vue/mixins/Utils'
import EchStarRating from './EchStarRating'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowCard',
  components: { EchStarRating },
  mixins: [MediaManager, LocateManager, Utils],
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
      mediaTypePath: MediaTypesPaths.tv,
      mediaType: MediaTypes.tv
    }
  },
  methods: {
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
