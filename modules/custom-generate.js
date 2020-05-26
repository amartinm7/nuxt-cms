import { commandActions } from '../store/commandActions/commandActionsStore'

const dynamicRoutes = () => {
  // fetching tvs
  const routesForTv = Object.keys(commandActions.tv).map((action) => {
    return {
      route: `/tvshows/${action}`,
      payload: action
    }
  })
  // fetching movies
  const routesForMovies = Object.keys(commandActions.movies).map((action) => {
    return {
      route: `/movies/${action}`,
      payload: action
    }
  })
  return routesForTv.concat(routesForMovies)
}

module.exports = function() {
  this.nuxt.hook('generate:extendRoutes', (routes) => {
    routes.splice(0, routes.length, ...dynamicRoutes())
  })
}
