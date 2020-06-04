<template>
  <div>
    <ul uk-accordion="multiple: true">
      <li>
        <a class="uk-accordion-title uk-text-small" href="#"></a>
        <div class="uk-accordion-content">
          <ech-filters-by :media-type-path="mediaTypePath"></ech-filters-by>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title uk-text-small" href="#"></a>
        <div class="uk-accordion-content">
          <ech-sorted-by :media-type-path="mediaTypePath"></ech-sorted-by>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

import EchSortedBy from './EchSortedBy'
import EchFiltersBy from './EchFiltersBy'

export default {
  name: 'EchFilters',
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
