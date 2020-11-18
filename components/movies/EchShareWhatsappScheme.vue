<template>
  <div>
    <!-- Thumbnail schema from schema.org inside for sharing with WhatsApp -->
    <link itemprop="thumbnailUrl" :href="getPosterURL(posterPath)" />
    <span
      itemprop="thumbnail"
      itemscope
      itemtype="http://schema.org/ImageObject"
    >
      <link itemprop="url" :href="getPosterURL(posterPath)" />
    </span>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import MediaManager from '@/middleware/modules/vue/mixins/MediaManager'

export default {
  name: 'EchShareWhatsappScheme',
  mixins: [MediaManager],
  props: {
    posterPath: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
