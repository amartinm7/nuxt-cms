<template>
  <div>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div class="uk-flex">
        <div
          class="uk-card-media-left uk-cover-container"
          style="width: 185px; height: 278px;"
        >
          <img :src="getPosterURL(movie._poster_path, index)" alt="" uk-cover />
          <canvas width="185" height="278"></canvas>
        </div>
        <div class="uk-grid uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <span uk-icon="icon: check"></span>
          </div>
          <div>
            <span uk-icon="icon: heart"></span>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ movie._title }}</h3>
          <p>{{ movie._overview }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array
    }
  },
  name: 'MoviesCard',
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  }
}
</script>

<style></style>
