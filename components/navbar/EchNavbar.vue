<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-width-1-2">
            <nuxt-link
              :to="localePath('/')"
              class="uk-link-reset ech-basic"
              style="cursor: default"
              ><img
                src="../../assets/logo/vector/default-monochrome-black.svg"
                alt="logo"
                uk-svg
            /></nuxt-link>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active"><a href="#">Estrenos</a></li>
                <li><a href="#">Ultima Semana</a></li>
                <li><a href="#">Ultimo Mes</a></li>
                <li class="uk-nav-header">Categorias</li>
                <li><a href="#">Sfy-fy</a></li>
                <li><a href="#">Drama</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Comedia</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">
              <span uk-icon="icon: user"></span>&nbsp;Perfil
              <img
                class="uk-border-circle"
                width="32"
                height="32"
                src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png"
                alt="avatar"
              />
            </a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active">
                  <a href="#">Datos de Acceso</a>
                </li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: user"></span
                    >&nbsp;&nbsp;Usuario-password
                  </a>
                </li>
                <li class="uk-nav-header">Preferencias</li>
                <nuxt-link
                  v-for="(locale, i) in showLocales"
                  :key="i"
                  :to="switchLocalePath(locale.code)"
                >
                  <li>
                    <span uk-icon="icon: world"></span>&nbsp;{{ locale.name }}
                  </li>
                </nuxt-link>
                <li>
                  <a href="#">
                    <span uk-icon="icon: heart"></span>&nbsp;&nbsp;Favoritos
                  </a>
                </li>
                <li class="uk-nav-divider"></li>
                <li>
                  <a href="#">
                    <span uk-icon="icon: info"></span>&nbsp;&nbsp;ayuda
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  // eslint-disable-next-line require-await
  async asyncData({ route, params }) {
    console.log('navbar route...' + JSON.stringify(route))
  },
  data() {
    return {}
  },
  computed: {
    showLocales() {
      console.log('showLocales... ' + this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  },
  head() {
    return {
      title: 'Estrenos Cine Hoy',
      meta: [
        {
          name: 'keywords',
          content:
            'Estrenos de cine, peliculas tvShows hoy, programacion tvShows, Movies, TV Shows, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
}
</script>
