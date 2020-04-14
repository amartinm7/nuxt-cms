<template>
  <div>
    <ech-navbar-main></ech-navbar-main>
    <nuxt :key="$route.fullPath" />
    <ech-contact-footer-main></ech-contact-footer-main>
    <ech-footer-main></ech-footer-main>
  </div>
</template>
<script>
import EchNavbarMain from '../components/navbar/EchNavbarMain'
import EchContactFooterMain from '../components/footer/EchContactFooterMain'
import EchFooterMain from '../components/footer/EchFooterMain'
export default {
  components: {
    EchNavbarMain,
    EchContactFooterMain,
    EchFooterMain
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
