<template>
  <div uk-slider="autoplay: true; sets: true;" class="uk-slider">
    <div class="uk-position-relative">
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSliderPeople"></a>
        <li v-for="credit in credits" :key="credit.credit_id" :todo="credit">
          <img :src="getPosterURL(credit.profile_path)" alt="movie._name" />
          <div class="uk-positio  n-center uk-panel"></div>
        </li>
      </ul>
      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchSliderPeople',
  mixins: [MediaManager],
  props: {
    credits: {
      type: Array,
      default() {
        return []
      }
    },
    mediaTypePath: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  }
}
</script>
