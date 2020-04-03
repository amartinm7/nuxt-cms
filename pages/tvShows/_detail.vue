<template>
  <div>
    <section class="uk-section uk-section-large">
      <div
        class="uk-section uk-dark uk-background-cover"
        style="background-image: url(https://image.tmdb.org/t/p/w1000_and_h563_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg)"
      >
        <article
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-inline uk-dark"
          uk-grid
        >
          <div
            class="uk-position-relative uk-visible-toggle uk-overlay uk-overlay-default"
          >
            <span class="uk-card-badge uk-label-success ech-basic">
              &nbsp;{{ movie._vote_average.toFixed(1) }}&nbsp;
            </span>
            <a
              class="uk-button uk-button-default uk-align-center"
              :href="`#openVideo_${movie._id}`"
              uk-toggle
              @click="initVideoURL(movie)"
            >
              <img :src="movie._poster_path" alt="poster-cover" />
            </a>
          </div>
          <div class="uk-overlay uk-overlay-default">
            <div class="uk-card-body ">
              <h3 class="uk-card-title ech-basic">
                {{ movie._title }}&nbsp;<span class="uk-label">
                  {{ movie._id }}</span
                >
              </h3>
              <p class="uk-dropcap">{{ movie._overview }}</p>
            </div>
            <div class="uk-flex uk-flex-right uk-width-auto">
              <div
                v-for="genre in getThisGenres"
                :key="genre._id"
                :todo="genre"
                class="uk-padding-small"
              >
                <span class="uk-label-warning ech-basic">
                  &nbsp;{{ genre._name }}&nbsp;
                </span>
              </div>
            </div>
          </div>
          <div :id="`openVideo_${movie._id}`" class="uk-flex-top" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
              <button class="uk-modal-close-default" type="button" uk-close>
                Close
              </button>
              <div :id="`videoFrame_${movie._id}`"></div>
            </div>
          </div>
        </article>

        <div class="uk-container">
          <h3>Section with Images</h3>

          <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <amazon-banner></amazon-banner>
  </div>
</template>
<script>
import AmazonBanner from '../../components/amazon/AmazonBanner'

export default {
  components: { AmazonBanner },
  // eslint-disable-next-line require-await
  data() {
    return {
      movie: {
        _id: 181812,
        _tittle: 'Star Wars: The Rise of Skywalker',
        _vote_average: 7,
        _poster_path:
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2//db32LaOibwEliAmSL2jjDF6oDdj.jpg',
        _overview:
          'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
        index: 1
      },
      genres: [
        {
          _id: '1',
          _name: 'sci-fy'
        }
      ]
    }
  },
  created() {},
  methods: {},
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
