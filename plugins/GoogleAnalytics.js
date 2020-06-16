import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

const getGDPR = localStorage.getItem('GDPR:accepted')

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
  Vue.use(vueAnalytics, {
    id: process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID,
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  Vue.use(vueAnalytics, {
    id: process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID,
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
}
