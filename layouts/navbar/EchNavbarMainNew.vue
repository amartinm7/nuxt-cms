<template>
  <div>
    <div class="uk-hidden@m">
      <nav class="uk-navbar uk-navbar-container uk-margin">
        <div class="uk-navbar-left">
          <nuxt-link class="uk-navbar-item uk-logo" :to="localePath('/')">
            <img
              alt=""
              src="../../assets/logo/vector/default-monochrome-black.svg"
              style="width: 200px"
            />
          </nuxt-link>
        </div>
        <div class="uk-navbar-right">
          <a
            class="uk-navbar-toggle"
            uk-toggle
            uk-navbar-toggle-icon
            href="#echOffcanvas"
          ></a>
        </div>
      </nav>
      <div id="echOffcanvas" uk-offcanvas="flip: true; bg-close: true">
        <div class="uk-offcanvas-bar">
          <button
            class="uk-offcanvas-close uk-icon uk-close"
            type="button"
            uk-close=""
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close-icon"
            >
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="1"
                y1="1"
                x2="13"
                y2="13"
              ></line>
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="13"
                y1="1"
                x2="1"
                y2="13"
              ></line>
            </svg>
          </button>
          <div
            class="uk-child-width-1-1 uk-grid uk-grid-stack"
            uk-grid=""
            @click="closeMenu()"
          >
            <div class="uk-first-column">
              <div id="module-menu-mobile" class="uk-panel">
                <ul class="uk-nav uk-nav-default">
                  <li>
                    <nuxt-link :to="localePath('/')">{{
                      $t('pages.home')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <span
                      class="uk-margin-small-right uk-icon ech-spin-icon"
                      uk-icon="icon: tv; "
                    ></span>
                    TV
                  </li>
                  <ul class="uk-nav-sub">
                    <nuxt-link
                      v-for="(keyMessage, i) in showMenuListForTvShows"
                      :key="i"
                      :to="getTvShowTopListlURL(keyMessage)"
                      class="uk-link-reset"
                    >
                      <li>
                        <span
                          class="uk-margin-small-right uk-icon ech-spin-icon"
                          uk-icon="icon: play; "
                        ></span
                        >{{ translateKeyMessageForTvShows(keyMessage) }}
                      </li>
                    </nuxt-link>
                  </ul>
                  <li>
                    <span
                      class="uk-margin-small-right uk-icon ech-spin-icon"
                      uk-icon="icon: video-camera; "
                    ></span>
                    {{ $t('movies') }}
                  </li>
                  <ul class="uk-nav-sub">
                    <nuxt-link
                      v-for="(keyMessage, i) in showMenuListForMovies"
                      :key="i"
                      :to="getMoviesTopListlURL(keyMessage)"
                      class="uk-link-reset"
                    >
                      <li>
                        <span
                          class="uk-margin-small-right uk-icon ech-spin-icon"
                          uk-icon="icon: play; "
                        ></span
                        >{{ translateKeyMessageForMovies(keyMessage) }}
                      </li>
                    </nuxt-link>
                  </ul>
                  <li>
                    <hr />
                  </li>
                  <li>
                    {{ $t('select.language') }}
                  </li>
                  <ul class="uk-nav-sub">
                    <nuxt-link
                      v-for="(locale, i) in showLocales"
                      :key="i"
                      :to="switchLocalePath(locale.code)"
                      class="uk-link-reset"
                    >
                      <li>
                        <span
                          class="uk-margin-small-right uk-icon ech-spin-icon"
                          uk-icon="icon: world; "
                        ></span
                        >{{ locale.name }}
                      </li>
                    </nuxt-link>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-visible@m" uk-header="">
      <div>
        <div class="uk-container uk-padding">
          <div class="uk-text-center">
            <nuxt-link :to="localePath('/')" class="uk-logo">
              <img
                alt="EstrenosCineHoy"
                src="../../assets/logo/vector/default-monochrome-black.svg"
                style="width: 400px"/>
              <img
                class="uk-logo-inverse"
                alt="EstrenosCineHoy"
                src="../../assets/logo/vector/default-monochrome-white.svg"
                style="width: 400px"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        uk-sticky=""
        media="@m"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
        class="uk-sticky"
      >
        <div class="uk-navbar-container">
          <div class="uk-container">
            <nav
              class="uk-navbar"
              uk-navbar="{'align':'left','boundary':'!.uk-navbar-container'}"
            >
              <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                  <li class="uk-parent">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                    >
                      <span
                        class="uk-margin-small-right uk-icon ech-spin-icon"
                        uk-icon="icon: tv; "
                      ></span
                      >TV</nuxt-link
                    >
                    <div class="uk-navbar-dropdown">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <nuxt-link
                              v-for="(keyMessage, i) in showMenuListForTvShows"
                              :key="i"
                              :to="getTvShowTopListlURL(keyMessage)"
                              class="uk-link-reset"
                            >
                              <li>
                                <span
                                  class="uk-margin-small-right uk-icon ech-spin-icon"
                                  uk-icon="icon: tv; "
                                ></span
                                >{{ translateKeyMessageForTvShows(keyMessage) }}
                              </li>
                            </nuxt-link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="uk-parent">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                    >
                      <span
                        class="uk-margin-small-right uk-icon ech-spin-icon"
                        uk-icon="icon: video-camera; "
                      ></span
                      >{{ $t('movies') }}</nuxt-link
                    >
                    <div class="uk-navbar-dropdown">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <nuxt-link
                              v-for="(keyMessage, i) in showMenuListForMovies"
                              :key="i"
                              :to="getMoviesTopListlURL(keyMessage)"
                              class="uk-link-reset"
                            >
                              <li>
                                <span
                                  class="uk-margin-small-right uk-icon ech-spin-icon"
                                  uk-icon="icon: video-camera; "
                                ></span
                                >{{ translateKeyMessageForMovies(keyMessage) }}
                              </li>
                            </nuxt-link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="uk-parent">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                    >
                      <span
                        class="uk-margin-small-right uk-icon ech-spin-icon"
                        uk-icon="icon: video-camera; "
                      ></span
                      >{{ $t('label_discover_movies') }}</nuxt-link
                    >
                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-3 uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <ech-filters-by
                              media-type-path="movies"
                            ></ech-filters-by>
                          </ul>
                        </div>
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <ech-sorted-by
                              media-type-path="movies"
                            ></ech-sorted-by>
                          </ul>
                        </div>
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >{{ $t('pages.scify') }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >{{ $t('pages.drama') }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >{{ $t('pages.comedy') }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >{{ $t('pages.family') }}</nuxt-link
                    >
                  </li>
                  <li class="uk-parent">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                      >{{ $t('select.language') }}</nuxt-link
                    >
                    <div class="uk-navbar-dropdown">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <nuxt-link
                              v-for="(locale, i) in showLocales"
                              :key="i"
                              :to="switchLocalePath(locale.code)"
                              class="uk-link-reset"
                            >
                              <li>
                                <span
                                  class="uk-margin-small-right uk-icon"
                                  uk-icon="icon: world; "
                                ></span
                                >{{ locale.name }}
                              </li>
                            </nuxt-link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="uk-sticky-placeholder"
        style="height: 70px; margin: 0px;"
        hidden=""
      ></div>
    </div>
  </div>
</template>
<script>
import EchFiltersBy from '../filter/EchFiltersBy'
import EchSortedBy from '../filter/EchSortedBy'
export default {
  name: 'EchNavbarMainNew',
  components: { EchSortedBy, EchFiltersBy },
  computed: {
    showLocales() {
      // eslint-disable-next-line no-console
      console.log('showLocales... ' + this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
    showMenuListForTvShows() {
      return Object.keys(this.$i18n.messages[this.$i18n.locale].pages.tv)
    },
    showMenuListForMovies() {
      return Object.keys(this.$i18n.messages[this.$i18n.locale].pages.movies)
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('EchNavbarMainNew')
  },
  methods: {
    translateKeyMessageForTvShows(key) {
      return this.$i18n.messages[this.$i18n.locale].pages.tv[key]
    },
    translateKeyMessageForMovies(key) {
      return this.$i18n.messages[this.$i18n.locale].pages.movies[key]
    },
    getTvShowTopListlURL(actionName) {
      const language = this.$i18n.locale
      // this.$store.dispatch(
      //   'commandActions/commandActionsStore/setActionForTvShows',
      //   actionName
      // )
      return `/${language}/tvshows/${actionName}/`
    },
    getMoviesTopListlURL(actionName) {
      const language = this.$i18n.locale
      // this.$store.dispatch(
      //   'commandActions/commandActionsStore/setActionForMovies',
      //   actionName
      // )
      return `/${language}/movies/${actionName}/`
    },
    closeMenu() {
      // eslint-disable-next-line no-console
      // console.log('closing menu')
      // this.$uikit.offcanvas('#echOffcanvas').hide()
    }
  }
}
</script>
<style></style>
