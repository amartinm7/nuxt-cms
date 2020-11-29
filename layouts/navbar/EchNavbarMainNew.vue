<template>
  <div>
    <div>
      <div
        uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
        class="uk-sticky"
      >
        <nav class="uk-navbar uk-navbar-container">
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
                class="uk-search uk-search-default uk-width-expand"
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
        <div id="echOffcanvas" uk-offcanvas="bg-close: true; esc-close: true;">
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
                            :to="
                              getTrendingURL({
                                actionNameIndex: keyMessage,
                                mediaType: mediaTypes.tv,
                                language,
                                page: 1
                              })
                            "
                            class="uk-link-reset"
                          >
                            <li>
                              <span
                                class="uk-margin-small-right uk-icon ech-spin-icon"
                                uk-icon="icon: play; "
                              ></span
                              >{{
                                translateKeyMessage({
                                  actionNameIndex: keyMessage,
                                  mediaType: mediaTypes.tv,
                                  language
                                })
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
                            :to="
                              getTrendingURL({
                                actionNameIndex: keyMessage,
                                mediaType: mediaTypes.movie,
                                language,
                                page: 1
                              })
                            "
                            class="uk-link-reset"
                          >
                            <li>
                              <span
                                class="uk-margin-small-right uk-icon ech-spin-icon"
                                uk-icon="icon: play; "
                              ></span
                              >{{
                                translateKeyMessage({
                                  actionNameIndex: keyMessage,
                                  mediaType: mediaTypes.movie,
                                  language
                                })
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
  </div>
</template>
<script>
import EchFiltersBy from '../filter/EchFiltersBy'
import EchSortedBy from '../filter/EchSortedBy'
import MediaTypes from '@/middleware/modules/domain/MediaTypes'
import ActionMapper from '@/middleware/ActionMapper'
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
    language() {
      return this.$i18n.locale
    },
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
