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
      {
        hid: 'description',
        name: 'description',
        content: '前端技术分享交流，专注于前端技术'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        src: "//cpro.baidustatic.com/cpro/ui/c.js",
        async: true,
        defer: true
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
  modules: ['@nuxtjs/pwa'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {      
    }
  }
}
