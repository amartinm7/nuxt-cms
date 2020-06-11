import moviesGenres from './en/genres/movies/genres'
import tvGenres from './en/genres/tv/genres'
import moviesSortedBy from './en/genres/movies/sortedBy'
import tvGenresSortedBy from './en/genres/tv/sortedBy'

export default {
  genres: {
    movies: moviesGenres.genres,
    tv: tvGenres.genres
  },
  sortedBy: {
    movies: moviesSortedBy.sortedBy,
    tv: tvGenresSortedBy.sortedBy
  },
  movies: 'Movies',
  seo: {
    index: 'Estrenos cine hoy: all the tv shows and the cinema in a one click!'
  },
  pages: {
    home: 'Estrenos cine hoy',
    accion: 'Accion',
    adventure: 'Adventure',
    scify: 'Scify',
    drama: 'Drama',
    comedy: 'Comedy',
    family: 'Family',
    news: 'News',
    trending: 'Trends',
    tv: {
      airingToday: 'Airing Today on TV',
      onTheAirTv: 'On the Air TV',
      popular: 'Popular on TV',
      topRated: 'Top Rated on TV',
      byGenres: 'More Series'
    },
    movies: {
      nowPlaying: 'Now in cinemas',
      popular: 'Popular movies',
      topRated: 'Top Rated Movies',
      upcoming: 'Coming Movies',
      byGenres: 'More Movies'
    }
  },
  select: {
    language: 'Languages'
  },
  switcher: {
    trendingMovies: 'Trending Movies',
    trendingTVShows: 'Trending TV Shows'
  },
  sliderSwitcher: {
    credits: 'Cast & Characters',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  as: 'as',
  releaseDate: 'Release Date',
  firstAirDate: 'First Air Date',
  label_sortedBy: 'Sorted By',
  label_genreBy: 'Genre',
  label_genresBy: 'Genres',
  label_discover_movies: 'Discover Movies',
  label_discover_tvshows: 'Discover Series',
  director: 'Director',
  screenplay: 'Screenplay',
  runtime: 'Runtime',
  budget: 'Budget',
  revenue: 'Revenue',
  networks: 'Networks'
}
