<template>
  <div id="tm-bottom" class="uk-section-image">
    <div
      class="uk-background-norepeat uk-background-cover uk-background-top-right uk-section uk-section-large"
      style="background-color: rgb(255, 255, 255); "
    >
      <div class="uk-container uk-container-expand">
        <div class="uk-child-width-expand@m uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-first-column">
            <div id="widget-text-1" class="uk-panel widget-text">
              <div class="uk-panel textwidget">
                <h2 class="uk-text-center">
                  <img
                    src="../../assets/logo/vector/isolated-monochrome-black.svg"
                    alt="EstrenosCineHoy"
                    title="EstrenosCineHoy"
                    loading="lazy"
                    style="width: 7%"
                    class="uk-margin-small-right"
                    uk-svg
                  />
                  Stay Tunned
                </h2>
                <p
                  class="uk-margin-medium-bottom uk-width-large uk-margin-auto uk-text-center uk-text-large"
                >
                  Subscribe to recibe the lastest news
                </p>
                <div class="uk-text-center">
                  <nuxt-link
                    class="uk-button uk-button-primary ech-basic"
                    :to="localePath('/')"
                    >Contact</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EchContactFooterMain'
}
</script>
