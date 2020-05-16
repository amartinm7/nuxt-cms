/* moment for locales */

import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'vue-moment' // whatever you import here will be set as default, no need to import all locales you intend to use

Vue.use(VueMoment, { moment })
