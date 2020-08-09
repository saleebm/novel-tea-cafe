import React from 'react'
import { graphql } from 'gatsby'
import { AboutPageQuery } from '@Graphql/gatsby-graphql'
import GatsbyImage, { FluidObject } from 'gatsby-image/index'
import { Container, Grid } from '@material-ui/core'
import { SEO } from '@Components/elements/SEO/seo'

interface AboutPage {
  data: AboutPageQuery
}

function AboutPage({ data }: AboutPage) {
  return (
    <>
      <SEO title={'About'} />
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container component={'figure'} spacing={4}>
              <Grid item xs={12}>
                {data.staticMap?.childFile?.childImageSharp
                  ?.fluid && (
                  <GatsbyImage
                    fluid={
                      data.staticMap.childFile.childImageSharp
                        .fluid as FluidObject
                    }
                  />
                )}
              </Grid>
              <Grid item xs={12} component={'figcaption'}>
                todo button link to maps location
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query aboutPage {
    sanitySiteSettings {
      openGraph {
        title
        description
        image {
          alt
          asset {
            url
            fixed(width: 500, height: 500) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    staticMap(nickname: { eq: "here" }) {
      childFile {
        childImageSharp {
          fluid(maxWidth: 600, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
        nlink
        publicURL
      }
      center
      absolutePath
      mapUrl
    }
  }
`

export default AboutPage
