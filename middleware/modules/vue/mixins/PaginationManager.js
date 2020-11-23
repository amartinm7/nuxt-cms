/* eslint-disable camelcase, no-console */
export default {
  props: {
    page: {
      type: Number,
      default() {
        return 1
      }
    },
    totalPages: {
      type: Number,
      default() {
        return 2
      }
    }
  },
  computed: {
    toPrevious() {
      return this.page > 1 ? this.page - 1 : 1
    },
    toNext() {
      return this.page < this.totalPages ? this.page + 1 : this.totalPages
    }
  }
}
