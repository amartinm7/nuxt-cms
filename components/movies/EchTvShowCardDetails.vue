<template>
  <div>
    <h1 class="uk-text-meta uk-text-large ech-basic uk-text-center">
      {{ movies[0]._name }}
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
          <a
            class="uk-button uk-button-default uk-align-center"
            @click="initVideoURL(movie)"
          >
            <img
              class="ech-default-img"
              :src="getPosterURL(movie._poster_path, index)"
              :alt="movie._name"
              :title="movie._name"
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
                >
                  {{ movie._first_air_date | moment('DD-MMMM-YYYY') }}
                </span>
                <span
                  v-if="movie._origin_countryToString"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: clock; ratio: 0.75;"
                >
                  {{ movie._origin_countryToString }}
                </span>
                <span
                  v-if="movie._original_language[0]"
                  class="uk-label uk-label-success ech-basic"
                  uk-icon="icon: location; ratio: 0.75;"
                >
                  {{ movie._original_language }}
                </span>
              </p>
            </div>
            <div class="uk-width-1-4">
              <p class="uk-text-italic uk-text-center"></p>
            </div>
          </div>
          <div>
            <p class="uk-dropcap uk-text-justify">
              {{ movie._overview }}
            </p>
          </div>
          <div class="uk-flex uk-flex-center">
            <p>
              <span
                v-for="genre in movie._genres"
                :key="genre._id"
                :todo="genre"
                class="uk-label uk-label-warning uk-margin-small-left ech-basic"
              >
                {{ genre.name }}
              </span>
            </p>
          </div>
          <div>
            <p v-if="movie._networks" class="uk-text-meta uk-margin-medium-top">
              <span>
                <img
                  class="uk-align-center"
                  :src="getNetWorkURLByArray(movie._networks)"
                  :alt="movie._networks"
                />
              </span>
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
            <ShareNetwork
              network="facebook"
              url="https://www.estrenoscinehoy.com/en/movie/details/475430-artemis-fowl"
              :title="movie._name"
              description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
              quote="The hot reload is so fast it\'s near instant. - Evan You"
              hashtags="estrenoscinehoy"
            >
              Share on Facebook
            </ShareNetwork>
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
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import { GetTvShowsVideosControllerRequest } from '../../middleware/modules/tvShows/getVideos/userapplication/controller/GetTvShowsVideosController'
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '../../middleware/modules/domain/MediaTypes'
import LocateManager from '../../middleware/modules/vue/mixins/LocateManager'
import Utils from '../../middleware/modules/vue/mixins/Utils'
import EchStarRating from './EchStarRating'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowCardDetails',
  components: { EchStarRating },
  mixins: [MediaManager, LocateManager, Utils],
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
  methods: {
    async initVideoURL(movie) {
      const vm = this
      console.log('initVideoURL...' + vm.$uikit.modal(`#openVideo${movie._id}`))
      const isoLangCode = this.currentLocale().iso
      const getTvShowsVideosControllerResponse = await beanContainer.getTvShowsVideosController.getFirstVideoURL(
        new GetTvShowsVideosControllerRequest({
          movie_name: movie._name,
          movie_id: movie._id,
          isoLangCode
        })
      )
      this.$emit(
        'outbound-open-video-modal',
        getTvShowsVideosControllerResponse.url
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
