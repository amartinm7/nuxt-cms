import moviesGenres from './es/genres/movie/genres'
import tvGenres from './es/genres/tv/genres'
import moviesSortedBy from './es/genres/movie/sortedBy'
import tvGenresSortedBy from './es/genres/tv/sortedBy'
import countries from './es/countries'
import languages from './es/languages'

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
      popular: 'TV Manía',
      topRated: 'Top Series',
      byGenres: 'Más Series'
    },
    movie: {
      nowPlaying: 'En cines',
      popular: 'Cine Manía',
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
    trendingMoviesTip: 'Ver Tendencias en Cine',
    trendingTVShows: 'Tendencia en Series TV',
    trendingTVShowsTip: 'Ver Tendencias en Series TV'
  },
  sliderSwitcher: {
    credits: 'Reparto',
    posters: 'Posters',
    trailers: 'Trailers'
  },
  as: 'como',
  releaseDate: 'Fecha de estreno',
  firstAirDate: 'En emision desde',
  originalLanguage: 'Idioma Original',
  label_sortedBy: 'Orden',
  label_genreBy: 'Género',
  label_genresBy: 'Géneros',
  label_discover_movies: 'Mas Cine',
  label_discover_tvshows: 'Mas Series',
  director: 'Director',
  screenplay: 'Guion/Adaptación',
  knownFor: 'Conocido por',
  birthDay: 'Fecha Nacimiento',
  runtime: 'Duración',
  budget: 'Presupuesto',
  revenue: 'Ingresos',
  networks: 'Networks',
  origin: 'Origen',
  productionCountry: 'País de Producción',
  biography: 'Biografía',
  searchTip: 'Busca película o seríe por título',
  toogleLanguageTip: 'Selecciona idioma',
  filterTvShowsByPopularityTip: 'Busca seríes por popularidad',
  filterMoviesByPopularityTip: 'Busca películas por popularidad',
  filterTvShowsByGenreTip: 'Busca seríes por género',
  filterMoviesByGenreTip: 'Busca películas por género',
  shareBySocialNetworkTip: 'Comparte esta página a tus amigos!'
}
