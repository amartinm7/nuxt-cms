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
          &nbsp;{{ movie._vote_average }}&nbsp;
        </span>
        <a
          class="uk-button uk-button-default uk-align-center"
          :href="`#openVideo_${movie._id}`"
          uk-toggle
          @click="initVideoURL(movie)"
        >
          <img :src="getPosterURL(movie._poster_path, index)" />
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
      <div :id="`openVideo_${movie._id}`" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          ></button>
          <div :id="`videoFrame_${movie._id}`"></div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import Vue from 'vue'
import ApplicationFacadeFactoryBean from '../../middleware/framework/facade/ApplicationFacadeFactoryBean'
import { GetTvShowsVideosControllerRequest } from '../../middleware/framework/controller/tv/GetVideos/GetTvShowsVideosController'
import VideoFrame from './VideoFrame'

export default {
  name: 'TvShowCard',
  props: {
    movies: {
      type: Array
    }
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    },
    async initVideoURL(movie) {
      const getTvShowsVideosControllerResponse = await ApplicationFacadeFactoryBean.getTvShowsVideosController().getFirstVideoURL(
        new GetTvShowsVideosControllerRequest({ movie_id: movie._id })
      )
      console.log('initVideoURL...' + getTvShowsVideosControllerResponse.url)
      const VideoFrameClass = Vue.extend(VideoFrame)
      new VideoFrameClass({
        propsData: {
          url: getTvShowsVideosControllerResponse.url,
          movie_id: movie._id
        }
      }).$mount(`#videoFrame_${movie._id}`)
    }
  }
}
</script>
<style></style>
