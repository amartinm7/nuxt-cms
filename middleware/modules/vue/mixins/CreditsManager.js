export default {
  computed: {
    credits() {
      const credits = this.movies[0]._credits.filter(
        (credit) => !!credit.profile_path
      )
      return credits.length < 6
        ? credits.concat(credits).concat(credits)
        : credits
    },
    posters() {
      const posters = this.movies[0]._images._posters
        .filter((poster) => !!poster._file_path)
        .filter((poster) => poster._vote_count > 1)
      return posters.length < 6
        ? posters.concat(posters).concat(posters)
        : posters
    },
    videos() {
      const videos = this.movies[0]._videos
      return videos.length < 6 ? videos.concat(videos).concat(videos) : videos
    }
  }
}
