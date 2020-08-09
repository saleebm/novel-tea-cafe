const autoprefixer = require(`autoprefixer`)
const MAPS_STYLE = require('./maps.config.js')
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `NovelTea Cafe`,
    description: `Join me for fresh kava and kratom tea, fresh brewed kombucha, and daily social events. What could be better? Answer: Nothing!`,
    author: `@minasa1eeb`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.novelteaorlando.com/',
          site_name: 'NovelTea',
        },
        titleTemplate: `%s 🍃 Novel Tea Cafe`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-plugin-svgr-svgo`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        // ie x.global.scss (global)
        // sassRuleTest: /\.global\.s([ac])ss$/,
        // Override the file regex for CSS modules
        // ie x.mod.scss (modules)
        sassRuleModulesTest: /\.mod\.s([ac])ss$/,
        postCssPlugins: [autoprefixer()],
        implementation: require('sass'),
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },

    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyDv6odPp-2SPWgD4-ulP8uRa6J7uBvOTMw`,
        center: `NovelTea, Lake Howell Lane, Maitland, FL`,
        zoom: 14,
        scale: 2,
        format: 'png',
        nickname: 'here',
        styles: MAPS_STYLE,
        markers: [
          {
            size: 'mid',
            color: '98EE90',
            location: `28.633095,-81.3229957`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
