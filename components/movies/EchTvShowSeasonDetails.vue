<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ season._movie_name }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ season._movie_name }}
    </h1>
    <article
      v-if="season"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <ech-media-season-card-picture
        :season="season"
        :image-url="getPoster2XURL(season._poster_path)"
      ></ech-media-season-card-picture>
      <div>
        <span
          v-if="false"
          class="uk-visible@s uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
        >
          {{ season._vote_average.toFixed(1) }}
        </span>
        <div class="uk-card-body">
          <h2 class="uk-card-title ech-basic uk-text-center">
            {{ season._name }} ({{ season._air_date | moment('YYYY') }})
            <span
              :id="season._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(season._id)"
              >{{ season._id }}</span
            >
          </h2>
          <ech-social-network-card-details
            :title="season._name"
            :description="season._overview"
            class="uk-margin-medium-top"
          ></ech-social-network-card-details>
        </div>
      </div>
      <!-- Thumbnail schema from schema.org inside for sharing with WhatsApp -->
      <link itemprop="thumbnailUrl" href="url_image" />
      <span
        itemprop="thumbnail"
        itemscope
        itemtype="http://schema.org/ImageObject"
      >
        <link itemprop="url" :href="getPosterURL(season._poster_path)" />
      </span>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchSocialNetworkCardDetails from './EchSocialNetworkCardDetails'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'
import EchMediaSeasonCardPicture from '@/components/movies/EchMediaSeasonCardPicture'

export default {
  name: 'EchTvShowSeasonDetails',
  components: {
    EchMediaSeasonCardPicture,
    EchSocialNetworkCardDetails
  },
  mixins: [MediaManager, LocateManager, Utils, SimilarShowsManager],
  props: {
    season: {
      type: Object,
      default() {
        return {}
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
