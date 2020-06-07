import Vue from 'vue'
// eslint-disable-next-line import/default
import { formatMoney } from 'accounting-js'
import Abbreviate from '../middleware/framework/modules/abbreviate/Abbreviate'

Vue.filter('currency', function(money) {
  return formatMoney(money)
})

Vue.filter('abbreviate', function(number) {
  return Abbreviate.abbreviateNumber(number)
})
