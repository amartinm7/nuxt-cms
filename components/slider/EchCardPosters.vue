<template>
  <div v-if="inNotEmpty(posters)" class="uk-padding">
    <h2 class="uk-text-lead uk-text-center ech-basic">
      {{ $t('postersBy', { name: movieName }) }}
    </h2>
    <div class="uk-child-width-1-2@s uk-flex uk-flex-wrap uk-flex-1">
      <div
        v-for="(poster, index) in posters"
        :key="poster._file_path + Math.random()"
        :todo="poster"
        class="uk-grid-collapse uk-margin-small-bottom "
        uk-grid
      >
        <div class="uk-width-1-1">
          <img
            :src="getPosterURL(poster._file_path)"
            :alt="`${movieName} poster ${index}`"
            :title="`${movieName} poster ${index}`"
            :uk-tooltip="`${movieName} poster ${index}`"
            loading="lazy"
            class="uk-align-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'

export default {
  name: 'EchCardPosters',
  mixins: [MediaManager, Utils],
  props: {
    posters: {
      type: Array,
      default() {
        return []
      }
    },
    movieName: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
