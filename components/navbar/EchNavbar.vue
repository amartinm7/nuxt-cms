<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left uk-width-1-2">
        <nuxt-link class="uk-navbar-item" :to="localePath('/')">
          <img
            src="../../assets/logo/vector/default-monochrome-black.svg"
            uk-svg
            style="min-width: 50%; max-width: 60%;"
          />
        </nuxt-link>
      </div>
      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <div>
            <nuxt-link
              v-for="(locale, i) in showLocales"
              :key="i"
              :to="switchLocalePath(locale.code)"
              class="uk-link-reset ech-basic"
            >
              {{ locale.code }}
            </nuxt-link>
          </div>
        </div>
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: table"
              ></span>
              <!--
                <img
                class="uk-border-circle"
                width="32"
                height="32"
                src="https://sw25672.smartweb-static.com/upload_dir/shop/category/images-_sjove-tegninger-af-dyr_.w293.h293.fill.png"
                alt="avatar"
              /> -->
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
<style></style>
