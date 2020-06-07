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
        <div class="uk-width-1-6">
          <div>
            <span
              class="uk-label-success ech-basic ech-spin-icon uk-border-circle uk-margin-large uk-padding-small uk-text-center"
            >
              {{ movie._vote_average.toFixed(1) }}
            </span>
          </div>
          <div class="uk-margin-top">&nbsp;</div>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title ech-basic">
            {{ movie._title }} ({{ movie._release_date | moment('YYYY') }})
            <span
              :id="movie._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(movie._id)"
              >{{ movie._id }}</span
            >
          </h3>
          <p class="uk-dropcap">
            {{ movie._overview }}
          </p>
          <div>
            <p>
              {{ movie._release_date | moment('DD-MMMM-YYYY') }} -
              {{ movie._runtimeByHours }} -
              <slot v-for="genre in movie._genres" :todo="genre">
                {{ genre.name }}&nbsp;
              </slot>
            </p>
          </div>
          <div>
            <p>_budget ${{ movie._budget | abbreviate }}&nbsp;</p>
            <p>_revenue ${{ movie._revenue | abbreviate }}&nbsp;</p>
          </div>
          <div>
            <p>
              _production_countries
              {{ movie._production_countries[0]._iso_3166_1 }}
            </p>
          </div>
          <div>
            <p>
              _homepage
              {{ movie._homepage }}
            </p>
          </div>
          <div>
            <p>
              tagline
              {{ movie._tagline }}
            </p>
          </div>
          <div>
            <p>
              director
              {{ movie._director }}
            </p>
          </div>
          <div>
            <p>
              _screenplay
              {{ movie._screenplay }}
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

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCardDetail',
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
