<template>
  <div v-if="overview" :id="movieId + '_overview'">
    <h2 class="uk-card-title ech-basic uk-text-center">
      {{ $t('sypnosis') }}
    </h2>
    <p class="uk-dropcap uk-text-justify">
      {{ overview }}
      <span
        class="ech-basic"
        uk-icon="icon: comment; ratio: 0.60;"
        uk-tooltip="copy"
        @click.stop.prevent="toClipboard(movieId + '_overview')"
      >
      </span>
    </p>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'

export default {
  name: 'EchSypnosis',
  mixins: [Utils],
  props: {
    overview: {
      type: String,
      default() {
        return ''
      }
    },
    movieId: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
<style></style>
