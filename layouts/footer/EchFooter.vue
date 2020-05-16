<template>
  <div class="uk-section uk-section-default">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <nuxt-link
          to="/"
          class="uk-link-reset ech-basic"
          style="cursor: default"
          ><img
            src="../../assets/logo/vector/default-monochrome-black.svg"
            alt="logo"
            style="width: 50%"
            uk-svg
        /></nuxt-link>
      </div>
      <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <ech-social-media></ech-social-media>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
import EchSocialMedia from './EchSocialMedia'
export default {
  name: 'EchFooter',
  components: { EchSocialMedia }
}
</script>
