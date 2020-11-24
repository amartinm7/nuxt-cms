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
    index: 'Estrenos cine hoy: toda la info de series de tv y cine a un click!'
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
    trending: 'Películas de Actualidad',
    tv: {
      airingToday: 'Hoy en TV',
      onTheAirTv: 'Series en TV',
      tvmania: 'TVManía',
      topRated: 'Mejores Series'
    },
    movie: {
      nowPlaying: 'Cartelera cine',
      cinemania: 'Cinemania',
      topRated: 'Top Cine: mejores Películas',
      upcoming: 'Avances cine'
    }
  },
  select: {
    language: 'Idiomas'
  },
  switcher: {
    trendingMovies: 'Tendencia Cine',
    trendingMoviesTip: 'Ver Tendencias en Cine',
    trendingTVShows: 'Tendencia Series TV',
    trendingTVShowsTip: 'Ver Tendencias en Series TV'
  },
  sliderSwitcher: {
    credits: 'Reparto',
    posters: 'Posters',
    trailers: 'Trailers',
    staff: 'Equipo',
    seasons: 'Temporadas'
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
  synopsis: 'Sinopsis',
  knownFor: 'Conocido por',
  birthDay: 'Fecha Nacimiento',
  runtime: 'Duración',
  budget: 'Presupuesto',
  revenue: 'Ingresos',
  networks: 'Canal',
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
  similarMovies: 'Películas similares',
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
  numOfEpisodes: 'Número de episodios',
  friendNetworkCastellana100:
    'Web amiga, visitanos aqui: www.castellana100bicishop.com',
  friendNetwork: 'Web amiga',
  search: 'Búsqueda',
  numEpisodes: 'Número de Episodios',
  episode: 'Episodio',
  originalTitle: 'Título original',
  postersBy: 'Posters de {name}',
  creditsBy: 'Reparto de {name}',
  staffBy: 'Equipo de {name}',
  seasonsBy: 'Temporadas de {name}',
  videosBy: 'Videos de {name}',
  recommendedMovies: 'Películas Recomendadas',
  recommendedTvShows: 'Series Recomendadas',
  reviewBy: '{name} dice:'
}
