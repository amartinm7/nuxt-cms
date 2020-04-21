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
          <h3 class="uk-card-title">
            {{ movie._name }}&nbsp;<span class="uk-label">{{ movie._id }}</span>
          </h3>
          <p class="uk-dropcap">{{ movie._overview }}</p>
        </div>
      </div>
      <div :id="`openVideo${movie._id}`" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close>
            Close
          </button>
          <div
            v-if="showVideo"
            :id="`videoFrame${movie._id}`"
            @focusout="closeModal()"
          ></div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Vue from 'vue'
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import { GetTvShowsVideosControllerRequest } from '../../middleware/modules/tvShows/getVideos/userapplication/controller/GetTvShowsVideosController'
import VideoFrame from './EchVideoFrame'
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
  data() {
    return {
      showVideo: true,
      videoFrameInstance: undefined
    }
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    closeModal() {
      console.log('destroy videoFrameInstance')
      this.showVideo = false
      this.videoFrameInstance.$destroy()
    },
    async initVideoURL(movie) {
      const vm = this
      const isoLangCode = this.currentLocale().iso
      const getTvShowsVideosControllerResponse = await beanContainer.getTvShowsVideosController.getFirstVideoURL(
        new GetTvShowsVideosControllerRequest({
          movie_id: movie._id,
          isoLangCode
        })
      )
      vm.showVideo = true
      const VideoFrameClass = Vue.extend(VideoFrame)
      new VideoFrameClass({
        propsData: {
          url: getTvShowsVideosControllerResponse.url,
          movie_id: movie._id,
          movie_title: movie._name
        }
      }).$mount(`#videoFrame${movie._id}`)
      this.$uikit.modal(`#openVideo${movie._id}`).show()
    }
  }
}
</script>
<style></style>
