<template>
  <div>
    <!--flash banner -->
    <div class="uk-position-relative uk-visible-toggle uk-light uk-width-auto">
      <a
        class="uk-button uk-button-default uk-align-center"
        href="#modalcenter"
        uk-toggle
      >
        <img
          src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
          alt="poster-cover"
        />
      </a>
    </div>
    <div id="modalcenter" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close>
          Close
        </button>
        <iframe
          src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
          width="1920"
          height="1080"
          frameborder="0"
          uk-responsive
          uk-video="automute: false"
          title="main-cover"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EchBannerMain',
  computed: {
    showLocales() {
      // eslint-disable-next-line no-console
      console.log('showLocales... ' + this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
    showMenuListForTvShows() {
      return Object.keys(this.$i18n.messages[this.$i18n.locale].pages.tv)
    },
    showMenuListForMovies() {
      return Object.keys(this.$i18n.messages[this.$i18n.locale].pages.movies)
    }
  },
  methods: {
    translateKeyMessageForTvShows(key) {
      return this.$i18n.messages[this.$i18n.locale].pages.tv[key]
    },
    translateKeyMessageForMovies(key) {
      return this.$i18n.messages[this.$i18n.locale].pages.movies[key]
    },
    getTvShowTopListlURL(actionName) {
      const language = this.$i18n.locale
      // this.$store.dispatch(
      //   'commandActions/commandActionsStore/setActionForTvShows',
      //   actionName
      // )
      return `/${language}/tvshows/${actionName}/`
    },
    getMoviesTopListlURL(actionName) {
      const language = this.$i18n.locale
      // this.$store.dispatch(
      //   'commandActions/commandActionsStore/setActionForMovies',
      //   actionName
      // )
      return `/${language}/movies/${actionName}/`
    }
  }
}
</script>
<style></style>
