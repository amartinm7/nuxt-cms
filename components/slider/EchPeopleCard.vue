<template>
  <div v-if="inNotEmpty(credits)" class="uk-padding">
    <h2 v-if="isCredits" class="uk-text-lead uk-text-center ech-basic">
      {{ $t('creditsBy', { name: movieName }) }}
    </h2>
    <h2 v-if="isCrew" class="uk-text-lead uk-text-center ech-basic">
      {{ $t('staffBy', { name: movieName }) }}
    </h2>
    <div class="uk-child-width-1-2@s uk-flex uk-flex-wrap uk-flex-1">
      <div
        v-for="credit in credits"
        :key="credit._credit_id + Math.random()"
        :todo="credit"
        class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-margin-small-bottom"
        style="height:138px;"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container uk-width-1-3">
          <nuxt-link
            class="uk-link-reset"
            :to="getPeoplePathURL(credit._id, credit._name)"
          >
            <img
              :src="getPosterURL(credit._profile_path)"
              :alt="credit._name"
              :title="credit._name"
              :uk-tooltip="credit._name"
              loading="lazy"
              style="height:138px"
            />
          </nuxt-link>
        </div>
        <div class="uk-width-2-3" style="height:138px">
          <div class="uk-card-body uk-width-expand" style="height:138px">
            <nuxt-link
              class="uk-link-reset"
              :to="getPeoplePathURL(credit._id, credit._name)"
            >
              <h3 class="uk-margin-remove uk-text-small">
                {{ credit._name }}
              </h3>
              <p v-if="isCredits" class="uk-margin-remove uk-text-small">
                {{ $t('as') }} {{ credit._character }}
              </p>
              <p v-if="isCrew" class="uk-margin-remove uk-text-small">
                {{ $t('as') }} {{ credit._job }}
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
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
  name: 'EchPeopleCard',
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
    },
    movieName: {
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
