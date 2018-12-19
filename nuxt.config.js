const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'kkfor-前端技术分享博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      },
      {
        innerHTML: `(adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: \"ca-pub-1443322611833785\",
        enable_page_level_ads: true
      });`
      },
      {
        innerHTML: `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = \"https://hm.baidu.com/hm.js?0068ae891aa9137713a97c4b752665b0\";
          var s = document.getElementsByTagName(\"script\")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3b8070' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/styles/index.scss', lang: 'scss' },
    { src: 'highlight.js/styles/tomorrow.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/filter.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
