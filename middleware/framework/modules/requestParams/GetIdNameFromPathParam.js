export default class GetIdNameFromPathParam {
  static parse({ pathParam, defaultParam }) {
    const paramAsArray = pathParam?.split('-')
    const id = paramAsArray.shift()
    const nameAsArray = paramAsArray // array sin el primer elemento
    const _name = nameAsArray?.join('-')
    const _id = isNaN(id) ? defaultParam : Number(id)
    return { _id, _name }
  }
}
