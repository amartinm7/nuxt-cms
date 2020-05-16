export default {
  computed: {
    credits() {
      return this.movies[0]._credits.filter((credit) => !!credit.profile_path)
    }
  }
}
