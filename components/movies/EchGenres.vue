<template>
  <div>
    <h2 class="uk-card-title ech-basic uk-text-center">
      {{ $t('genresLabel') }}
    </h2>
    <div class="uk-flex uk-flex-center uk-flex-wrap uk-flex-around">
      <nuxt-link
        v-for="genre in movie._genres"
        :key="genre._id"
        :todo="genre"
        :to="getByGenreURL(genre, mediaType)"
        class="uk-link-reset"
        :alt="$t('moreAbout', { name: genre.name })"
        :uk-tooltip="$t('moreAbout', { name: genre.name })"
      >
        <span
          class="uk-label uk-label-warning ech-basic uk-margin-small-right uk-margin-small-bottom"
          uk-icon="icon: plus-circle; ratio: 0.75;"
        >
          {{ genre.name }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchGenres',
  mixins: [MediaManager],
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      }
    },
    mediaType: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
