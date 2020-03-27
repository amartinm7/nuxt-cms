<template>
  <div>
    <navbar></navbar>
    <nuxt />
  </div>
</template>
<script>
import Navbar from '../components/navbar/Navbar'
export default {
  components: {
    Navbar
  },
  mounted() {
    console.log(Navbar)
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
