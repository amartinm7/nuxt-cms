<template>
  <div v-if="isOpen">
    <nuxt-link to="/privacyPolicy">Privacy Policy</nuxt-link>
    <div uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <h3>Notice</h3>
      <p>
        We use cookies to provide our services and for analytics and marketing.
        To find out more about our use of cookies, please see our. Click accept
        for the best user experience on our app.
      </p>
      <input class="uk-checkbox" type="checkbox" @click="accept" />{{
        buttonTextAccept
      }}
      <input class="uk-range" type="range" @click="deny" />{{ buttonTextDeny }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchCookieMessage',
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny'
    },
    message: {
      type: String,
      default:
        'We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>
