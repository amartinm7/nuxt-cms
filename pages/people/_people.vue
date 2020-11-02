<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-people-card-details :people="people"></ech-people-card-details>
    </section>
    <section
      v-if="
        people._movie_credits._cast && people._movie_credits._cast.length > 0
      "
      class="uk-section uk-section-xsmall"
    >
      <h2 class="uk-text-center">
        {{ $t('appearOnMovies', { name: people._name }) }}
      </h2>
      <ech-slider-main
        :movies="people._movie_credits._cast"
        :media-type="mediaTypeMovie"
      >
      </ech-slider-main>
    </section>
    <section
      v-if="people._tv_credits._cast && people._tv_credits._cast.length > 0"
      class="uk-section uk-section-xsmall"
    >
      <h2 class="uk-text-center">
        {{ $t('appearOnTvShows', { name: people._name }) }}
      </h2>
      <ech-slider-main
        :movies="people._tv_credits._cast"
        :media-type="mediaTypeTvShow"
      >
      </ech-slider-main>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-disqus></ech-disqus>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import EchDisqus from '@/components/disqus/EchDisqus'
import { GetPeopleDetailsControllerRequest } from '@/middleware/modules/people/getDetails/userapplication/controller/GetPeopleDetailsController'
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import EchPeopleCardDetails from '@/components/movies/EchPeopleCardDetails'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestDetailsHeaderManager from '@/middleware/modules/vue/mixins/RequestDetailsHeaderManager'
import DetailsPeopleManager from '@/middleware/modules/vue/mixins/DetailsPeopleManager'
import EchSliderMain from '@/components/slider/EchSliderMain'
import EchNetworksNavBar from '~/layouts/networksbar/EchNetworksNavBar'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchPeopleDetails',
  scrollToTop: true,
  components: {
    EchNetworksNavBar,
    EchSliderMain,
    EchPeopleCardDetails,
    EchDisqus
  },
  mixins: [
    DetailsHeaderManager,
    RequestDetailsHeaderManager,
    DetailsPeopleManager
  ],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const person_id = params.people.split('-')[0]
    const getPeopleDetailsControllerResponse = await beanContainer.getPeopleDetailsController.execute(
      new GetPeopleDetailsControllerRequest({ person_id, language })
    )
    return {
      people: getPeopleDetailsControllerResponse
    }
  },
  data() {
    return {
      people: {},
      mediaTypeMovie: MediaTypes.movie,
      mediaTypeTvShow: MediaTypes.tv
    }
  }
}
</script>
<style></style>
