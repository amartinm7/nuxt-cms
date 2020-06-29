import moviesGenres from './en/genres/movie/genres'
import tvGenres from './en/genres/tv/genres'
import moviesSortedBy from './en/genres/movie/sortedBy'
import tvGenresSortedBy from './en/genres/tv/sortedBy'
import countries from './en/countries'
import languages from './en/languages'

export default {
  countries,
  languages,
  genres: {
    movie: moviesGenres.genres,
    tv: tvGenres.genres
  },
  sortedBy: {
    movie: moviesSortedBy.sortedBy,
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
      popular: 'TV Mania',
      topRated: 'Top Rated on TV',
      byGenres: 'More Series'
    },
    movie: {
      nowPlaying: 'Now in cinemas',
      popular: 'Movie Mania',
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
    trendingMoviesTip: 'Watch Trending Movies',
    trendingTVShows: 'Trending TV Shows',
    trendingTVShowsTip: 'Watch Trending TV Shows'
  },
  sliderSwitcher: {
    credits: 'Cast & Characters',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  as: 'as',
  releaseDate: 'Release Date',
  firstAirDate: 'First Air Date',
  originalLanguage: 'Original Language',
  label_sortedBy: 'Sorted By',
  label_genreBy: 'Genre',
  label_genresBy: 'Genres',
  label_discover_movies: 'Discover Movies',
  label_discover_tvshows: 'Discover Series',
  director: 'Director',
  screenplay: 'Screenplay',
  knownFor: 'Known for',
  birthDay: 'BirthDay',
  runtime: 'Runtime',
  budget: 'Budget',
  revenue: 'Revenue',
  networks: 'Networks',
  origin: 'Origin',
  productionCountry: 'Production Country',
  biography: 'Biography',
  searchTip: 'Search movie/tvshow by title',
  toogleLanguageTip: 'Choose language',
  filterTvShowsByPopularityTip: 'Find tv shows by popularity',
  filterMoviesByPopularityTip: 'Find movies by popularity',
  filterTvShowsByGenreTip: 'Find tv shows by genre',
  filterMoviesByGenreTip: 'Find movies by genre',
  shareBySocialNetworkTip: 'Share this page to your friends!'
}
