import { commandActions } from '../store/commandActions/commandActionsStore'
import MediaTypes from '../middleware/modules/domain/MediaTypes'

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

const dynamicRoutes = () => {
  // fetching tvs
  return ['es', 'en']
    .flatMap((language) => {
      return dynamicRoutesBy(language)
    })
    .concat('/es/tv/details/76669-lite')
}

export default dynamicRoutes
/**
module.exports = function() {
  this.nuxt.hook('generate:extendRoutes', (routes) => {
    routes.splice(0, routes.length, ...dynamicRoutes())
  })
}
*/
