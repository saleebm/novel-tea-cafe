import React, { useEffect, useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbySeo,
  GatsbySeoProps,
  OpenGraphImages,
} from 'gatsby-plugin-next-seo/lib'

interface Seo {
  title: string
  description?: string
  image?: OpenGraphImages[]
  gatsbySeoProps?: GatsbySeoProps
}

/**
 * manually added to every page to add seo.
 * @param description
 * @param title
 * @param image
 * @param gatsbySeoProps
 * @constructor
 */
export function SEO({
  description,
  title,
  image,
  gatsbySeoProps,
}: Seo) {
  const {
    site,
    file,
    allFile,
  } = useStaticQuery<GatsbyTypes.SeoDataQuery>(graphql`
    query SeoData {
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
      allFile(filter: { relativeDirectory: { eq: "nt" } }) {
        totalCount
        nodes {
          publicURL
        }
      }
    }
  `)

  const imagesOpenGraph: OpenGraphImages[] = useMemo(
    () => [
      {
        alt: 'Bucket of two leaves',
        url: file?.publicURL ?? '',
        height: 300,
        width: 200,
      },
    ],
    [file?.publicURL],
  )

  useEffect(() => {
    if (Array.isArray(image)) {
      imagesOpenGraph.concat(image)
    }
    if (Array.isArray(allFile.nodes)) {
      allFile.nodes.forEach((node) => {
        imagesOpenGraph.push({
          url: node?.publicURL ?? '',
        })
      })
    }
  }, [image, imagesOpenGraph, allFile.nodes])

  return useMemo(
    () => (
      <>
        <GatsbySeo
          {...gatsbySeoProps}
          defer={false}
          language={'en'}
          description={
            description
              ? description
              : site?.siteMetadata?.description
          }
          title={title}
          openGraph={{
            url: 'https://www.novelteaorlando.com',
            title: 'NovelTea Cafe Orlando',
            description:
              'Gather for fresh kava and kratom tea, fresh brewed kombucha, and daily social events in Orlando, Florida. What could be better? Answer: Nothing!',
            images: imagesOpenGraph,
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
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap',
            },
          ]}
        />
      </>
    ),
    [description, site, title, imagesOpenGraph, gatsbySeoProps],
  )
}
