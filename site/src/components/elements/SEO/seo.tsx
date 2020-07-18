import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbySeo,
  OpenGraphImages,
} from 'gatsby-plugin-next-seo/lib'

interface Seo {
  title: string
  description?: string
  image?: OpenGraphImages[]
}

export function SEO({ description, title, image }: Seo) {
  const { site, file } = useStaticQuery(graphql`
    query SEO_DATA {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        publicURL
        name
      }
    }
  `)
  return (
    <>
      <GatsbySeo
        defer={false}
        language={'en'}
        description={
          description ? description : site.siteMetadata.description
        }
        title={title}
        openGraph={{
          images: image
            ? image
            : [
                {
                  alt: 'Bucket of two leaves',
                  url: file.publicURL,
                  height: 300,
                  width: 200,
                },
              ],
        }}
        metaTags={[
          {
            property: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            charSet: 'utf-8',
          },
          {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
          {
            name: 'msapplication-TileImage',
            content: '/assets/images/favicons/mstile-144x144.png',
          },
          {
            name: 'msapplication-config',
            content: '/assets/images/favicons/browserconfig.xml',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
        linkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/assets/images/favicons/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/assets/images/favicons/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            href:
              '/assets/images/favicons/android-chrome-192x192.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/assets/images/favicons/favicon-16x16.png',
          },
          {
            rel: 'manifest',
            href: '/assets/images/favicons/site.webmanifest',
          },
          {
            rel: 'mask-icon',
            href: '/assets/images/favicons/safari-pinned-tab.svg',
            color: '#00ff00',
          },
          {
            rel: 'shortcut icon',
            href: '/assets/images/favicons/favicon.ico',
          },
        ]}
      />
    </>
  )
}
