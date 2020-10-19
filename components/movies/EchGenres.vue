<template>
  <div>
    <p>
      <nuxt-link
        v-for="genre in movie._genres"
        :key="genre._id"
        :todo="genre"
        :to="getByGenreURL(genre, mediaType)"
        class="uk-link-reset"
      >
        <span class="uk-label uk-label-warning uk-margin-small-left ech-basic">
          {{ genre.name }}
        </span>
      </nuxt-link>
    </p>
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
