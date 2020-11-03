<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-text-capitalize uk-heading-large uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ movies[0]._name }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ movies[0]._name }}
    </h1>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <ech-media-card-picture
        :movie="movie"
        :image-url="getPoster2XURL(movie._poster_path)"
        :index="index"
        :media-type="mediaType"
        @outbound-open-video-modal="emitMessagePlayVideo"
      ></ech-media-card-picture>
      <div>
        <span
          class="uk-visible@s uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
        >
          {{ movie._vote_average.toFixed(1) }}
        </span>
        <div class="uk-card-body">
          <h2 class="uk-card-title ech-basic uk-text-center">
            {{ movie._name }} ({{ movie._first_air_date | moment('YYYY') }})
            <span
              :id="movie._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(movie._id)"
              >{{ movie._id }}</span
            >
          </h2>
          <p>
            <ech-star-rating :rating-value="movie._vote_average / 2">
            </ech-star-rating>
          </p>
          <div class="uk-flex uk-flex-center">
            <div class="uk-width-1-4">
              <p class="uk-text-italic uk-text-center"></p>
            </div>
            <div class="uk-width-2-4 uk-align-center">
              <p class="uk-text-italic uk-align-center">
                <span
                  v-if="movie._first_air_date"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: calendar; ratio: 0.75;"
                  >{{ $t('firstAirDate') }}:
                  {{ movie._first_air_date | moment('DD-MMMM-YYYY') }}
                </span>
                <span
                  v-if="movie._origin_countryToString"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: location; ratio: 0.75;"
                  >{{ $t('productionCountry') }}:
                  {{ getCountryNameFrom(movie._origin_countryToString) }}
                </span>
                <span
                  v-if="movie._original_language && movie._original_language[0]"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: world; ratio: 0.75;"
                  >{{ $t('originalLanguage') }}:
                  {{ getLanguageNameFrom(movie._original_language) }}
                </span>
              </p>
            </div>
            <div class="uk-width-1-4">
              <p class="uk-text-italic uk-text-center"></p>
            </div>
          </div>
          <div>
            <p
              v-if="movie._overview"
              :id="movie._id + 'overview'"
              class="uk-dropcap uk-text-justify"
            >
              {{ movie._overview }}
              <span
                class="ech-basic"
                uk-icon="icon: comment; ratio: 0.75;"
                uk-tooltip="copy"
                @click.stop.prevent="toClipboard(movie._id + 'overview')"
              >
              </span>
            </p>
          </div>
          <div class="uk-flex uk-flex-center">
            <ech-genres :movie="movie" :media-type="mediaType"></ech-genres>
          </div>
          <div
            v-if="movie._networks && movie._networks[0]"
            :uk-tooltip="$t('clickToSeeMoreAbout')"
          >
            <p class="uk-text-meta uk-margin-medium-top">
              <ech-network-logo
                :network="movie._networks[0]"
              ></ech-network-logo>
            </p>
          </div>
          <div>
            <p v-if="movie._director" class="uk-text-meta">
              {{ $t('director') }}:
              <span class="uk-text-lead uk-text-small">{{
                movie._director
              }}</span>
            </p>
            <p v-if="movie._screenplay" class="uk-text-meta">
              {{ $t('screenplay') }}:
              <span class="uk-text-lead uk-text-small">{{
                movie._screenplay
              }}</span>
            </p>
            <p v-if="movie._homepage" class="uk-text-meta">
              Homepage:
              <a
                :href="movie._homepage"
                :alt="movie._name"
                class="uk-text-lead uk-text-small"
              >
                {{ movie._homepage }}
              </a>
            </p>
            <p class="uk-text-meta uk-margin-medium-top uk-text-center">
              <nuxt-link
                :to="getRelatedShowsURL({ id: movie._id, mediaType })"
                class="uk-link-reset"
              >
                <span
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: reply; ratio: 0.75;"
                  >{{ $t('moreRelatedTvShows') }}
                </span>
              </nuxt-link>
            </p>
            <ech-social-network-card-details
              :title="movie._name"
              :description="movie._overview"
            ></ech-social-network-card-details>
          </div>
        </div>
      </div>
      <link itemprop="thumbnailUrl" href="url_image" />
      <span
        itemprop="thumbnail"
        itemscope
        itemtype="http://schema.org/ImageObject"
      >
        <link itemprop="url" :href="getPosterURL(movie._poster_path, index)" />
      </span>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchStarRating from './EchStarRating'
import EchSocialNetworkCardDetails from './EchSocialNetworkCardDetails'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchNetworkLogo from '@/components/movies/EchNetworkLogo'
import EchGenres from '@/components/movies/EchGenres'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'
import EchMediaCardPicture from '@/components/movies/EchMediaCardPicture'

export default {
  name: 'EchTvShowCardDetails',
  components: {
    EchMediaCardPicture,
    EchGenres,
    EchNetworkLogo,
    EchSocialNetworkCardDetails,
    EchStarRating
  },
  mixins: [MediaManager, LocateManager, Utils, SimilarShowsManager],
  props: {
    movies: {
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
  },
  mounted() {
    const networkToStore = {
      _id: this.movies?.[0]?._networks?.[0]?._id,
      _name: this.movies?.[0]?._networks?.[0]?._name,
      _logo_path: this.movies?.[0]?._networks?.[0]?._logo_path
    }
    this.$store.commit('network/networkStore/SET_NETWORK', networkToStore)
  }
}
</script>
<style></style>
