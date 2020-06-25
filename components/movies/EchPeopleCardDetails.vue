<template>
  <div>
    <h1 class="uk-text-large ech-basic uk-text-center uk-hidden@s">
      {{ people._name }}
    </h1>
    <h1 class="ech-basic uk-text-center uk-visible@s">
      {{ people._name }}
    </h1>
    <article
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin ech-scrollspy-effect"
      uk-grid
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
      >
        <div class="uk-width-expand">
          <a class="uk-button uk-button-default uk-align-center">
            <img
              class="ech-default-img"
              :src="getPosterURL(people._profile_path)"
              :alt="people._name"
              :title="people._name"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title ech-basic uk-text-center">
            {{ people._name }} ({{ people._birthday | moment('YYYY') }})
            <span
              :id="people._id"
              class="uk-label ech-basic ech-spin-icon"
              @click.stop.prevent="toClipboard(people._id)"
              >{{ people._id }}</span
            >
          </h3>
          <p>
            <ech-star-rating :rating-value="people._popularity / 2">
            </ech-star-rating>
          </p>
          <div
            class="uk-flex uk-flex-center uk-width-auto uk-text-italic uk-margin-medium"
          >
            <div>
              <span
                v-if="people._place_of_birth"
                class="uk-label uk-label-success ech-basic"
                uk-icon="icon: location; ratio: 0.75;"
              >
                {{ $t('origin') }}:
                {{ people._place_of_birth }}
              </span>

              <span
                v-if="people._birthday"
                class="uk-label uk-label-success ech-basic"
                uk-icon="icon: calendar; ratio: 0.75;"
              >
                {{ $t('birthDay') }}:
                {{ people._birthday | moment('DD-MMMM-YYYY') }}
              </span>

              <span
                v-if="people._known_for_department"
                class="uk-label uk-label-success ech-basic"
                uk-icon="icon: user; ratio: 0.75;"
              >
                {{ $t('knownFor') }}: {{ people._known_for_department }}
              </span>
            </div>
          </div>
          <div v-if="people._biography" class="uk-width-auto">
            <h3 class="uk-text-center">{{ $t('biography') }}</h3>
            <p class="uk-dropcap uk-text-justify">{{ people._biography }}</p>
          </div>
          <div class="uk-flex uk-flex-center">
            <p>
              <span
                v-for="genre in people._genres"
                :key="genre._id"
                :todo="genre"
                class="uk-label uk-label-warning uk-margin-small-left ech-basic"
              >
                {{ genre.name }}
              </span>
            </p>
          </div>
          <div>
            <p v-if="people._homepage" class="uk-text-meta">
              Homepage:
              <a
                :href="people._homepage"
                :alt="people._name"
                class="uk-text-lead uk-text-small"
              >
                {{ people._homepage }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '../../middleware/modules/vue/mixins/MediaManager'
import LocateManager from '../../middleware/modules/vue/mixins/LocateManager'
import Utils from '../../middleware/modules/vue/mixins/Utils'
import EchStarRating from './EchStarRating'

export default {
  name: 'EchPeopleCardDetails',
  components: { EchStarRating },
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
