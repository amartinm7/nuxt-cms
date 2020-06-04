<template>
  <div
    class="uk-container uk-container-large"
    uk-scrollspy="cls: uk-animation-fade; target: .ech-scrollspy-effect; delay: 300; repeat: false"
  >
    <ech-navbar-main-new></ech-navbar-main-new>
    <nuxt :key="$route.fullPath" class="ech-scrollspy-effect" />
    <ech-contact-footer-main></ech-contact-footer-main>
    <ech-footer-main></ech-footer-main>
  </div>
</template>
<script>
import EchNavbarMainNew from './navbar/EchNavbarMainNew'
import EchContactFooterMain from './footer/EchContactFooterMain'
import EchFooterMain from './footer/EchFooterMain'
export default {
  name: 'EchLayoutDefault',
  components: {
    EchNavbarMainNew,
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

.ech-scrollspy-effect {
}

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

.ech-spin-icon {
  transition: all 0.5s ease-in-out 0s;
}

.ech-spin-icon:hover {
  cursor: default;
  transform: rotate(360deg);
  transition: all 0.5s ease-in-out 0s;
}

.page-enter-active {
  animation: bounce-in 0.8s;
}
.page-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
