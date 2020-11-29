![Node.js CI](https://github.com/amartinm7/nuxt-cms/workflows/Node.js%20CI/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c815d4bf-379f-425d-9248-8ca13e0c93a3/deploy-status)](https://app.netlify.com/sites/estrenoscinehoy/deploys)
[![BCH compliance](https://bettercodehub.com/edge/badge/amartinm7/nuxt-cms?branch=master)](https://bettercodehub.com/)

# cms

> estrenoscinehoy

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## npm ci
borrar package-lock y regenerar
```bash
npm install --package-lock
```

## generate package-lock.json when is needed
````bash
npm i --package-lock-only
npm ci
````

remember this
````
python -m SimpleHTTPServer
````


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Adding UIkit to the project

install uikit module
> npm install uikit

create uikit plugin file
> touch plugins/uikit.js
```nodejs
import Vue from 'vue'

import UIkit from 'uikit/dist/js/uikit-core'  
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)  
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit  
``` 

setup nuxt.config.js
````nodejs
/** css block **/
css: [  
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],

/** Plugins to load before mounting the App */
plugins: [
{ src: '~/plugins/uikit.js', ssr: false }
],

/** install font */
link: [  
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
]
```

create main.css 
> touch assets/css/main.css
```html
a {  
  text-decoration: none;
}
put here your styles...
````

restart server o npm run dev


### adding firebase
```bash
npm install firebase --save
```

### adding sitemap
https://github.com/nuxt-community/sitemap-module
```bash
npm install @nuxtjs/sitemap
```

### adding pwa-asset-generator
Basic usage with local PNG input, skips scraping specs, generating both splash screens and icons;
https://itnext.io/pwa-splash-screen-and-icon-generator-a74ebb8a130
```bash
npm i pwa-asset-generator
npx pwa-asset-generator ./img/logo.png --background "#ababab" --scrape false
```

### PWA
https://pwa.nuxtjs.org/

enable service worker
https://pwa.nuxtjs.org/modules/workbox.html#options



API Orchestrator


handleSelect(path) {
      this.$router.push({
        path: this.$i18n.path(path)
      });
    }

## npm ci
borrar package-lock y regenerar
npm install --package-lock


## printenv para ver variables de entorno bash o zsh

## google analitycs
para ver visitas, registrar tu dominio en google analitys, asociarlo con google ads
https://nuxtjs.org/faq/google-analytics
https://github.com/nuxt-community/analytics-module
@nuxtjs/google-analytics

## google adsense
https://www.npmjs.com/package/@nuxtjs/google-adsense
@nuxtjs/google-adsense
https://www.google.com/adsense

## google admobs 
ads for ios and android

https://disqus.com/

https://github.com/scottsweb/scott.ee/blob/master/modules/generate.js





SETUP ENV VAR
> printenv

For permanent setting, you need to understand where to put the “export” script. Where here means Bash Shell Startup Script like /etc/profile, ~/.bash_profile, ~/.bashrc.

For system-wide operations, it should be in /etc/profile,

For user based operations, it should be in ~/.bash_profile,

For non-login interactive shells, it should be in ~/.bashrc.


sublime  ~/.bash_profile
source ~/.bash_profile
npm run dev



https://search.google.com/structured-data/testing-tool#
https://metatags.io
https://developers.facebook.com/apps
https://developers.facebook.com/tools/explorer
https://developers.facebook.com/docs/sharing/webmasters#testing
https://developers.facebook.com/tools/debug/

animations
https://greensock.com/get-started/
https://www.youtube.com/watch?v=eY4sXczY5AQ

Vue.js SPA SEO: Prerender & Server-Side Rendering
https://www.youtube.com/watch?v=HWDcSRHBC9M

https://awesome-nuxt.js.org/resources/official-resources.html
https://github.com/nuxt-community/awesome-nuxt
https://strapi.io/blog/build-a-blog-using-nuxt-strapi-and-apollo

https://medium.com/@mrando.via/estructura-de-c%C3%B3digo-de-una-aplicaci%C3%B3n-universal-en-nuxt-js-e6cfeeb66276

https://blog.logrocket.com/how-nuxt-js-solves-the-seo-problems-in-vue-js/

https://github.com/i62navpm/Tutorial-Nuxt#que-nuxt-renderizado

https://metatags.io


https://cards-dev.twitter.com/validator
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="simplytestable">
<meta property="twitter:title" content="Title Here">
<meta property="twitter:description" content="Description Here">
<meta property="twitter:creator" content="simplytestable">
<meta property="twitter:image:src" content="http://placehold.it/350x150">        
<meta property="twitter:domain" content="simplytestable.com">


share facebook
http://www.fbrell.com/Sharing/2%20-%20FB.ui%20Dialogs

## setting up node version for netlify
https://github.com/nvm-sh/nvm#nvmrc

## generate package-lock.json when is needed
````bash
npm i --package-lock-only
npm ci
````

## middleware
https://nuxtjs.org/guides/directory-structure/middleware
look for the example Now the stats middleware will be called for every route change.

## google analytics
https://google-analytics.nuxtjs.org/usage/time-tracking/


## texto legal
https://superadmin.es/blog/privacidad/plantilla-aviso-legal/
