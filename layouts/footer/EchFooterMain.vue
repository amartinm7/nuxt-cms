<template>
  <div>
    <div class="uk-section-secondary uk-section">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-flex-auto uk-width-1-4@s uk-first-column">
            <div class="uk-margin uk-text-left@s uk-text-center">
              <nuxt-link class="uk-navbar-item uk-logo" :to="localePath('/')">
                <img
                  class="el-image"
                  alt="Ech"
                  uk-img=""
                  src="../../assets/logo/vector/default-monochrome-white.svg"
                  style="width: 200px;"
                />
              </nuxt-link>
            </div>
          </div>

          <div
            class="uk-flex-auto uk-width-1-4@s uk-grid-margin uk-first-column"
          >
            <h3 class="uk-h5 uk-text-left@s uk-text-center">Follow Us!</h3>
            <ul class="uk-list uk-text-left@s uk-text-center">
              <li class="el-item">
                <div class="el-content uk-panel">
                  <a href="#" uk-scroll="" class="el-link uk-link-muted"
                    ><span
                      class="uk-icon uk-margin-small-right ech-spin-icon"
                      uk-icon="instagram"
                    ></span
                    >Instagram
                  </a>
                </div>
              </li>
              <li class="el-item">
                <div class="el-content uk-panel">
                  <a href="#" uk-scroll="" class="el-link uk-link-muted">
                    <span
                      class="uk-icon uk-margin-small-right ech-spin-icon"
                      uk-icon="pinterest"
                    ></span
                    >Pinterest
                  </a>
                </div>
              </li>
              <li class="el-item">
                <div class="el-content uk-panel">
                  <a href="#" uk-scroll="" class="el-link uk-link-muted">
                    <span
                      class="uk-icon uk-margin-small-right ech-spin-icon"
                      uk-icon="facebook"
                    ></span
                    >Facebook
                  </a>
                </div>
              </li>
              <li class="el-item">
                <div class="el-content uk-panel">
                  <a href="#" uk-scroll="" class="el-link uk-link-muted">
                    <span
                      class="uk-icon uk-margin-small-right ech-spin-icon"
                      uk-icon="youtube"
                    ></span
                    >Youtube
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-secondary uk-section uk-padding-remove-vertical">
      <div class="uk-margin-remove-vertical uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-flex-auto uk-width-1-1@m uk-first-column">
          <hr />
        </div>
      </div>
    </div>
    <div class="uk-section-secondary uk-section uk-section-xsmall">
      <div class="uk-container">
        <div class="uk-margin-remove-vertical uk-grid uk-grid-stack" uk-grid="">
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@s uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-text-small uk-text-muted uk-margin uk-text-left@s uk-text-center"
              >
                Estrenos cine hoy. All rights Reserved.
              </div>
            </div>
          </div>

          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@s uk-grid-margin uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin uk-text-right@s uk-text-center">
                <a href="#" uk-totop="" uk-scroll="" class="uk-icon uk-totop"
                  ><svg
                    width="8"
                    height="22"
                    viewBox="0 0 8 22"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="totop"
                  >
                    <polygon
                      points="8,5 4,0 0,5 3.497,5 3.497,22 4.504,22 4.504,5"
                    ></polygon></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
