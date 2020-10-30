const autoprefixer = require(`autoprefixer`)
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `NovelTea Cafe`,
    description: `Gather for the freshest kava and kratom tea, fresh brewed kombucha, and daily social events here at NovelTea. What could be better? Answer: Nothing!`,
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
        titleTemplate: `%s 🍃 NovelTea Cafe`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableMinification: true,
      },
    },
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
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAPS_KEY,
        center: `NovelTea, Lake Howell Lane, Maitland, FL`,
        zoom: 14,
        scale: 2,
        format: 'png',
        nickname: 'here',
        styles: [
          {
            feature: 'all',
            element: 'labels',
            rules: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            feature: 'administrative',
            element: 'all',
            rules: [
              {
                visibility: 'on',
              },
              {
                hue: '#ff0000',
              },
              {
                weight: 0.4,
              },
              {
                color: '#ffffff',
              },
            ],
          },
          {
            feature: 'landscape',
            element: 'all',
            rules: [
              {
                visibility: 'simplified',
              },
              {
                color: '#2b3f57',
              },
              {
                weight: 0.1,
              },
            ],
          },
          {
            feature: 'poi',
            element: 'all',
            rules: [
              {
                color: '#6c5b7b',
              },
            ],
          },
          {
            feature: 'poi',
            element: 'labels',
            rules: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            feature: 'road.highway',
            element: 'geometry',
            rules: [
              {
                color: '#f55f77',
              },
              {
                weight: 3,
              },
            ],
          },
          {
            feature: 'road.highway',
            element: 'labels',
            rules: [
              {
                weight: 0.8,
              },
              {
                color: '#ffffff',
              },
              {
                visibility: 'on',
              },
            ],
          },
          {
            feature: 'road.highway',
            element: 'labels.text',
            rules: [
              {
                weight: 1.3,
              },
              {
                color: '#FFFFFF',
              },
            ],
          },
          {
            feature: 'road.arterial',
            element: 'geometry',
            rules: [
              {
                color: '#f55f77',
              },
              {
                weight: 1.1,
              },
            ],
          },
          {
            feature: 'road.arterial',
            element: 'labels',
            rules: [
              {
                color: '#ffffff',
              },
              {
                weight: 0.7,
              },
            ],
          },
          {
            feature: 'road.local',
            element: 'geometry',
            rules: [
              {
                color: '#f55f77',
              },
              {
                weight: 0.4,
              },
            ],
          },
          {
            feature: 'road.local',
            element: 'labels',
            rules: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            feature: 'transit.line',
            element: 'all',
            rules: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            feature: 'water',
            element: 'all',
            rules: [
              {
                color: '#f3b191',
              },
            ],
          },
        ],
        markers: [
          {
            size: 'mid',
            color: '98EE90',
            location: `28.633095,-81.3229957`,
          },
        ],
      },
    },
    `gatsby-plugin-svgr-svgo`,
    'gatsby-plugin-sitemap',
    `gatsby-plugin-offline`,
  ],
}
