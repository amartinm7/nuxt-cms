<template>
  <div v-if="inNotEmpty(credits)">
    <h2 v-if="isCredits" class="uk-text-lead uk-text-center ech-basic">
      {{ $t('sliderSwitcher.credits') }}
    </h2>
    <h2 v-if="isCrew" class="uk-text-lead uk-text-center ech-basic">
      {{ $t('sliderSwitcher.staff') }}
    </h2>
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
        <li
          v-for="credit in credits"
          :key="credit._credit_id + Math.random()"
          :todo="credit"
        >
          <nuxt-link
            class="uk-link-reset"
            :to="getPeoplePathURL(credit._id, credit._name)"
          >
            <div class="uk-panel">
              <img
                :src="getPosterURL(credit._profile_path)"
                :alt="credit._name"
                :title="credit._name"
                :uk-tooltip="credit._name"
                loading="lazy"
              />
              <div
                class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
              >
                <p class="uk-margin-remove uk-text-small">{{ credit._name }}</p>
                <p v-if="isCredits" class="uk-margin-remove uk-text-small">
                  {{ $t('as') }} {{ credit._character }}
                </p>
                <p v-if="isCrew" class="uk-margin-remove uk-text-small">
                  {{ $t('as') }} {{ credit._job }}
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
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import PeopleManager from '@/middleware/modules/vue/mixins/PeopleManager'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import CrewTypes from '@/middleware/modules/domain/CrewTypes'
import Utils from '@/middleware/modules/vue/mixins/Utils'

export default {
  name: 'EchSliderPeople',
  mixins: [MediaManager, PeopleManager, CreditsManager, Utils],
  props: {
    credits: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: String,
      default() {
        return CrewTypes.credits
      }
    }
  },
  data() {
    return {}
  }
}
</script>
