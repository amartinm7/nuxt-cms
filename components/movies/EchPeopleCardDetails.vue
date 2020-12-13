<template>
  <div>
    <h1
      class="ech-basic uk-text-center uk-heading-small uk-text-bolder uk-text-emphasis uk-hidden@s"
    >
      {{ people._name }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ people._name }}
    </h1>
    <article
      class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
      >
        <div class="uk-width-expand">
          {{ true }}
          <a class="uk-button uk-button-default uk-align-center">
            <img
              :src="getPoster2XURL(people._profile_path)"
              :alt="people._name"
              :title="people._name"
              :uk-tooltip="people._name"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h2 class="uk-card-title ech-basic uk-text-center">
            <span v-if="people._birthday"
              >{{ people._name }} ({{
                people._birthday | moment('YYYY')
              }})</span
            >
            <span v-if="!people._birthday">{{ people._name }}</span>
            <span
              :id="people._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(people._id)"
              >{{ people._id }}</span
            >
          </h2>
          <p>
            <ech-star-rating :rating-value="people._popularity / 2">
            </ech-star-rating>
          </p>
          <div
            class="uk-flex uk-flex-center uk-width-auto uk-text-italic uk-margin-medium"
          >
            <div>
              <ech-origin-place-of-birth
                :place-of-birth="people._place_of_birth"
              ></ech-origin-place-of-birth>
              <ech-birthday :birthday="people._birthday"></ech-birthday>
              <ech-deathday :deathday="people._deathday"></ech-deathday>
              <ech-known-for
                :known-for="people._known_for_department"
              ></ech-known-for>
              <ech-home-page :home-page="people._homepage"></ech-home-page>
            </div>
          </div>
          <ech-synopsis
            :overview="people._biography"
            :movie-id="people._id"
            label="biography"
            class="uk-margin-medium-top"
          ></ech-synopsis>
          <ech-social-network-card-details
            :title="people._name"
            :description="people._biography"
          ></ech-social-network-card-details>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import LocateManager from '../../middleware/modules/vue/mixins/LocaleManager'
import Utils from '../../middleware/modules/vue/mixins/Utils'
import EchStarRating from './EchStarRating'
import EchSocialNetworkCardDetails from '@/components/movies/EchSocialNetworkCardDetails'
import EchHomePage from '@/components/movies/EchHomePage'
import EchOriginPlaceOfBirth from '@/components/movies/EchOriginPlaceOfBirth'
import EchBirthday from '@/components/movies/EchBirthday'
import EchKnownFor from '@/components/movies/EchKnownFor'
import EchSynopsis from '@/components/movies/EchSypnosis'
import EchDeathday from '@/components/movies/EchDeathday'

export default {
  name: 'EchPeopleCardDetails',
  components: {
    EchDeathday,
    EchSynopsis,
    EchKnownFor,
    EchBirthday,
    EchOriginPlaceOfBirth,
    EchHomePage,
    EchSocialNetworkCardDetails,
    EchStarRating
  },
  mixins: [MediaManager, LocateManager, Utils],
  props: {
    people: {
      type: Object,
      default() {
        return {}
      }
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
