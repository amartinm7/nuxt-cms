<template>
  <div>
    <article
      v-for="(movie, index) in movies"
      :key="movie._id"
      :todo="movie"
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-auto"
      >
        <a class="uk-button uk-button-default uk-align-center">
          <img :src="getPosterURL(movie._poster_path, index)" />
        </a>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ movie._name }} - {{ movie._id }}</h3>
          <p class="uk-dropcap">{{ movie._overview }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: 'TvShowCard',
  props: {
    movies: {
      type: Array
    }
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  }
}
</script>
<style></style>
