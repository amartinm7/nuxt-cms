<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <ech-networks-nav-bar></ech-networks-nav-bar>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-tv-show-season-details :season="season"></ech-tv-show-season-details>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ech-tv-show-episode-by-season-details :episodes="season._episodes">
      </ech-tv-show-episode-by-season-details>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->
<script>
/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from '@/middleware/BeanContainerRegistry'
import EchNetworksNavBar from '@/layouts/networksbar/EchNetworksNavBar'
import { GetTvSeasonsControllerRequest } from '@/middleware/modules/tvShows/getTvSeasons/userapplication/controller/GetTvSeasonsController'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import EchTvShowSeasonDetails from '@/components/movies/EchTvShowSeasonDetails'
import EchTvShowEpisodeBySeasonDetails from '@/components/movies/EchTvShowEpisodeBySeasonDetails'
import CreditsManager from '@/middleware/modules/vue/mixins/CreditsManager'
import DetailsHeaderManager from '@/middleware/modules/vue/mixins/DetailsHeaderManager'
import RequestHeader from '@/middleware/framework/modules/requestHeader/RequestHeader'
import MovieToJsonLDTransformer from '@/middleware/framework/modules/requestHeader/MovieToJsonLDTransformer'
const beanContainer = BeanContainerRegistry.getBeanContainer()

export default {
  name: 'EchTvShowSeasons',
  scrollToTop: true,
  components: {
    EchTvShowEpisodeBySeasonDetails,
    EchTvShowSeasonDetails,
    EchNetworksNavBar
  },
  mixins: [CreditsManager, DetailsHeaderManager],
  // eslint-disable-next-line require-await
  async asyncData({ app, route, params, store }) {
    const language = app.i18n.locale
    const movie_id = params.id.split('-')[0]
    const movie_name = params.id
      .substring(params.id.indexOf('-') + 1)
      ?.replace(/-/g, ' ')
    const season_number = params.index.split('-')[0]
    const getTvSeasonsControllerResponse = await beanContainer.getTvSeasonsController.execute(
      new GetTvSeasonsControllerRequest({
        movie_id,
        movie_name,
        language,
        season_number
      })
    )
    return {
      season: {
        ...getTvSeasonsControllerResponse
      }
    }
  },
  data() {
    return {
      season: {},
      mediaType: MediaTypes.tv
    }
  },
  computed: {
    requestHeader() {
      const vm = this
      return new RequestHeader({
        _title: `${vm.season._movie_name}: ${vm.season._name}`,
        _overview: vm.season._overview,
        _poster_path: vm.season._poster_path,
        _jsonLD: new MovieToJsonLDTransformer(
          vm.season,
          this.$route.path,
          this.$i18n.locale
        )
      })
    }
  }
}
</script>
<style></style>
