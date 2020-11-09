<template>
  <div v-if="originalLanguage">
    <span class="uk-text-meta ech-basic"> {{ $t('originalLanguage') }}: </span>
    <span
      class="uk-text-lead uk-text-small ech-basic"
      uk-icon="icon: calendar; ratio: 0.60;"
    >
      {{ getLanguageNameFrom(originalLanguage) }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'

export default {
  name: 'EchOriginalLanguage',
  mixins: [LocateManager],
  props: {
    originalLanguage: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
