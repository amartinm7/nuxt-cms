<template>
  <div>
    <div class="uk-hidden@m">
      <div
        uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
        class="uk-sticky"
      >
        <nav class="uk-navbar uk-navbar-container uk-margin">
          <div class="nav-overlay uk-navbar-left">
            <nuxt-link class="uk-navbar-item uk-logo" :to="localePath('/')">
              <img
                :alt="$t('seo.index')"
                :title="$t('seo.index')"
                loading="lazy"
                src="../../assets/logo/vector/default-monochrome-black.svg"
                style="width: 200px"
                :uk-tooltip="$t('seo.index')"
              />
            </nuxt-link>
          </div>
          <div
            class="nav-overlay uk-navbar-right"
            :uk-tooltip="$t('searchTip')"
          >
            <a
              class="uk-navbar-toggle ech-spin-icon"
              uk-search-icon
              uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
              href="#"
            ></a>
          </div>
          <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
            <div class="uk-navbar-item uk-width-expand">
              <form
                class="uk-search uk-search-default"
                @submit.prevent="doSearch"
              >
                <input
                  v-model="searchQuery"
                  class="uk-search-input"
                  type="search"
                  placeholder="Search..."
                  autofocus
                />
              </form>
            </div>
            <a
              class="uk-navbar-toggle"
              uk-close
              uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
              href="#"
            ></a>
          </div>
          <a
            class="uk-navbar-toggle"
            uk-toggle
            uk-navbar-toggle-icon
            href="#echOffcanvas"
          ></a>
        </nav>
        <div id="echOffcanvas" uk-offcanvas="flip: true; bg-close: true">
          <div class="uk-offcanvas-bar">
            <button
              class="uk-offcanvas-close uk-icon uk-close ech-spin-icon"
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
            <div class="uk-child-width-1-1 uk-grid uk-grid-stack" uk-grid="">
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
                    <!-- -->
                    <ul uk-tab>
                      <li>
                        <a href="#">
                          <span
                            class="uk-margin-small-right uk-icon ech-spin-icon"
                            uk-icon="icon: bookmark; "
                          ></span
                        ></a>
                      </li>
                      <li :uk-tooltip="$t('filterMoviesByGenreTip')">
                        <a href="#">
                          <span
                            class="uk-margin-small-right uk-icon ech-spin-icon"
                            uk-icon="icon: video-camera; "
                          ></span
                        ></a>
                      </li>
                      <li :uk-tooltip="$t('filterTvShowsByGenreTip')">
                        <a href="#">
                          <span
                            class="uk-margin-small-right uk-icon ech-spin-icon"
                            uk-icon="icon: tv; "
                          ></span
                        ></a>
                      </li>
                    </ul>

                    <ul class="uk-switcher uk-margin">
                      <!-- -->
                      <div>
                        <li :uk-tooltip="$t('filterTvShowsByPopularityTip')">
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
                            :to="getTopListlURL(keyMessage, mediaTypes.tv)"
                            class="uk-link-reset"
                          >
                            <li>
                              <span
                                class="uk-margin-small-right uk-icon ech-spin-icon"
                                uk-icon="icon: play; "
                              ></span
                              >{{
                                translateKeyMessage(keyMessage, mediaTypes.tv)
                              }}
                            </li>
                          </nuxt-link>
                        </ul>
                        <li :uk-tooltip="$t('filterMoviesByPopularityTip')">
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
                            :to="getTopListlURL(keyMessage, mediaTypes.movie)"
                            class="uk-link-reset"
                          >
                            <li>
                              <span
                                class="uk-margin-small-right uk-icon ech-spin-icon"
                                uk-icon="icon: play; "
                              ></span
                              >{{
                                translateKeyMessage(
                                  keyMessage,
                                  mediaTypes.movie
                                )
                              }}
                            </li>
                          </nuxt-link>
                        </ul>
                        <li>
                          <hr />
                        </li>
                        <li :uk-tooltip="$t('toogleLanguageTip')">
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
                      </div>
                      <!-- -->
                      <div>
                        <!-- -->
                        <ul class="uk-nav-sub">
                          <ech-filters-by
                            :media-type="mediaTypes.movie"
                          ></ech-filters-by>
                        </ul>
                        <ul class="uk-nav-sub">
                          <ech-sorted-by
                            :media-type="mediaTypes.movie"
                          ></ech-sorted-by>
                        </ul>
                        <!-- -->
                      </div>
                      <div>
                        <!-- -->
                        <ul class="uk-nav-sub">
                          <ech-filters-by
                            :media-type="mediaTypes.tv"
                          ></ech-filters-by>
                        </ul>
                        <ul class="uk-nav-sub">
                          <ech-sorted-by
                            :media-type="mediaTypes.tv"
                          ></ech-sorted-by>
                        </ul>
                        <!-- -->
                      </div>
                    </ul>
                  </ul>
                </div>
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
                :alt="$t('seo.index')"
                :uk-tooltip="$t('seo.index')"
                :title="$t('seo.index')"
                loading="lazy"
                src="../../assets/logo/vector/default-monochrome-black.svg"
                style="width: 400px"/>
              <img
                class="uk-logo-inverse"
                :alt="$t('seo.index')"
                :title="$t('seo.index')"
                loading="lazy"
                src="../../assets/logo/vector/default-monochrome-white.svg"
                style="width: 400px"
                :uk-tooltip="$t('seo.index')"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
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
              <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                  <li
                    class="uk-parent"
                    :uk-tooltip="$t('filterMoviesByGenreTip')"
                  >
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
                              :media-type="mediaTypes.movie"
                            ></ech-filters-by>
                          </ul>
                        </div>
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <ech-sorted-by
                              :media-type="mediaTypes.movie"
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
                  <li
                    class="uk-parent"
                    :uk-tooltip="$t('filterTvShowsByGenreTip')"
                  >
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                    >
                      <span
                        class="uk-margin-small-right uk-icon ech-spin-icon"
                        uk-icon="icon: tv; "
                      ></span
                      >{{ $t('label_discover_tvshows') }}</nuxt-link
                    >
                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-3 uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <ech-filters-by
                              :media-type="mediaTypes.tv"
                            ></ech-filters-by>
                          </ul>
                        </div>
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <ech-sorted-by
                              :media-type="mediaTypes.tv"
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
                  <li
                    class="uk-parent"
                    :uk-tooltip="$t('filterMoviesByPopularityTip')"
                  >
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
                              :to="getTopListlURL(keyMessage, mediaTypes.movie)"
                              class="uk-link-reset"
                            >
                              <li>
                                <span
                                  class="uk-margin-small-right uk-icon ech-spin-icon"
                                  uk-icon="icon: video-camera; "
                                ></span
                                >{{
                                  translateKeyMessage(
                                    keyMessage,
                                    mediaTypes.movie
                                  )
                                }}
                              </li>
                            </nuxt-link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="uk-parent"
                    :uk-tooltip="$t('filterTvShowsByPopularityTip')"
                  >
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
                              :to="getTopListlURL(keyMessage, mediaTypes.tv)"
                              class="uk-link-reset"
                            >
                              <li>
                                <span
                                  class="uk-margin-small-right uk-icon ech-spin-icon"
                                  uk-icon="icon: tv; "
                                ></span
                                >{{
                                  translateKeyMessage(keyMessage, mediaTypes.tv)
                                }}
                              </li>
                            </nuxt-link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="uk-parent" :uk-tooltip="$t('toogleLanguageTip')">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                    >
                      <span
                        class="uk-margin-small-right uk-icon ech-spin-icon"
                        uk-icon="icon: world; "
                      ></span
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
              <div class="uk-navbar-right" :uk-tooltip="$t('searchTip')">
                <div class="uk-navbar-item">
                  <a
                    class="uk-navbar-toggle ech-spin-icon"
                    uk-search-icon
                    href="#"
                  ></a>
                  <div
                    class="uk-drop"
                    uk-drop="mode: click; pos: left-center; offset: 0"
                  >
                    <form
                      class="uk-search uk-search-default uk-width-1-1"
                      @submit.prevent="doSearch"
                    >
                      <input
                        v-model="searchQuery"
                        class="uk-search-input"
                        type="search"
                        placeholder="Search..."
                        autofocus
                      />
                    </form>
                  </div>
                </div>
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
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import ActionMapper from '@/middleware/ActionMapper'
import Slugger from '@/middleware/framework/modules/slugger/Slugger'
import UpcomingManager from '@/middleware/modules/vue/mixins/UpcomingManager'

export default {
  name: 'EchNavbarMainNew',
  components: { EchSortedBy, EchFiltersBy },
  mixins: [UpcomingManager],
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    mediaTypes() {
      return MediaTypes
    },
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
    showMenuListForTvShows() {
      return Object.keys(ActionMapper.getActionCodes()?.[MediaTypes.tv])
    },
    showMenuListForMovies() {
      return Object.keys(ActionMapper.getActionCodes()?.[MediaTypes.movie])
    }
  },
  methods: {
    getTopListlURL(actionNameIndex, mediaType) {
      const actionName = this.translateKeyMessage(actionNameIndex, mediaType)
      const sluggifyActionName = Slugger.sluggify([actionNameIndex, actionName])
      const language = this.$i18n.locale
      return `/${language}/${mediaType}/trends/${Date.now()}/${sluggifyActionName}/`
    },
    doSearch() {
      const language = this.$i18n.locale
      this.$router.push({
        path: `/${language}/${MediaTypes.all}/${Date.now()}/${this.searchQuery}`
      })
    }
  }
}
</script>
<style></style>
