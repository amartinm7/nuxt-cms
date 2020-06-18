<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">My Projects</h1>
      <p>
        Some of my projects can be found on
        <a href="https://github.com/allenhwkim" target="_blank">GitHub</a>
      </p>
    </div>
  </section>
</template>
<script>
/* eslint-disable camelcase, no-console */
import StringHandler from '../middleware/framework/modules/string/StringHandler'

export default {
  name: 'EchProjects',
  head() {
    const vm = this
    const title = 'Estrenos cine hoy'
    const keyword =
      'Estrenos cine hoy, peliculas, series, actores, actrices, TV Shows, movies, actor, actress, movies rating, news, tv networks'
    return {
      title: `${StringHandler.truncate(title, 65)}`,
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyword
        },
        {
          hid: 'description',
          name: 'description',
          content: `${StringHandler.truncate(keyword, 155)}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${StringHandler.truncate(title, 35)}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${StringHandler.truncate(keyword, 65)}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.estrenoscinehoy.com/manifest-icon-192.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.estrenoscinehoy.com`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `estrenoscinehoy.com`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: `${vm.$i18n.locale}`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        }
      ]
    }
  }
}
</script>
