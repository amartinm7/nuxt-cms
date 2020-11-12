const cookiesProperties = () => {
  return {
    necessary: [
      {
        name: {
          en: 'Default cookies'
        },

        description: {
          en: 'Used for cookie control.'
        },
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: {
          en: 'Google Analytics'
        },
        description: {
          en:
            'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.'
        },
        initialState: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID}`,
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            window.dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', process.env.ESTRENOSCINEHOY_GOOGLE_ANALITYCS_ID)
        }
      }
    ]
  }
}

const cssProperties = {
  barPosition: 'bottom-right',
  blockIframe: true,
  colors: {
    checkboxActiveBackground: '#2e495e',
    checkboxInactiveBackground: '#ede1e1',
    checkboxActiveCircleBackground: '#00c58e',
    checkboxInactiveCircleBackground: '#f44336',
    checkboxDisabledBackground: '#ddd',
    checkboxDisabledCircleBackground: '#fff'
  }
}

export { cookiesProperties, cssProperties }
