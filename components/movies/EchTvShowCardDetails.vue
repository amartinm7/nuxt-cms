<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ movies[0]._name }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ movies[0]._name }}
    </h1>
    <article
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
          v-if="false"
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
          <div class="uk-margin-medium-top">
            <h2 class="uk-card-title ech-basic uk-text-center">
              {{ $t('technicalDetails') }}
            </h2>
            <ech-release-date
              :release-date="movie._first_air_date"
            ></ech-release-date>
            <ech-production-countries
              :production-countries="movie._origin_country"
            ></ech-production-countries>
            <ech-original-language
              :original-language="movie._original_language"
            ></ech-original-language>
            <ech-original-title
              :original-title="movie._original_name"
            ></ech-original-title>
            <ech-crew :crews="movie._created_by" label="createdBy"></ech-crew>
            <ech-crew :crews="movie._screenplay" label="screenplay"></ech-crew>
            <ech-crew :crews="movie._producer" label="producer"></ech-crew>
            <ech-network-name :networks="movie._networks"></ech-network-name>
            <ech-num-of-seasons
              :num-of-seasons="movie._number_of_seasons"
            ></ech-num-of-seasons>
            <ech-num-of-episodes
              :num-of-episodes="movie._number_of_episodes"
            ></ech-num-of-episodes>
            <ech-home-page :home-page="movie._homepage"></ech-home-page>
          </div>
        </div>
      </div>
    </article>
    <article
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-padding-small uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div>
        <div class="uk-card-body">
          <ech-synopsis
            :overview="movie._overview"
            :movie-id="movie._id"
            class="uk-margin-medium-top"
          ></ech-synopsis>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <ech-genres
            :movie="movie"
            :media-type="mediaType"
            class="uk-margin-medium-top"
          ></ech-genres>
          <ech-networks-logo
            :networks="movie._networks"
            class="uk-margin-medium-top"
          ></ech-networks-logo>
          <ech-related-movies
            :movie="movie"
            :media-type="mediaType"
            :label="$t('moreRelatedTvShows')"
            class="uk-margin-medium-top"
          ></ech-related-movies>
          <ech-recommended-movies
            :movie="movie"
            label="recommendedTvShows"
            :media-type="mediaType"
            class="uk-margin-medium-top"
          ></ech-recommended-movies>
          <ech-social-network-card-details
            :title="movie._name"
            :description="movie._overview"
            :poster-path="movie._poster_path"
            class="uk-margin-medium-top"
          ></ech-social-network-card-details>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchStarRating from './EchStarRating'
import EchSocialNetworkCardDetails from './EchSocialNetworkCardDetails'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocaleManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchGenres from '@/components/movies/EchGenres'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'
import EchMediaCardPicture from '@/components/movies/EchMediaCardPicture'
import EchReleaseDate from '@/components/movies/EchReleaseDate'
import EchProductionCountries from '@/components/movies/EchProductionCountries'
import EchOriginalLanguage from '@/components/movies/EchOriginalLanguage'
import EchNetworksLogo from '@/components/movies/EchNetworksLogo'
import EchCrew from '@/components/movies/EchCrew'
import EchHomePage from '@/components/movies/EchHomePage'
import EchRelatedMovies from '@/components/movies/EchRelatedMovies'
import EchNumOfEpisodes from '@/components/movies/EchNumOfEpisodes'
import EchNumOfSeasons from '@/components/movies/EchNumOfSeasons'
import EchNetworkName from '@/components/movies/EchNetworkName'
import EchSynopsis from '@/components/movies/EchSypnosis'
import EchOriginalTitle from '@/components/movies/EchOriginalTitle'
import EchRecommendedMovies from '@/components/movies/EchRecommendedMovies'

export default {
  name: 'EchTvShowCardDetails',
  components: {
    EchRecommendedMovies,
    EchOriginalTitle,
    EchSynopsis,
    EchNetworkName,
    EchNumOfSeasons,
    EchNumOfEpisodes,
    EchRelatedMovies,
    EchHomePage,
    EchCrew,
    EchNetworksLogo,
    EchOriginalLanguage,
    EchProductionCountries,
    EchReleaseDate,
    EchMediaCardPicture,
    EchGenres,
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
      mediaType: MediaTypes.tv,
      index: 0
    }
  },
  computed: {
    movie() {
      return this.movies?.[0]
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
