<template>
  <div>
    <section class="uk-section uk-section-xsmall">
      <div class="uk-width-auto uk-text-center uk-padding-small">
        <div>S&iacute;guenos</div>
      </div>
      <div class="uk-flex uk-flex-center uk-flex-around">
        <div class="uk-width-1-5"></div>
        <div class="uk-width-auto ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div class="social-media-facebook ech-spin-icon" />
          </a>
        </div>
        <div class="uk-width-auto">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div class="social-media-twitter ech-spin-icon" />
          </a>
        </div>
        <div class="uk-width-auto">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div class="social-media-instagram ech-spin-icon" />
          </a>
        </div>
        <div class="uk-width-auto">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div class="social-media-youtube ech-spin-icon" />
          </a>
        </div>
        <div class="uk-width-1-5"></div>
      </div>
      <div class="uk-width-auto uk-text-center uk-padding-small">
        <div></div>
      </div>
      <div class="uk-width-auto uk-text-center uk-padding-small">
        <div>Copyright © 2020 - Estrenos Cine Hoy</div>
        <div>Todos los derechos reservados.</div>
      </div>
    </section>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */
export default {
  name: 'EchSocialMedia'
}
</script>
<style>
.social-media-facebook {
  width: 40px;
  height: 40px;
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-facebook-footer.a86d3f466e.svg)
    no-repeat;
}

.social-media-facebook:hover {
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-facebook-footer-hover.40b5a2798a.svg)
    no-repeat;
}

.social-media-twitter {
  width: 40px;
  height: 40px;
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-twitter-footer.499be77ce3.svg)
    no-repeat;
}

.social-media-twitter:hover {
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-twitter-footer-hover.8aec2306f6.svg)
    no-repeat;
}

.social-media-instagram {
  width: 40px;
  height: 40px;
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-instagram-footer.d92316c95b.svg)
    no-repeat;
}

.social-media-instagram:hover {
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-instagram-footer-hover.0d3f51cbe9.svg)
    no-repeat;
}

.social-media-youtube {
  width: 40px;
  height: 40px;
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-youtube-footer.dbab7f6c02.svg)
    no-repeat;
}

.social-media-youtube:hover {
  background: url(https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/social-networks/ic-youtube-footer-hover.18e3d63e1c.svg)
    no-repeat;
}

.ech-spin-icon {
  transition: all 0.5s ease-in-out 0s;
}

.ech-spin-icon:hover {
  cursor: default;
  transform: rotate(360deg);
  transition: all 0.5s ease-in-out 0s;
}
</style>
