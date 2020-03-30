export default class Configuration {
  constructor({ axios, accessToken }) {
    this._axios = axios
    this._accessToken = accessToken
  }
}
