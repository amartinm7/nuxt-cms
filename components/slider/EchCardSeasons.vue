<template>
  <div v-if="inNotEmpty(seasons)" class="uk-padding">
    <h2 class="uk-text-lead uk-text-center ech-basic">
      {{ $t('seasonsBy', { name: movieName }) }}
    </h2>
    <div class="uk-child-width-1-2@s uk-flex uk-flex-wrap uk-flex-1">
      <div
        v-for="season in seasons"
        :key="season._id + Math.random()"
        :todo="season"
        class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-margin-small-bottom"
        style="height:138px"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container uk-width-1-3">
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
              style="height:138px"
            />
          </nuxt-link>
        </div>
        <div class="uk-width-2-3" style="height:138px">
          <div class="uk-card-body uk-width-expand" style="height:138px">
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
              <h3 class="uk-margin-remove uk-text-small">
                {{ season._name }}
              </h3>
              <p class="uk-margin-remove uk-text-small">
                {{ $t('at') }}:
                {{ season._air_date | moment('DD-MM-YYYY') }}
              </p>
              <p class="uk-margin-remove uk-text-small">
                {{ $t('numEpisodes') }}: {{ season._episode_count }}
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
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
  name: 'EchSeasonsCard',
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
