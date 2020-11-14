export default class GetRuntimeHoursResponse {
  constructor({ runtime }) {
    this._runtime = runtime
  }

  getRuntimeByHours() {
    const time = this._runtime ?? 0
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return `${hours}h ${minutes}min`
  }
}
