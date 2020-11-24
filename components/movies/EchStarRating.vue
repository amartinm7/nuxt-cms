<template>
  <div>
    <star-rating
      :increment="rating.increment"
      :max-rating="rating['max-rating']"
      :rating="ratingValue"
      :inactive-color="rating['inactive-color']"
      :active-color="rating['active-color']"
      :star-size="rating['star-size']"
      :show-rating="rating['show-rating']"
      :read-only="rating['read-only']"
      class="uk-flex uk-flex-center ech-basic"
      @rating-selected="setRating"
      @current-rating="setCurrentRating($event, '5')"
    >
    </star-rating>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

export default {
  name: 'EchStarRating',
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    },
    ratingValue: {
      type: Number,
      default() {
        return 0
      }
    },
    starSize: {
      type: Number,
      default() {
        return 35
      }
    }
  },
  data() {
    return {
      rating: {
        'active-color': '#f9a159',
        'inactive-color': '#999999',
        increment: 0.01,
        'max-rating': 5,
        'read-only': true,
        'inactive-char': '',
        'star-size': this.starSize,
        'show-rating': false
      }
    }
  },
  methods: {
    setRating(rating) {
      console.log(rating)
    },
    setCurrentRating(event, anotherParam) {
      console.log(event)
      console.log(anotherParam)
    }
  }
}
</script>
<style>
/* TODO fallback image */
img:before {
  content: '';
  display: block;
  background: #dedede;
  top: 0;
  bottom: 0;
  min-height: 278px;
  min-width: 185px;
}

/*img {*/
/*  position: relative;*/
/*}*/
/*img:before {*/
/*  content: "";*/
/*  display: block;*/
/*  position: absolute;*/
/*  background: #dedede;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  min-height: 300px;*/
/*  min-width: 300px;*/
/*}*/
</style>
