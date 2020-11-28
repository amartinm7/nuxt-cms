<template>
  <div v-if="inNotEmpty(reviews)">
    <article
      class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div>
        <h2 class="uk-text-lead uk-text-center ech-basic uk-padding-small">
          Reviews
        </h2>
      </div>
      <div>
        <ul uk-accordion="collapsible: true" class="uk-padding-small">
          <li
            v-for="review in reviews"
            :key="review._id + Math.random()"
            :todo="review"
            class="uk-padding-small"
          >
            <a class="uk-accordion-title" href="#">
              <div class="uk-text-center ech-basic">
                {{ $t('reviewBy', { name: review._author }) }}
              </div>
              <div>
                <ech-star-rating
                  :rating-value="review._author_details._rating / 2"
                  :star-size="20"
                >
                </ech-star-rating>
              </div>
            </a>
            <div class="uk-accordion-content">
              <div
                class="uk-dropcap uk-text-justify ech-basic uk-padding-small uk-text-break"
              >
                {{ review._content }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchStarRating from '@/components/movies/EchStarRating'

export default {
  name: 'EchReviews',
  components: { EchStarRating },
  mixins: [Utils],
  props: {
    reviews: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
