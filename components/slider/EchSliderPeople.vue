<template>
  <div>
    <h3
      v-show="existsCredits(credits)"
      class="uk-text-lead uk-text-center ech-basic"
    >
      {{ $t('sliderSwitcher.credits') }}
    </h3>
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true;"
    >
      <ul
        class="uk-slider-items"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <a name="echSliderPeople"></a>
        <li v-for="credit in credits" :key="credit.credit_id" :todo="credit">
          <nuxt-link
            class="uk-link-reset"
            :to="getPeoplePathURL(credit.id, credit.name)"
          >
            <div class="uk-panel">
              <img :src="getPosterURL(credit.profile_path)" alt="credit.name" />
              <div
                class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
              >
                <p class="uk-margin-remove uk-text-small">{{ credit.name }}</p>
                <p class="uk-margin-remove uk-text-small">
                  {{ $t('as') }} {{ credit.character }}
                </p>
              </div>
            </div>
          </nuxt-link>
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
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import PeopleManager from '../../middleware/modules/vue/mixins/PeopleManager'

export default {
  name: 'EchSliderPeople',
  mixins: [MediaManager, PeopleManager],
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
