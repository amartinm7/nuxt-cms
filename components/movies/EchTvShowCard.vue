<template>
  <div>
    <slot v-for="(movie, index) in movies" :todo="movie">
      <article
        v-if="movie._media_type === mediaType"
        :key="movie._id"
        class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
        uk-grid
      >
        <ech-media-card-picture
          :movie="movie"
          :image-url="getPosterURL(movie._poster_path)"
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
              <nuxt-link
                class="uk-link-reset"
                :to="getDetailPathURL(movie._id, movie._name, mediaType)"
                >{{ movie._name }}
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
            <p class="uk-dropcap uk-text-justify">{{ movie._overview }}</p>
            <p v-if="movie._first_air_date">
              {{ $t('firstAirDate') }}
              <span
                class="uk-label uk-margin-small-left ech-basic ech-spin-icon"
              >
                {{ movie._first_air_date | moment('DD-MM-YYYY') }}
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
import LocateManager from '@/middleware/modules/vue/mixins/LocaleManager'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchMediaCardPicture from '@/components/movies/EchMediaCardPicture'

export default {
  name: 'EchTvShowCard',
  components: { EchMediaCardPicture, EchStarRating },
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
  }
}
</script>
<style></style>
