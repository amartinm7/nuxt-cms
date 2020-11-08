<template>
  <div v-if="crews">
    <span class="uk-text-meta"> {{ $t(label) }}: </span>
    <nuxt-link
      v-for="crew in crews"
      :key="crew._credit_id + Math.random()"
      :todo="crew"
      class="uk-link-reset"
      :to="getPeoplePathURL(crew._id, crew._name)"
      :alt="$t('moreAbout', { name: crew._name })"
      :uk-tooltip="$t('moreAbout', { name: crew._name })"
    >
      <span
        class="uk-text-lead uk-text-small uk-margin-small-right"
        uk-icon="icon: user; ratio: 0.60;"
        >{{ crew._name }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
/* eslint-disable camelcase, no-console */

import PeopleManager from '@/middleware/modules/vue/mixins/PeopleManager'

export default {
  name: 'EchCrew',
  mixins: [PeopleManager],
  props: {
    crews: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style></style>
