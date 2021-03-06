const _isEmpty = require('lodash.isempty')

export default {
  methods: {
    toClipboard(id) {
      const range = document.createRange()
      range.selectNode(document.getElementById(id))
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
    },
    inNotEmpty(object) {
      return !_isEmpty(object)
    }
  }
}
