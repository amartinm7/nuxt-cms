<template>
  <div>
    <div
      class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-flex-wrap"
    >
      <div class="uk-width-expand">
        &nbsp;
        <span class="uk-button uk-button-default uk-align-center"
          ><div class="uk-inline">
            <img
              :src="imageUrl"
              loading="lazy"
              :uk-tooltip="getTitle(season)"
              :alt="getTitle(season)"
              :title="getTitle(season)"
            />
            <div
              class="uk-position-center ech-basic"
              :uk-tooltip="getTitle(season)"
            ></div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'
import ValuesByDefault from '@/middleware/modules/domain/ValuesByDefault'

export default {
  name: 'EchMediaSeasonCardPicture',
  mixins: [MediaManager],
  props: {
    season: {
      type: Object,
      default() {
        return {}
      }
    },
    imageUrl: {
      type: String,
      default() {
        return ValuesByDefault.logoURLEstrenosCineHoy
      }
    }
  }
}
</script>
<style></style>
