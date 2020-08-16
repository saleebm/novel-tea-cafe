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
    description: `Gather for the freshest kava and kratom tea, fresh brewed kombucha, and daily social events. What could be better? Answer: Nothing!`,
    author: `@minasa1eeb`,
    siteUrl: 'https://www.novelteaorlando.com',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-175459740-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAPS_KEY,
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
    'gatsby-plugin-sitemap',
    `gatsby-plugin-offline`,
  ],
}
