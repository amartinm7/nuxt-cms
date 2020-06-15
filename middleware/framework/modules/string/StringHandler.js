export default class StringHandler {
  static truncate(str, num) {
    const truncateNum = num ?? 50
    return str.length <= num ? str : str.slice(0, truncateNum)
  }
}
