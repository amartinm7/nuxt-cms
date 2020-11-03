<template>
  <div>
    <div
      class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
    >
      <div class="uk-width-expand">
        {{ index }}
        <a
          class="uk-button uk-button-default uk-align-center"
          @click="initVideoURL(movie)"
          ><div class="uk-inline">
            <img
              class="ech-default-img"
              :src="imageUrl"
              :title="movie._title"
              loading="lazy"
              :alt="movie._title"
            />
            <div class="uk-position-center ech-basic" uk-tooltip="play">
              <span
                class="uk-icon ech-spin-icon"
                uk-icon="icon: play-circle; ratio: 3"
              ></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import { GetMovieVideosControllerRequest } from '@/middleware/modules/movies/getVideos/userapplication/controller/GetMovieVideosController'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCardPicture',
  mixins: [MediaManager, LocateManager],
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    },
    imageUrl: {
      type: String,
      default() {
        return 'https://www.estrenoscinehoy.com/_nuxt/img/isolated-monochrome-black.9dc380f.svg'
      }
    }
  },
  data() {
    return {
      mediaType: MediaTypes.movie
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
      this.emitMessagePlayVideo(getMovieVideosControllerResponse.url)
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
