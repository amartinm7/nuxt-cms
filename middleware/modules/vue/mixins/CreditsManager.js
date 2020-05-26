export default {
  computed: {
    credits() {
      return this.movies[0]._credits.filter(
        (credit) => !!credit.profile_path
      )
    },
    posters() {
      return this.movies[0]._images._posters
        .filter((poster) => !!poster._file_path)
        .filter((poster) => poster._vote_count > 1)
    },
    videos() {
      return this.movies[0]._videos
    }
  }
}
