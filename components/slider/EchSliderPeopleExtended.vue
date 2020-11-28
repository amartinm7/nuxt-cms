<template>
  <article
    v-if="inNotEmpty(movies)"
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >
    <ech-slider-people-column
      :credits="sanitizedCredits(movies[0]._credits)"
      :type="crewTypes.credits"
      :movie-name="movies[0]._name"
      class="uk-margin-small-top"
    ></ech-slider-people-column>
    <ech-slider-people-column
      :credits="sanitizedCrews(movies[0]._crews)"
      :type="crewTypes.crew"
      :movie-name="movies[0]._name"
    ></ech-slider-people-column>
  </article>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchSliderPeopleColumn from '@/components/slider/EchSliderPeopleColumn'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'

export default {
  name: 'EchSliderPeopleExtended',
  components: { EchSliderPeopleColumn },
  mixins: [Utils, CreditsManager],
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
