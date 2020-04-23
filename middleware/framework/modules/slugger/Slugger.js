// https://github.com/HenrikJoreteg/slugger/blob/master/slugger.js
//
/* eslint-disable camelcase, no-console */
export default class Slugger {
  // replaces all whitespace with '-' and removes
  static _slugger(string, opts) {
    const whitespace = /\s+/g
    opts || (opts = {})
    let allowedCharacters = 'A-Za-z0-9_ -'
    if (opts.alsoAllow) allowedCharacters = opts.alsoAllow + allowedCharacters
    const re = new RegExp('[^' + allowedCharacters + ']', 'g')
    const maintainCase = opts.maintainCase || false
    const replacement = opts.replacement || '-'
    const smartTrim = opts.smartTrim
    const decode = opts.decode !== false
    let result
    let lucky

    if (typeof string !== 'string') return ''
    if (!maintainCase) string = string.toLowerCase()
    if (decode) string = decodeURIComponent(string)
    result = string
      .trim()
      .replace(re, '')
      .replace(whitespace, replacement)
    if (smartTrim && result.length > smartTrim) {
      lucky = result.charAt(smartTrim) === replacement
      result = result.slice(0, smartTrim)
      if (!lucky) result = result.slice(0, result.lastIndexOf(replacement))
    }
    return result
  }

  static sluggify(arrayOfStrings) {
    return arrayOfStrings
      .map((it) => {
        return Slugger._slugger(`${it}`)
      })
      .join('-')
  }
}
