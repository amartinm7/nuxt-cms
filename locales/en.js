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
    trending: 'Trending movies',
    tv: {
      airingToday: 'Airing Today on TV',
      onTheAirTv: 'On the Air TV',
      tvmania: 'TVMania',
      topRated: 'Top Rated on TV'
    },
    movie: {
      nowPlaying: 'Now in cinemas',
      cinemania: 'Cinemania',
      topRated: 'Top Rated Movies',
      upcoming: 'Upcoming Movies'
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
    trailers: 'Trailers',
    staff: 'Staff',
    seasons: 'Seasons'
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
  producer: 'Producer',
  recommended: 'Recomended',
  recommendedForAllPeople: 'All people',
  recommendedOnlyAdults: 'Only adults',
  synopsis: 'Synopsis',
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
  shareBySocialNetworkTip: 'Share this page to your friends!',
  nextResults: 'Next results',
  previousResults: 'Previous results',
  clickToSeeMoreAbout: 'Click to see more about this network',
  moreRelatedTvShows: 'Similar tv shows',
  moreRelatedMovies: 'Similar movies',
  similarTvShows: 'Similar series',
  similarMovies: 'Similar movies',
  appearOnMovies: `{name} movies`,
  appearOnTvShows: '{name} series & tv shows',
  male: 'Male',
  female: 'Female',
  premiere: `Premier`,
  premiereWithNetwork: `Premier {name}`,
  genresLabel: 'Genres',
  moreAbout: 'More about {name}',
  technicalDetails: 'Technical Details',
  createdBy: 'Created by',
  numOfSeasons: 'Number of seasons',
  numOfEpisodes: 'Number of episodes',
  friendNetworkCastellana100:
    'Friend Network, visit us here: www.castellana100bicishop.com',
  friendNetwork: 'Friend Network',
  search: 'Search',
  numEpisodes: 'Episodes Number',
  episode: 'Episode',
  originalTitle: 'Original title',
  postersBy: '{name} Posters',
  creditsBy: '{name} Credits',
  staffBy: '{name} Staff',
  seasonsBy: '{name} Seasons',
  videosBy: '{name} Videos',
  recommendedMovies: 'Recommended Movies',
  recommendedTvShows: 'Recomendadas Series',
  reviewBy: '{name} says:'
}
