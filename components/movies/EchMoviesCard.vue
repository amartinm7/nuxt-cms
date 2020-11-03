<template>
  <div>
    <slot v-for="(movie, index) in movies" :todo="movie">
      <article
        v-if="movie._media_type === mediaType"
        :key="movie._id"
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
        uk-grid
      >
        <ech-movies-card-picture
          :movie="movie"
          :image-url="getPosterURL(movie._poster_path)"
          :index="index"
          @outbound-open-video-modal="emitMessagePlayVideo"
        ></ech-movies-card-picture>
        <div>
          <span
            class="uk-visible@s uk-align-right uk-margin-small-right uk-label-warning ech-basic ech-spin-icon uk-border-circle uk-padding-small uk-text-center"
          >
            {{ movie._vote_average.toFixed(1) }}
          </span>
          <div class="uk-card-body">
            <h2 class="uk-card-title ech-basic uk-text-center">
              <nuxt-link
                class="uk-link-reset"
                :to="getDetailPathURL(movie._id, movie._title, mediaType)"
              >
                {{ movie._title }} ({{ movie._release_date | moment('YYYY') }})
              </nuxt-link>
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
            <p class="uk-dropcap uk-text-justify">
              {{ movie._overview }}
            </p>
            <p v-if="movie._release_date">
              {{ $t('releaseDate') }}
              <span
                class="uk-label uk-margin-small-left ech-basic ech-spin-icon"
              >
                {{ movie._release_date | moment('DD-MM-YYYY') }}
              </span>
            </p>
          </div>
        </div>
      </article>
    </slot>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchStarRating from './EchStarRating'
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import LocateManager from '@/middleware/modules/vue/mixins/LocateManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchMoviesCardPicture from '@/components/movies/EchMoviesCardPicture'

export default {
  name: 'EchMoviesCard',
  components: { EchMoviesCardPicture, EchStarRating },
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
      mediaType: MediaTypes.movie
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
