<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ movies[0]._title }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ movies[0]._title }}
    </h1>
    <article
      class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
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
        <div class="uk-card-body">
          <h2 class="uk-card-title ech-basic uk-text-center">
            {{ movie._title }} ({{ movie._release_date | moment('YYYY') }})
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
          <div v-if="movie._tagline" class="uk-width-auto">
            <p class="uk-text-italic uk-text-center">"{{ movie._tagline }}"</p>
          </div>
          <!---->
          <div class="uk-margin-medium-top">
            <h2 class="uk-card-title ech-basic uk-text-center">
              {{ $t('technicalDetails') }}
            </h2>
            <ech-release-date
              :release-date="movie._release_date"
            ></ech-release-date>
            <ech-runtime-by-hours
              :runtime-by-hours="movie._runtimeByHours"
            ></ech-runtime-by-hours>
            <ech-production-countries
              :production-countries="movie._production_countries"
            ></ech-production-countries>
            <ech-original-title
              :original-title="movie._original_title"
            ></ech-original-title>
            <ech-budget :budget="movie._budget"></ech-budget>
            <ech-revenue :revenue="movie._revenue"></ech-revenue>
            <ech-crew :crews="movie._director" label="director"></ech-crew>
            <ech-crew :crews="movie._screenplay" label="screenplay"></ech-crew>
            <ech-crew :crews="movie._producer" label="producer"></ech-crew>
            <ech-recommended :adults="movie._adult"></ech-recommended>
            <ech-home-page :home-page="movie._homepage"></ech-home-page>
            <ech-play-videos
              :movie="movie"
              :media-type="mediaType"
              @outbound-open-video-modal="emitMessagePlayVideo"
            ></ech-play-videos>
          </div>
        </div>
      </div>
    </article>
    <article
      class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div>
        <div class="uk-card-body">
          <ech-synopsis
            :overview="movie._overview"
            :movie-id="movie._id"
            class="uk-margin-small-top"
          ></ech-synopsis>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <ech-genres
            :movie="movie"
            :media-type="mediaType"
            class="uk-margin-small-top"
          ></ech-genres>
          <ech-related-movies
            :movie="movie"
            :media-type="mediaType"
            :label="$t('moreRelatedMovies')"
            class="uk-margin-medium-top"
          ></ech-related-movies>
          <ech-recommended-movies
            :movie="movie"
            label="recommendedMovies"
            :media-type="mediaType"
            class="uk-margin-medium-top"
          ></ech-recommended-movies>
        </div>
        <div>
          <ech-social-network-card-details
            :title="movie._title"
            :description="movie._overview"
            :quote="movie._tagline"
            :poster-path="movie._poster_path"
            class="uk-margin-medium-bottom"
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
import PeopleManager from '@/middleware/modules/vue/mixins/PeopleManager'
import EchGenres from '@/components/movies/EchGenres'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'
import EchMediaCardPicture from '@/components/movies/EchMediaCardPicture'
import EchCrew from '@/components/movies/EchCrew'
import EchProductionCountries from '@/components/movies/EchProductionCountries'
import EchReleaseDate from '@/components/movies/EchReleaseDate'
import EchRuntimeByHours from '@/components/movies/EchRuntimeByHours'
import EchBudget from '@/components/movies/EchBudget'
import EchRevenue from '@/components/movies/EchRevenue'
import EchRecommended from '@/components/movies/EchRecommended'
import EchHomePage from '@/components/movies/EchHomePage'
import EchRelatedMovies from '@/components/movies/EchRelatedMovies'
import EchSynopsis from '@/components/movies/EchSypnosis'
import EchOriginalTitle from '@/components/movies/EchOriginalTitle'
import EchRecommendedMovies from '@/components/movies/EchRecommendedMovies'
import EchPlayVideos from '@/components/movies/EchPlayVideos'

export default {
  name: 'EchMoviesCardDetail',
  components: {
    EchPlayVideos,
    EchRecommendedMovies,
    EchOriginalTitle,
    EchSynopsis,
    EchRelatedMovies,
    EchHomePage,
    EchRecommended,
    EchRevenue,
    EchBudget,
    EchRuntimeByHours,
    EchReleaseDate,
    EchProductionCountries,
    EchCrew,
    EchMediaCardPicture,
    EchGenres,
    EchSocialNetworkCardDetails,
    EchStarRating
  },
  mixins: [
    MediaManager,
    LocateManager,
    Utils,
    PeopleManager,
    SimilarShowsManager
  ],
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
      mediaType: MediaTypes.movie,
      index: 0
    }
  },
  computed: {
    movie() {
      return this.movies?.[0]
    }
  }
}
</script>
<style></style>
