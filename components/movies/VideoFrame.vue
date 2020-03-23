<template>
  <div :id="movie._videoHref" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <iframe
        src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
        width="1920"
        height="1080"
        frameborder="0"
        uk-responsive
        uk-video="automute: false"
      ></iframe>
    </div>
  </div>
</template>
<script>
import ApplicationFacadeFactoryBean from '../../middleware/framework/facade/ApplicationFacadeFactoryBean'
import { GetMovieVideosControllerRequest } from '../../middleware/framework/controller/movies/getMovieVideos/GetMovieVideosController'

export default {
  name: 'VideoFrame',
  props: {
    movie: {
      type: Object
    }
  },
  methods: {
    /* eslint-disable camelcase */
    async getVideoURL(movie) {
      const response = await ApplicationFacadeFactoryBean.getMovieVideosController().execute(
        new GetMovieVideosControllerRequest({ ...movie })
      )
      return `https://www.youtube-nocookie.com/embed/${response[0]._id}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  }
}
</script>

<style></style>
