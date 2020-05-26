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

//ads google analitycs
https://nuxtjs.org/faq/google-analytics


https://disqus.com/

https://github.com/scottsweb/scott.ee/blob/master/modules/generate.js




