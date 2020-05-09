import Vue from 'vue'

import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit
