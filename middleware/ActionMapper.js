/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from './BeanContainerRegistry'

const actions = {
  tv: {
    airingToday: BeanContainerRegistry.getBeanContainer()
      .getAiringTodayTvShowController,
    onTheAirTv: BeanContainerRegistry.getBeanContainer()
      .getOnTheAirTvShowController,
    tvmania: BeanContainerRegistry.getBeanContainer()
      .getPopularTvShowController,
    topRated: BeanContainerRegistry.getBeanContainer()
      .getTopRatedTvShowController,
    byGenres: BeanContainerRegistry.getBeanContainer().findMoviesByController
  },
  movie: {
    nowPlaying: BeanContainerRegistry.getBeanContainer()
      .getNowPlayingMoviesController,
    cinemania: BeanContainerRegistry.getBeanContainer()
      .getPopularMoviesController,
    topRated: BeanContainerRegistry.getBeanContainer()
      .getTopRatedMoviesController,
    upcoming: BeanContainerRegistry.getBeanContainer()
      .getUpcomingMoviesController,
    byGenres: BeanContainerRegistry.getBeanContainer().findMoviesByController
  }
}

export default class ActionMapper {
  static getController({ mediaType, action }) {
    return actions[mediaType][action]
  }

  static async getTrending({ language, mediaType, action, page }) {
    return await ActionMapper.getController({
      mediaType,
      action
    }).execute({ language, page })
  }
}
