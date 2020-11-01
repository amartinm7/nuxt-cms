<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-heading-medium uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ movies[0]._title }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ movies[0]._title }}
    </h1>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
      >
        <div class="uk-width-expand">
          {{ index }}
          <a
            class="uk-button uk-button-default uk-align-center"
            @click="initVideoURL(movie)"
          >
            <img
              class="ech-default-img"
              :src="getPoster2XURL(movie._poster_path, index)"
              :alt="movie._title"
              :title="movie._title"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div>
        <span
          class="uk-visible@s uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
        >
          {{ movie._vote_average.toFixed(1) }}
        </span>
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
          <div class="uk-flex uk-flex-center">
            <div class="uk-width-auto">
              <p class="uk-text-italic uk-align-center">
                <span
                  v-if="movie._release_date"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: calendar; ratio: 0.75;"
                >
                  {{ $t('releaseDate') }}:
                  {{ movie._release_date | moment('DD-MMMM-YYYY') }}
                </span>
                <span
                  v-if="movie._runtimeByHours"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: clock; ratio: 0.75;"
                  >{{ $t('runtime') }}:
                  {{ movie._runtimeByHours }}
                </span>
                <span
                  v-if="
                    movie._production_countries &&
                      movie._production_countries[0]
                  "
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: location; ratio: 0.75;"
                  >{{ $t('productionCountry') }}:
                  {{
                    getCountryNameFrom(
                      movie._production_countries[0]._iso_3166_1
                    )
                  }}
                </span>
              </p>
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
          <div>
            <p
              v-if="movie._budget && movie._budget !== '0'"
              class="uk-text-meta"
            >
              {{ $t('budget') }}
              <span class="uk-text-lead uk-text-small">
                ${{ movie._budget | abbreviate }}
              </span>
            </p>
            <p
              v-if="movie._revenue && movie._revenue !== 0"
              class="uk-text-meta"
            >
              {{ $t('revenue') }}
              <span class="uk-text-lead uk-text-small">
                ${{ movie._revenue | abbreviate }}
              </span>
            </p>
          </div>
          <div>
            <p v-if="movie._director" class="uk-text-meta">
              {{ $t('director') }}:
              <nuxt-link
                class="uk-link-reset"
                :to="
                  getPeoplePathURL(movie._director._id, movie._director._name)
                "
              >
                <span class="uk-text-lead uk-text-small">{{
                  movie._director._name
                }}</span>
              </nuxt-link>
            </p>
            <p v-if="movie._screenplay" class="uk-text-meta">
              {{ $t('screenplay') }}:
              <nuxt-link
                class="uk-link-reset"
                :to="
                  getPeoplePathURL(
                    movie._screenplay._id,
                    movie._screenplay._name
                  )
                "
              >
                <span class="uk-text-lead uk-text-small">{{
                  movie._screenplay._name
                }}</span>
              </nuxt-link>
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
                  >{{ $t('moreRelatedMovies') }}
                </span>
              </nuxt-link>
            </p>
            <ech-social-network-card-details
              :title="movie._title"
              :description="movie._overview"
              :quote="movie._tagline"
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
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import { GetMovieVideosControllerRequest } from '@/middleware/modules/movies/getVideos/userapplication/controller/GetMovieVideosController'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import PeopleManager from '@/middleware/modules/vue/mixins/PeopleManager'
import EchGenres from '@/components/movies/EchGenres'
import SimilarShowsManager from '@/middleware/modules/vue/mixins/SimilarShowsManager'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchMoviesCardDetail',
  components: { EchGenres, EchSocialNetworkCardDetails, EchStarRating },
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
      mediaType: MediaTypes.movie
    }
  },
  methods: {
    async initVideoURL(movie) {
      const isoLangCode = this.currentLocale().iso
      const getMovieVideosControllerResponse = await beanContainer.getMovieVideosController.getFirstVideoURL(
        new GetMovieVideosControllerRequest({
          movie_title: movie._title,
          movie_id: movie._id,
          isoLangCode
        })
      )
      console.log('emit...' + getMovieVideosControllerResponse.url)
      this.$emit(
        'outbound-open-video-modal',
        getMovieVideosControllerResponse.url
      )
    }
  }
}
</script>
<style>
/* TODO fallback image */
img:before {
  content: '';
  display: block;
  background: #dedede;
  top: 0;
  bottom: 0;
  min-height: 278px;
  min-width: 185px;
}

/*img {*/
/*  position: relative;*/
/*}*/
/*img:before {*/
/*  content: "";*/
/*  display: block;*/
/*  position: absolute;*/
/*  background: #dedede;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  min-height: 300px;*/
/*  min-width: 300px;*/
/*}*/
</style>
