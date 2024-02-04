// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Anime List',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: 'My Anime List'

        },
      ],
    },
  },
  ssr: true,
  css: ['~/assets/css/main.css'],

  modules: [
    ['nuxt-highcharts', {
      setOptions: {
        colors: ['#0C2D57', '#FC6736'],
        chart: {
          backgroundColor: ['transparent'],
        },
        lang: {
          downloadPNG: 'Unduh Gambar PNG',
          downloadJPEG: 'Unduh Gambar JPEG',
          downloadSVG: 'Unduh Gambar SVG',
          downloadPDF: 'Unduh Gambar PDF',
        },
        credits: {
          enabled: false
        }
      }
    }]
  ],



  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  }
)