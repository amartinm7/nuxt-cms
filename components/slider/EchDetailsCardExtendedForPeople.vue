<template>
  <div>
    <article v-if="inNotEmpty(people)">
      <ul uk-tab>
        <li>
          <a href="#">{{ $t('photography') }}</a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li>
          <div>
            <ech-card-posters
              :posters="people._images"
              :movie-name="people._name"
              label="photographyBy"
            >
            </ech-card-posters>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import Utils from '@/middleware/modules/vue/mixins/Utils'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import EchCardPosters from '@/components/slider/EchCardPosters'

export default {
  name: 'EchDetailsCardExtendedForPeople',
  components: { EchCardPosters },
  mixins: [Utils, CreditsManager],
  props: {
    people: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
