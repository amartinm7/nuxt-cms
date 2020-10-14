<template>
  <div
    class="uk-flex uk-flex-center"
    :uk-tooltip="$t('shareBySocialNetworkTip')"
  >
    <ShareNetwork
      network="facebook"
      :url="currentURL"
      :title="defaultTitleFacebook"
      :description="defaultDescriptionFacebook"
      :quote="quote"
      hashtags="estrenoscinehoy.com"
      class="uk-link-muted"
    >
      <span
        class="uk-icon uk-margin-small-right ech-spin-icon"
        uk-icon="facebook"
      ></span>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="currentURL"
      :title="defaultTitleTwitter"
      :description="defaultDescriptionTwitter"
      :quote="quote"
      hashtags="estrenoscinehoy.com"
      class="uk-link-muted"
    >
      <span
        class="uk-icon uk-margin-small-right ech-spin-icon"
        uk-icon="twitter"
      ></span>
    </ShareNetwork>
    <ShareNetwork
      network="whatsapp"
      :url="currentURL"
      :title="defaultTitleFacebook"
      :description="defaultDescriptionFacebook"
      :quote="quote"
      hashtags="estrenoscinehoy.com"
      class="uk-link-muted"
    >
      <span
        class="uk-icon uk-margin-small-right ech-spin-icon"
        uk-icon="whatsapp"
      ></span>
    </ShareNetwork>
    <ShareNetwork
      network="email"
      :url="currentURL"
      :title="defaultTitleEmail"
      :description="description"
      :quote="quote"
      hashtags="estrenoscinehoy.com"
      class="uk-link-muted"
    >
      <span
        class="uk-icon uk-margin-small-right ech-spin-icon"
        uk-icon="mail"
      ></span>
    </ShareNetwork>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import StringHandler from '../../middleware/framework/modules/string/StringHandler'

export default {
  name: 'EchSocialNetworkCardDetails',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    description: {
      type: String,
      default() {
        return ''
      }
    },
    quote: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    currentURL() {
      return `www.estrenoscinehoy.com${this.$route.path}`
    },
    defaultTitleFacebook() {
      return `${StringHandler.truncate(this.title, 65)}`
    },
    defaultTitleTwitter() {
      return `${StringHandler.truncate(this.title, 35)}`
    },
    defaultDescriptionFacebook() {
      return `${StringHandler.truncate(this.title, 155)}`
    },
    defaultDescriptionTwitter() {
      return `${StringHandler.truncate(this.title, 65)}`
    },
    defaultTitleEmail() {
      return `estrenoscinehoy: ${this.title}`
    }
  }
}
</script>
<style></style>
