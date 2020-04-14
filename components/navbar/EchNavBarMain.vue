<template>
  <div>
    <!-- header to mobile -->
    <div class="tm-header-mobile uk-hidden@m">
      <div class="uk-navbar-container">
        <nav uk-navbar="" class="uk-navbar">
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
            <a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle="">
              <div
                uk-navbar-toggle-icon=""
                class="uk-icon uk-navbar-toggle-icon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="navbar-toggle-icon"
                >
                  <rect y="9" width="20" height="2"></rect>
                  <rect y="3" width="20" height="2"></rect>
                  <rect y="15" width="20" height="2"></rect>
                </svg>
              </div>
            </a>
          </div>
        </nav>
      </div>

      <div
        id="tm-mobile"
        uk-offcanvas=""
        mode="reveal"
        overlay=""
        flip=""
        class="uk-offcanvas"
        style=""
      >
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

          <div class="uk-child-width-1-1 uk-grid uk-grid-stack" uk-grid="">
            <div class="uk-first-column">
              <div id="module-menu-mobile" class="uk-panel">
                <ul class="uk-nav uk-nav-default">
                  <li>
                    <nuxt-link :to="localePath('/')">Home</nuxt-link>
                  </li>
                  <li class="uk-parent">
                    <nuxt-link :to="localePath('/')">Accion</nuxt-link>
                    <ul class="uk-nav-sub">
                      <li>
                        <nuxt-link :to="localePath('/')">Adventure</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/')">Scify</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">Drama</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">Comedy</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">Family</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">News</nuxt-link>
                  </li>
                  <li>
                    <hr class="uk-divider" />
                  </li>
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
                  <!--
                  <li class="uk-active uk-parent">
                    <a href="/themes/joomla/2016/horizon/index.php/zoo-zoo"
                      >ZOO</a
                    >
                    <ul class="uk-nav-sub">
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/blog-zoo"
                          >Blog</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/product-zoo"
                          >Product</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/download-zoo"
                          >Download</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/business-zoo"
                          >Business</a
                        >
                      </li>
                      <li class="uk-active">
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/movie-zoo"
                          >Movie</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/cookbook-zoo"
                          >Cookbook</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/documentation-zoo"
                          >Documentation</a
                        >
                      </li>
                      <li>
                        <a
                          href="/themes/joomla/2016/horizon/index.php/zoo-zoo/page-zoo"
                          >Page</a
                        >
                      </li>
                    </ul>
                  </li>
                  -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header to ipad, desktop and so on -->
    <div class="tm-header uk-visible@m" uk-header="">
      <div class="tm-headerbar-top">
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
              uk-navbar='{"align":"left","boundary":"!.uk-navbar-container"}'
            >
              <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-custom menu-item-object-custom"
                      >Accion</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-taxonomy menu-item-object-category"
                      >Adventure</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >Scify</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >Drama</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >Comedy</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page"
                      >Family</nuxt-link
                    >
                  </li>
                  <li class="uk-parent">
                    <nuxt-link
                      :to="localePath('/')"
                      class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                      >Languages</nuxt-link
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
/* eslint-disable camelcase, no-console */
export default {
  computed: {
    showLocales() {
      console.log('showLocales... ' + this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>
<style></style>
