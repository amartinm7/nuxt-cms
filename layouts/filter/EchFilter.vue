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
            href="#echOffcanvasFilter"
          ></a>
        </div>
      </nav>
      <div id="echOffcanvasFilter" uk-offcanvas="flip: true; bg-close: true">
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
                    <nuxt-link :to="localePath('/')">{{
                      $t('pages.home')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <ul class="uk-nav-sub">
                    <ech-filters-by
                      :media-type-path="mediaTypePath"
                    ></ech-filters-by>
                  </ul>
                  <ul class="uk-nav-sub">
                    <ech-sorted-by
                      :media-type-path="mediaTypePath"
                    ></ech-sorted-by>
                  </ul>
                </ul>
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
export default {
  name: 'EchFilter',
  components: { EchSortedBy, EchFiltersBy },
  props: {
    mediaTypePath: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
