import GetBackDropsPostersDetailsResponse from '@/middleware/modules/domain/responses/GetBackDropsPostersDetailsResponse'
const _isEmpty = require('lodash.isempty')

/* eslint-disable camelcase */
export default class GetImageDetailsResponse {
  constructor(images) {
    if (!_isEmpty(images) && !_isEmpty(images.backdrops)) {
      this._backdrops = images.backdrops.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
    if (!_isEmpty(images) && !_isEmpty(images.posters)) {
      this._posters = images.posters.map((it) => {
        return new GetBackDropsPostersDetailsResponse(it)
      })
    }
  }
}
