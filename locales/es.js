import moviesGenres from './es/genres/movies/genres'
import tvGenres from './es/genres/tv/genres'
import moviesSortedBy from './es/genres/movies/sortedBy'
import tvGenresSortedBy from './es/genres/tv/sortedBy'

export default {
  genres: {
    movies: moviesGenres.genres,
    tv: tvGenres.genres
  },
  sortedBy: {
    movies: moviesSortedBy.sortedBy,
    tv: tvGenresSortedBy.sortedBy
  },
  movies: 'Cine',
  seo: {
    index: 'Estrenos cine hoy: todas las series de tv y cine a un click!'
  },
  pages: {
    home: 'Estrenos cine hoy',
    accion: 'Accion',
    adventure: 'Aventura',
    scify: 'Ciencia Ficcion',
    drama: 'Drama',
    comedy: 'Comedia',
    family: 'Familia',
    news: 'Noticias',
    trending: 'Actual',
    tv: {
      airingToday: 'Hoy en TV',
      onTheAirTv: 'Series en TV',
      popular: 'Popular en TV',
      topRated: 'Top Series',
      byGenres: 'Más Series'
    },
    movies: {
      nowPlaying: 'En cines',
      popular: 'Popular en Cine',
      topRated: 'Top Cine',
      upcoming: 'Avances cine',
      byGenres: 'Más Cine'
    }
  },
  select: {
    language: 'Idiomas'
  },
  switcher: {
    trendingMovies: 'Tendencia en Cine',
    trendingTVShows: 'Tendencia en Series TV'
  },
  sliderSwitcher: {
    credits: 'Reparto',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  releaseDate: 'Fecha en cines',
  firstAirDate: 'En emision desde',
  label_sortedBy: 'Orden',
  label_genreBy: 'Género',
  label_discover_movies: 'Mas Cine',
  label_discover_tvshows: 'Mas Series',
  director: 'Director',
  screenplay: 'Screenplay'
}
