<template>
  <div>
    <div class="uk-flex uk-flex-between ech-scrollspy-effect">
      <nuxt-link
        class="uk-margin-small-right uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: minus;"
        :uk-tooltip="$t('previousResults')"
        :to="
          getTrendingURL({
            actionNameIndex,
            mediaType,
            language,
            page: toPrevious
          })
        "
      ></nuxt-link>
      <span></span>
      <nuxt-link
        class="uk-margin-small-left uk-icon ech-spin-icon uk-margin-small-top"
        uk-icon="icon: plus;"
        :uk-tooltip="$t('nextResults')"
        :to="
          getTrendingURL({ actionNameIndex, mediaType, language, page: toNext })
        "
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
import PaginationManager from '@/middleware/modules/vue/mixins/PaginationManager'
import LocaleManager from '@/middleware/modules/vue/mixins/LocaleManager'
import TrendingManager from '@/middleware/modules/vue/mixins/TrendingManager'

export default {
  name: 'EchPaginationByTrending',
  mixins: [TrendingManager, PaginationManager, LocaleManager],
  props: {
    actionNameIndex: {
      type: String,
      default() {
        return ''
      }
    },
    mediaType: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
