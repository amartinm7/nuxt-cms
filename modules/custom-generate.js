import { commandActions } from '../store/commandActions/commandActionsStore'
import MediaTypes from '../middleware/modules/domain/MediaTypes'

const dynamicRoutes = () => {
  // fetching tvs
  const routesForTv = Object.keys(commandActions[MediaTypes.tv]).map(
    (action) => {
      return {
        route: `/${MediaTypes.tv}/${action}`,
        payload: action
      }
    }
  )
  // fetching movie
  const routesForMovies = Object.keys(commandActions[MediaTypes.movie]).map(
    (action) => {
      return {
        route: `/${MediaTypes.movie}/${action}`,
        payload: action
      }
    }
  )
  return routesForTv.concat(routesForMovies)
}

module.exports = function() {
  this.nuxt.hook('generate:extendRoutes', (routes) => {
    routes.splice(0, routes.length, ...dynamicRoutes())
  })
}
