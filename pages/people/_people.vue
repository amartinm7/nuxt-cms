<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-people-card-details :people="people"></ech-people-card-details>
    </section>
    <section
      v-if="inNotEmpty(people._movie_credits._cast)"
      class="uk-section uk-section-xsmall"
    >
      <ech-related-movies-for-person
        :media-type="mediaTypeMovie"
        :movies="people._movie_credits._cast"
        :person-name="people._name"
      ></ech-related-movies-for-person>
    </section>
    <section
      v-if="inNotEmpty(people._tv_credits._cast)"
      class="uk-section uk-section-xsmall"
    >
      <ech-related-movies-for-person
        :media-type="mediaTypeTvShow"
        :movies="people._tv_credits._cast"
        :person-name="people._name"
      ></ech-related-movies-for-person>
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
import EchNetworksNavBar from '~/layouts/networksbar/EchNetworksNavBar'
import Utils from '@/middleware/modules/vue/mixins/Utils'
import EchRelatedMoviesForPerson from '@/components/slider/EchRelatedMoviesForPerson'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchPeopleDetails',
  scrollToTop: true,
  components: {
    EchRelatedMoviesForPerson,
    EchNetworksNavBar,
    EchPeopleCardDetails,
    EchDisqus
  },
  mixins: [
    DetailsHeaderManager,
    RequestDetailsHeaderManager,
    DetailsPeopleManager,
    Utils
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
