<template>
  <article
    v-if="inNotEmpty(reviews)"
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
    uk-grid
  >
    <div class="uk-padding-large">
      <h2 class="uk-text-lead uk-text-center ech-basic">
        {{ 'review' }}
      </h2>
      <div>
        <ul>
          <li
            v-for="review in reviews"
            :key="review._id + Math.random()"
            :todo="review"
          >
            <div class="uk-dropcap uk-text-justify ech-basic">
              {{ review._content }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'

export default {
  name: 'EchReviews',
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
