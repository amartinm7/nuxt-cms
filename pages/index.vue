<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-auto"
      >
        <a
          class="uk-button uk-button-default uk-align-center"
          href="#modal-center"
          uk-toggle
        >
          <img
            src="https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg"
            alt="poster-cover"
          />
        </a>
      </div>
      <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close>
            Close
          </button>
          <iframe
            src="https://www.youtube-nocookie.com/embed/Yj0l7iGKh8g?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
            width="1920"
            height="1080"
            frameborder="0"
            uk-responsive
            uk-video="automute: false"
            title="main-cover"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="uk-section uk-section-xsmall">
      <ul uk-tab class="uk-flex uk-flex-around">
        <li class="uk-active ech-basic">
          <a href="#" uk-icon="icon: video-camera"></a>Trending Movies
        </li>
        <li class="ech-basic">
          <a href="#" uk-icon="icon: tv"></a>Trending TV Shows
        </li>
      </ul>
      <div class="uk-switcher">
        <div class="uk-active">
          <movies-card
            :movies="trendingMovies._results"
            class="ech-scroll-spy-effect"
          ></movies-card>
        </div>
        <div>
          <tv-show-card
            :movies="trendingTVShows._results"
            class="ech-scroll-spy-effect"
          ></tv-show-card>
        </div>
      </div>
    </section>
    <amazon-banner></amazon-banner>
  </div>
</template>
<!-- eslint-disable -->
<!-- eslint-enable -->

<script>
import AmazonBanner from '../components/amazon/AmazonBanner'
import MoviesCard from '../components/movies/MoviesCard'
import ApplicationFacadeFactoryBean from '../middleware/framework/facade/ApplicationFacadeFactoryBean'
import TvShowCard from '../components/movies/TVShowCard'

export default {
  components: { TvShowCard, MoviesCard, AmazonBanner },
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const getTrendingMoviesResponse = await ApplicationFacadeFactoryBean.getTrendingMoviesController().getTrendingMovies()
    const trendingMovies = {
      ...getTrendingMoviesResponse
    }

    const getTrendingTVShowsResponse = await ApplicationFacadeFactoryBean.getTrendingMoviesController().getTrendingTVShows()
    const trendingTVShows = {
      ...getTrendingTVShowsResponse
    }
    console.log(JSON.stringify(trendingTVShows))
    return { trendingMovies, trendingTVShows }
  },
  data() {
    return {
      trendingMovies: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      },
      trendingTVShows: {
        _page: 1,
        _total_pages: 1,
        _total_results: 1,
        _results: []
      }
    }
  },
  created() {},
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  },
  head() {
    return {
      title: 'Estrenos Cine Hoy',
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
}
</script>

<style></style>
