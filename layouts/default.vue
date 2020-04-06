<template>
  <div>
    <ech-navbar></ech-navbar>
    <nuxt />
    <ech-footer></ech-footer>
    <ech-amazon-banner></ech-amazon-banner>
  </div>
</template>
<script>
import EchNavbar from '../components/navbar/EchNavbar'
import EchFooter from '../components/footer/EchFooter'
import EchAmazonBanner from '../components/amazon/EchAmazonBanner'
export default {
  components: {
    EchAmazonBanner,
    EchNavbar,
    EchFooter
  }
}
</script>
<style>
/** for debug styling
div {
  background-color: lightgrey;
  border: 1px solid green;
  padding: 1px;
  margin: 1px;
}
**/

body {
  min-width: 320px;
}

.ech-basic {
  opacity: 1;
}

.ech-basic:hover {
  opacity: 0.4;
  transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  -webkit-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
}

.ech-scroll-spy-effect {
}
</style>
