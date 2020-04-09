/* eslint-disable camelcase, no-console */
export default class Configuration {
  constructor({ axios, accessToken }) {
    this.axios = axios
    this.accessToken = accessToken
  }
}
