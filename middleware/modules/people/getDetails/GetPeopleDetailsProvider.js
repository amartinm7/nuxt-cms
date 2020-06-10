import { GetPeopleDetailsRepository } from './infrastructure/repository/GetPeopleDetailsRepository'
import { GetPeopleDetailsService } from './application/usecase/GetPeopleDetailsService'
import { GetPeopleDetailsController } from './userapplication/controller/GetPeopleDetailsController'
/* eslint-disable camelcase, no-console */
class GetPeopleDetailsProvider {
  constructor(container) {
    container.service(
      'getPeopleDetailsRepository',
      (container) =>
        new GetPeopleDetailsRepository({ ...container.configuration })
    )
    container.service(
      'getPeopleDetailsService',
      (container) =>
        new GetPeopleDetailsService({
          getPeopleDetailsRepository: container.getPeopleDetailsRepository
        })
    )
    container.service(
      'getPeopleDetailsController',
      (container) =>
        new GetPeopleDetailsController({
          getPeopleDetailsService: container.getPeopleDetailsService
        })
    )
  }
}

export default GetPeopleDetailsProvider
