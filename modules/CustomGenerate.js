import MediaTypes from '../middleware/modules/vue/mixins/MediaTypes'
const staticRoutes = require('./staticRoutes.json')

const commandActions = {
  tv: {
    airingToday: 'airingToday',
    onTheAirTv: 'onTheAirTv',
    popular: 'popular',
    topRated: 'topRated',
    byGenres: 'More Series'
  },
  movie: {
    nowPlaying: 'nowPlaying',
    popular: 'popular',
    topRated: 'topRated',
    upcoming: 'upcoming',
    byGenres: 'More Movies'
  }
}

const dynamicRoutesBy = (language) => {
  // fetching tvs
  const routesForTv = Object.keys(commandActions[MediaTypes.tv]).map(
    (action) => {
      return {
        route: `/${language}/${MediaTypes.tv}/${action}`,
        payload: action
      }
    }
  )
  // fetching movie
  const routesForMovies = Object.keys(commandActions[MediaTypes.movie]).map(
    (action) => {
      return {
        route: `/${language}/${MediaTypes.movie}/${action}`,
        payload: action
      }
    }
  )
  return routesForTv.concat(routesForMovies)
}

// const dynamicRoutes = () => {
//   // fetching tvs
//   return ['es', 'en']
//     .flatMap((language) => {
//       return dynamicRoutesBy(language)
//     })
//     .concat(staticRoutes)
// }

const dynamicRoutes = () => {
  return staticRoutes
}

export default dynamicRoutes
/**
module.exports = function() {
  this.nuxt.hook('generate:extendRoutes', (routes) => {
    routes.splice(0, routes.length, ...dynamicRoutes())
  })
}
*/
