<template>
  <div>
    <article v-if="inNotEmpty(movies)">
      <ul uk-tab>
        <li>
          <a href="#">{{ $t('sliderSwitcher.credits') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('sliderSwitcher.staff') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('sliderSwitcher.posters') }}</a>
        </li>
        <li v-if="inNotEmpty(movies[0]._seasons)">
          <a href="#">{{ $t('sliderSwitcher.seasons') }}</a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li>
          <div>
            <ech-people-card
              :credits="sanitizedCredits(movies[0]._credits)"
              :type="crewTypes.credits"
              :movie-name="movies[0]._name || movies[0]._title"
            >
            </ech-people-card>
          </div>
        </li>
        <li>
          <div>
            <ech-people-card
              :credits="sanitizedCrews(movies[0]._crews)"
              :type="crewTypes.crew"
              :movie-name="movies[0]._name || movies[0]._title"
            >
            </ech-people-card>
          </div>
        </li>
        <li>
          <div>
            <ech-card-posters
              :posters="posters"
              :movie-name="movies[0]._name || movies[0]._title"
              label="postersBy"
            >
            </ech-card-posters>
          </div>
        </li>
        <li v-if="inNotEmpty(movies[0]._seasons)">
          <div>
            <ech-seasons-card
              :movie-id="movies[0]._id"
              :seasons="movies[0]._seasons"
              :movie-name="movies[0]._name"
            ></ech-seasons-card>
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
import EchSeasonsCard from '@/components/slider/EchCardSeasons'
import EchPeopleCard from '@/components/slider/EchPeopleCard'
import EchCardPosters from '@/components/slider/EchCardPosters'

export default {
  name: 'EchDetailsCardExtendedForMovies',
  components: { EchCardPosters, EchPeopleCard, EchSeasonsCard },
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
