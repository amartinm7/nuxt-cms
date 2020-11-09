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
    trending: 'Peliculas de Actualidad',
    tv: {
      airingToday: 'Hoy en TV',
      onTheAirTv: 'Series en TV',
      tvmania: 'TVManía',
      topRated: 'Mejores Series'
    },
    movie: {
      nowPlaying: 'Cartelera cine',
      cinemania: 'Cinemania',
      topRated: 'Top Cine: mejores peliculas',
      upcoming: 'Avances cine'
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
    trailers: 'Trailers',
    staff: 'Equipo'
  },
  as: 'como',
  releaseDate: 'Estreno',
  firstAirDate: 'En emision desde',
  originalLanguage: 'Idioma Original',
  label_sortedBy: 'Orden',
  label_genreBy: 'Género',
  label_genresBy: 'Géneros',
  label_discover_movies: 'Mas Cine',
  label_discover_tvshows: 'Mas Series',
  director: 'Director',
  screenplay: 'Guion/Adaptación',
  producer: 'Productor',
  recommended: 'Recomendado',
  recommendedForAllPeople: 'Todos los públicos',
  recommendedOnlyAdults: 'Solo adultos',
  sypnosis: 'Sipnosis',
  knownFor: 'Conocido por',
  birthDay: 'Fecha Nacimiento',
  runtime: 'Duración',
  budget: 'Presupuesto',
  revenue: 'Ingresos',
  networks: 'Networks',
  origin: 'Origen',
  productionCountry: 'País',
  biography: 'Biografía',
  searchTip: 'Busca película o seríe por título',
  toogleLanguageTip: 'Selecciona idioma',
  filterTvShowsByPopularityTip: 'Busca seríes por popularidad',
  filterMoviesByPopularityTip: 'Busca películas por popularidad',
  filterTvShowsByGenreTip: 'Busca seríes por género',
  filterMoviesByGenreTip: 'Busca películas por género',
  shareBySocialNetworkTip: 'Comparte esta página a tus amigos!',
  nextResults: 'Siguientes resultados',
  previousResults: 'Resultados anteriores',
  clickToSeeMoreAbout: 'Pulsa para ver mas sobre este canal',
  moreRelatedTvShows: 'Series tv similares',
  moreRelatedMovies: 'Películas similares',
  similarTvShows: 'Series similares',
  similarMovies: 'Peliculas similares',
  appearOnMovies: `Películas de {name}`,
  appearOnTvShows: 'Tv & Series de {name}',
  male: 'Hombre',
  female: 'Mujer',
  premiere: `Estrenos`,
  premiereWithNetwork: `Series {name}`,
  genresLabel: 'Géneros',
  moreAbout: 'Más sobre {name}',
  technicalDetails: 'Ficha Técnica',
  createdBy: 'Creado por',
  numOfSeasons: 'Número de temporadas',
  numOfEpisodes: 'Número de episodios'
}
