<template>
  <div>
    <article
      v-for="episode in episodes"
      :key="episode._id + Math.random()"
      :todo="episode"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <ech-media-season-card-picture
        :season="episode"
        :image-url="getPoster2XURL(episode._still_path)"
      ></ech-media-season-card-picture>
      <div>
        <span
          v-if="false"
          class="uk-visible@s uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
        >
          {{ episode._vote_average.toFixed(1) }}
        </span>
        <div class="uk-card-body">
          <h2 class="uk-card-title ech-basic uk-text-center">
            {{ episode._name }}
            <span
              :id="episode._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(episode._id)"
              >{{ episode._id }}</span
            >
          </h2>
          <p>
            <ech-star-rating :rating-value="episode._vote_average / 2">
            </ech-star-rating>
          </p>
          <ech-synopsis
            :overview="episode._overview"
            :movie-id="episode._id"
            class="uk-margin-medium-top"
          ></ech-synopsis>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchStarRating from './EchStarRating'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'
import EchSynopsis from '@/components/movies/EchSypnosis'
import EchMediaSeasonCardPicture from '@/components/movies/EchMediaSeasonCardPicture'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'

export default {
  name: 'EchTvShowEpisodeBySeasonDetails',
  components: {
    EchMediaSeasonCardPicture,
    EchSynopsis,
    EchStarRating
  },
  mixins: [
    MediaManager,
    LocateManager,
    Utils,
    SimilarShowsManager,
    CreditsManager
  ],
  props: {
    episodes: {
      type: Array,
      default() {
        return []
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
<style></style>
