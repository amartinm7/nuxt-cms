/* eslint-disable camelcase, no-console */
import { BeanContainerRegistry } from './BeanContainerRegistry'

const actions = {
  tv: {
    tv1: BeanContainerRegistry.getBeanContainer()
      .getAiringTodayTvShowController,
    tv2: BeanContainerRegistry.getBeanContainer().getOnTheAirTvShowController,
    tv3: BeanContainerRegistry.getBeanContainer().getPopularTvShowController,
    tv4: BeanContainerRegistry.getBeanContainer().getTopRatedTvShowController,
    tv5: BeanContainerRegistry.getBeanContainer().findMoviesByController
  },
  movie: {
    mv1: BeanContainerRegistry.getBeanContainer().getNowPlayingMoviesController,
    mv2: BeanContainerRegistry.getBeanContainer().getPopularMoviesController,
    mv3: BeanContainerRegistry.getBeanContainer().getTopRatedMoviesController,
    mv4: BeanContainerRegistry.getBeanContainer().getUpcomingMoviesController,
    mv5: BeanContainerRegistry.getBeanContainer().findMoviesByController
  }
}

const actionCodes = {
  tv: {
    tv1: 'airingToday',
    tv2: 'onTheAirTv',
    tv3: 'tvmania',
    tv4: 'topRated'
  },
  movie: {
    mv1: 'nowPlaying',
    mv2: 'cinemania',
    mv3: 'topRated',
    mv4: 'upcoming'
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

  static getActionCodes() {
    return actionCodes
  }
}
