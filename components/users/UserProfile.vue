<template>
  <div
    uk-scrollspy="cls: uk-animation-fade; target: .ma-scroll-spy-effect; delay: 200; repeat: true"
  >
    <div></div>
    <section class="uk-section uk-section-xsmall uk-padding-remove-bottom">
      <div class="uk-grid-small uk-flex-middle uk-flex-around" uk-grid>
        <div class="uk-width-auto">
          <div class="uk-width-auto">
            <a href="#offcanvas-usage" uk-toggle uk-icon="icon: menu"></a>
            <div id="offcanvas-usage" uk-offcanvas="overlay: true">
              <div class="uk-offcanvas-bar">
                <button
                  class="uk-offcanvas-close"
                  type="button"
                  uk-close
                ></button>
                <div>
                  <img
                    class="uk-border-circle"
                    width="128"
                    height="128"
                    src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png"
                  />
                </div>
                <div class="uk-width-expand">
                  <h6 class="uk-card-subtitle uk-margin-remove-bottom"></h6>
                  <p class="uk-text-meta uk-margin-remove-top"></p>
                </div>
                <ul
                  class="uk-nav uk-nav-default"
                  uk-accordion="collapsible: false"
                >
                  <li class="uk-nav-divider"></li>
                  <li class="uk-parent uk-open">
                    <a href="#" class="uk-accordion-title"
                      ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: table"
                      ></span
                      >Tús anuncios</a
                    >
                    <ul class="uk-nav-sub uk-accordion-content">
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: pencil"
                          />Publicar anuncios</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: star"
                          />Destacar anuncios</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: heart"
                          />Mis favoritos</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: search"
                          />Mis busquedas</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: comments"
                          />Mis mensajes</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: home"
                          />Mi tienda</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="uk-parent uk-open">
                    <a href="#" class="uk-accordion-title"
                      ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: thumbnails"
                      ></span
                      >Mi Perfil</a
                    >
                    <ul class="uk-nav-sub uk-accordion-content">
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: user"
                          />Cuenta y privacidad</a
                        >
                      </li>
                      <li>
                        <a href="#" target="_blank"
                          ><span
                            class="uk-margin-small-right uk-icon"
                            uk-icon="icon: question"
                          />Ayuda</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="uk-nav-divider"></li>
                  <li>
                    <a @click="onLogout"
                      ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: sign-out"
                      ></span
                      >Salir</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-auto"></div>
        <div class="uk-width-auto"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`
    }
  }
}
</script>

<style></style>
