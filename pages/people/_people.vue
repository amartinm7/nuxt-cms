<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-people-card-details :people="people"></ech-people-card-details>
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
import EchDisqus from '../../components/disqus/EchDisqus'
import { GetPeopleDetailsControllerRequest } from '../../middleware/modules/people/getDetails/userapplication/controller/GetPeopleDetailsController'
import { BeanContainerRegistry } from '../../middleware/BeanContainerRegistry'
import EchPeopleCardDetails from '../../components/movies/EchPeopleCardDetails'
import DetailsHeaderManager from '../../middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestDetailsHeaderManager from '../../middleware/modules/vue/mixins/RequestDetailsHeaderManager'
import DetailsPeopleManager from '../../middleware/modules/vue/mixins/DetailsPeopleManager'

const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchPeopleDetails',
  scrollToTop: true,
  components: {
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
    console.log(params.people)
    const getPeopleDetailsControllerResponse = await beanContainer.getPeopleDetailsController.execute(
      new GetPeopleDetailsControllerRequest({ person_id, language })
    )
    const people = {
      ...getPeopleDetailsControllerResponse
    }
    return {
      people
    }
  },
  data() {
    return {
      people: {}
    }
  }
}
</script>
<style></style>
