<template>
  <div>
    <h2 class="uk-card-title ech-basic uk-text-center">
      {{ $t('genresLabel') }}
    </h2>
    <div class="uk-flex uk-flex-center uk-flex-wrap uk-flex-around">
      <nuxt-link
        v-for="genre in movie._genres"
        :key="genre.id"
        :todo="genre"
        :to="
          getByGenreURL({
            genreId: genre.id,
            genreName: genre.name,
            mediaType,
            language,
            page: 1
          })
        "
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
import GenresManager from '@/middleware/modules/vue/mixins/GenresManager'

export default {
  name: 'EchGenres',
  mixins: [GenresManager],
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
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
</script>
