<template>
  <!--
  <article
    v-if="inNotEmpty(movies)"
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >-->
  <div>
    <article v-if="inNotEmpty(movies)" class="uk-flex-wrap uk-flex uk-flex-1">
      <ul uk-tab>
        <li>
          <a href="#">{{ $t('sliderSwitcher.credits') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('sliderSwitcher.staff') }}</a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li>
          <div>
            <ech-slider-people-card
              :credits="sanitizedCredits(movies[0]._credits)"
              :type="crewTypes.credits"
              :movie-name="movies[0]._name || movies[0]._title"
            >
            </ech-slider-people-card>
          </div>
        </li>
        <li>
          <div>
            <ech-slider-people-card
              :credits="sanitizedCrews(movies[0]._crews)"
              :type="crewTypes.crew"
              :movie-name="movies[0]._name || movies[0]._title"
            >
            </ech-slider-people-card>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import EchSliderPeopleCard from '@/components/slider/EchSliderPeopleCard'

export default {
  name: 'EchSliderPeopleCardExtended',
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
