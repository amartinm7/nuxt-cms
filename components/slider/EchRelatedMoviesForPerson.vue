<template>
  <article
    v-if="inNotEmpty(movies)"
    class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >
    <div class="uk-padding-large">
      <h2 v-if="isMovie" class="uk-text-center">
        {{ $t('appearOnMovies', { name: personName }) }}
      </h2>
      <h2 v-if="!isMovie" class="uk-text-center">
        {{ $t('appearOnTvShows', { name: personName }) }}
      </h2>
      <ech-slider-main :movies="movies" :media-type="mediaType">
      </ech-slider-main>
    </div>
  </article>
</template>
<script>
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchSliderMain from '@/components/slider/EchSliderMain'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'

export default {
  name: 'EchRelatedMoviesForPerson',
  components: { EchSliderMain },
  mixins: [Utils],
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    },
    personName: {
      type: String,
      default() {
        return ''
      }
    },
    mediaType: {
      type: String,
      default() {
        return MediaTypes.tv
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    isMovie() {
      return this.mediaType === MediaTypes.movie
    }
  }
}
</script>
