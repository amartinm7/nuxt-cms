<template>
  <div v-if="productionCountries && productionCountries[0]">
    <span class="uk-text-meta ech-basic">{{ $t('productionCountry') }}: </span>
    <span
      v-for="productionCountry in productionCountries"
      :key="productionCountry._iso_3166_1 + Math.random()"
      class="uk-text-lead uk-text-small uk-margin-small-right"
      :todo="productionCountry"
      uk-icon="icon: location; ratio: 0.50;"
    >
      {{ getCountryNameFrom(productionCountry._iso_3166_1) }}
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'

export default {
  name: 'EchProductionCountries',
  mixins: [LocateManager],
  props: {
    productionCountries: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
