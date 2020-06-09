const SI_PREFIXES = [
  { value: 1, symbol: '' },
  { value: 1e3, symbol: 'k' },
  { value: 1e6, symbol: 'M' },
  { value: 1e9, symbol: 'G' },
  { value: 1e12, symbol: 'T' },
  { value: 1e15, symbol: 'P' },
  { value: 1e18, symbol: 'E' }
]

export default class Abbreviate {
  static abbreviateNumber(number) {
    if (!number) return 0
    if (number === 0) return number
    const tier = SI_PREFIXES.filter((n) => number >= n.value).pop()
    const numberFixed = (number / tier.value).toFixed(1)
    return `${numberFixed}${tier.symbol}`
  }
}
