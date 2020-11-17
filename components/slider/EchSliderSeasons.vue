<template>
  <div v-if="inNotEmpty(seasons)">
    <h2 class="uk-text-lead uk-text-center ech-basic">
      {{ $t('sliderSwitcher.seasons') }}
    </h2>
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true;"
    >
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSliderSeasons"></a>
        <li
          v-for="season in seasons"
          :key="season._id + Math.random()"
          :todo="season"
        >
          <nuxt-link
            class="uk-link-reset"
            :to="
              getSeasonsPathURL(
                season._season_number,
                mediaType,
                movieId,
                movieName
              )
            "
          >
            <img
              :src="getPosterURL(season._poster_path)"
              :alt="season._name"
              :title="season._name"
              :uk-tooltip="season._name"
              loading="lazy"
            />
            <div
              class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
            >
              <p class="uk-margin-remove uk-text-small">
                {{ $t('releaseDate') }}:
                {{ season._air_date | moment('DD-MM-YYYY') }}
              </p>
              <p class="uk-margin-remove uk-text-small">{{ season._name }}</p>
              <p class="uk-margin-remove uk-text-small">
                {{ $t('numEpisodes') }}: {{ season._episode_count }}
              </p>
              <!--             <p class="uk-margin-remove uk-text-small">
               {{ season._overview }}
             </p>
             <p class="uk-margin-remove uk-text-small">
               {{ season._season_number }}
             </p>
             <p class="uk-margin-remove uk-text-small">{{ season._id }}</p>-->
            </div>
          </nuxt-link>
        </li>
      </ul>
      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import SeasonsManager from '@/middleware/modules/vue/mixins/SeasonsManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'

export default {
  name: 'EchSliderSeasons',
  mixins: [MediaManager, Utils, SeasonsManager],
  props: {
    seasons: {
      type: Array,
      default() {
        return []
      }
    },
    movieId: {
      type: Number,
      default() {
        return 0
      }
    },
    movieName: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      mediaType: MediaTypes.tv
    }
  }
}
</script>
