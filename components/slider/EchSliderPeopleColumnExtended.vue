<template>
  <!--
  <article
    v-if="inNotEmpty(movies)"
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >-->
  <article
    v-if="inNotEmpty(movies)"
    uk-grid
    class="uk-flex-1 uk-flex uk-flex-wrap"
  >
    <ech-slider-people-card
      :credits="sanitizedCredits(movies[0]._credits)"
      :type="crewTypes.credits"
      :movie-name="movies[0]._name"
    >
    </ech-slider-people-card>
    <ech-slider-people-card
      :credits="sanitizedCrews(movies[0]._crews)"
      :type="crewTypes.crew"
      :movie-name="movies[0]._name"
    >
    </ech-slider-people-card>
    <!--
    <ech-slider-people-column
      :credits="sanitizedCredits(movies[0]._credits)"
      :type="crewTypes.credits"
      :movie-name="movies[0]._name"
    ></ech-slider-people-column>
    <ech-slider-people-column
      :credits="sanitizedCrews(movies[0]._crews)"
      :type="crewTypes.crew"
      :movie-name="movies[0]._name"
    ></ech-slider-people-column>
    -->
  </article>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import EchSliderPeopleCard from '@/components/slider/EchPeopleCard'

export default {
  name: 'EchSliderPeopleColumnExtended',
  components: { EchSliderPeopleCard },
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
