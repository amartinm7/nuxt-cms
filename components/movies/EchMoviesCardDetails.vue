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
              :alt="movie._title"
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
            {{ movie._title }} ({{ movie._release_date | moment('YYYY') }})
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
          <div class="uk-flex uk-flex-center">
            <p v-if="movie._tagline" class="uk-text-italic uk-text-center">
              "{{ movie._tagline }}"
            </p>
            <p class="uk-text-italic uk-align-center">
              <span
                class="uk-label uk-label-success uk-margin-small-left ech-basic"
                uk-icon="icon: calendar; ratio: 0.75;"
              >
                {{ movie._release_date | moment('DD-MMMM-YYYY') }}
              </span>
              <span
                class="uk-label uk-label-success uk-margin-small-left ech-basic"
                uk-icon="icon: clock; ratio: 0.75;"
              >
                {{ movie._runtimeByHours }}
              </span>
              <span
                class="uk-label uk-label-success uk-margin-small-left ech-basic"
                uk-icon="icon: location; ratio: 0.75;"
              >
                {{ movie._production_countries[0]._iso_3166_1 }}
              </span>
            </p>
          </div>
          <p class="uk-dropcap uk-text-justify">
            {{ movie._overview }}
          </p>
          <div class="uk-flex uk-flex-center">
            <p>
              <span
                v-for="genre in movie._genres"
                :key="genre._id"
                :todo="genre"
                class="uk-label uk-label-warning uk-margin-small-left ech-basic"
              >
                {{ genre.name }}
              </span>
            </p>
          </div>
          <div>
            <p
              v-if="movie._budget && movie._budget !== '0'"
              class="uk-text-meta"
            >
              {{ $t('budget') }}
              <span class="uk-text-lead uk-text-small">
                ${{ movie._budget | abbreviate }}
              </span>
            </p>
            <p
              v-if="movie._revenue && movie._revenue !== 0"
              class="uk-text-meta"
            >
              {{ $t('revenue') }}
              <span class="uk-text-lead uk-text-small">
                ${{ movie._revenue | abbreviate }}
              </span>
            </p>
          </div>
          <div>
            <p v-if="movie._director" class="uk-text-meta">
              {{ $t('director') }}:
              <span class="uk-text-lead uk-text-small">{{
                movie._director
              }}</span>
            </p>
            <p v-if="movie._screenplay" class="uk-text-meta">
              {{ $t('screenplay') }}:
              <span class="uk-text-lead uk-text-small">{{
                movie._screenplay
              }}</span>
            </p>
            <p v-if="movie._homepage" class="uk-text-meta">
              Homepage:
              <a
                :href="movie._homepage"
                :alt="movie._name"
                class="uk-text-lead uk-text-small"
              >
                {{ movie._homepage }}
              </a>
            </p>
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
import MediaTypePaths from '../../middleware/modules/domain/MediaTypePaths'
import MediaTypes from '../../middleware/modules/domain/MediaTypes'
import LocateManager from '../../middleware/modules/vue/mixins/LocateManager'
import Utils from '../../middleware/modules/vue/mixins/Utils'
import EchStarRating from './EchStarRating'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCardDetail',
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
<style>
/* TODO fallback image */
img:before {
  content: '';
  display: block;
  background: #dedede;
  top: 0;
  bottom: 0;
  min-height: 278px;
  min-width: 185px;
}

/*img {*/
/*  position: relative;*/
/*}*/
/*img:before {*/
/*  content: "";*/
/*  display: block;*/
/*  position: absolute;*/
/*  background: #dedede;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  min-height: 300px;*/
/*  min-width: 300px;*/
/*}*/
</style>
