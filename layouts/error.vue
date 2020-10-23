<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-header-main @outbound-open-video-modal="playVideo"></ech-header-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <nuxt-link :to="getHomeURL()" class="uk-link-reset">
        <h1 class="uk-text-center">Estrns cine hoy</h1>
      </nuxt-link>
    </section>
  </div>
</template>
<script>
import EchHeaderMain from '@/layouts/header/EchHeaderMain'
import VideoControllerManager from '@/middleware/modules/vue/mixins/VideoControllerManager'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
export default {
  name: 'ErrorVue',
  components: { EchHeaderMain },
  mixins: [VideoControllerManager, DetailsHeaderManager],
  methods: {
    getHomeURL() {
      return `/${this.$i18n.locale}`
    }
  }
}
</script>
