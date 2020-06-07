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
        <div class="uk-width-1-6">
          <div>
            <span
              class="uk-label-success ech-basic uk-border-circle uk-margin-large uk-padding-small uk-text-center"
            >
              {{ movie._vote_average.toFixed(1) }}
            </span>
          </div>
          <div class="uk-margin-top">&nbsp;</div>
          <div class="uk-margin-small-top">
            <!--            <span-->
            <!--              class="uk-label-success ech-basic uk-text-center uk-align-center uk-border-rounded uk-margin-top"-->
            <!--            >-->
            <!--              PEG12-->
            <!--            </span>-->
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title ech-basic">
            <nuxt-link
              class="uk-link-reset"
              :to="getDetailPathURL(movie._id, movie._title, mediaTypePath)"
            >
              {{ movie._title }} ({{ movie._release_date | moment('YYYY') }})
            </nuxt-link>
            <span class="uk-label">{{ movie._id }}</span>
          </h3>
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
