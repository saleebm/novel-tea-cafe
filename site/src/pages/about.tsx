import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import {
  Container,
  Grid,
  Button,
  Typography,
} from '@material-ui/core'
import { AboutPageQuery } from '@Graphql/gatsby-graphql'
import { SEO } from '@Components/elements/SEO/seo'
import { makeStyles } from '@material-ui/core/styles'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

interface AboutPage {
  data: AboutPageQuery
}

const useClasses = makeStyles((theme) => ({
  bodyText: {
    maxWidth: '18ch',
  },
}))

function AboutPage({ data }: AboutPage) {
  const classes = useClasses()
  return useMemo(
    () => (
      <>
        <SEO title={'About'} />
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <AnimatedInPlainViewParent key={'main-about-text'}>
                <Grid
                  justify={'center'}
                  alignItems={'center'}
                  container
                  spacing={7}
                  component={'section'}
                >
                  <Grid item xs={12}>
                    <AnimatedInViewChildDiv>
                      <Typography gutterBottom variant={'h1'}>
                        {data.sanitySiteSettings?.openGraph?.title}
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedInViewChildDiv>
                      <Typography
                        gutterBottom
                        variant={'h4'}
                        component={'p'}
                        className={classes.bodyText}
                      >
                        {
                          data.sanitySiteSettings?.openGraph
                            ?.description
                        }
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </Grid>
                </Grid>
              </AnimatedInPlainViewParent>
            </Grid>
            <Grid item xs={12} md={6} component={'section'}>
              <AnimatedInPlainViewParent key={'main-about-maps'}>
                <Grid container component={'figure'} spacing={4}>
                  <Grid component={'span'} item xs={12}>
                    <AnimatedInViewChildDiv>
                      {data.staticMap?.childFile?.childImageSharp
                        ?.fluid && (
                        <a
                          rel={'noopener noreferrer'}
                          target={'_blank'}
                          href={`${data.staticMap?.mapUrl}`}
                          style={{
                            display: 'inline-block',
                          }}
                        >
                          <GatsbyImage
                            Tag={'span'}
                            fluid={
                              data.staticMap.childFile.childImageSharp
                                .fluid as FluidObject
                            }
                          />
                        </a>
                      )}
                    </AnimatedInViewChildDiv>
                  </Grid>
                  <Grid item xs={12} component={'figcaption'}>
                    <AnimatedInViewChildDiv>
                      <Button
                        href={`${data.staticMap?.mapUrl}`}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                        variant={'outlined'}
                        size={'large'}
                      >
                        Open Maps
                      </Button>
                    </AnimatedInViewChildDiv>
                  </Grid>
                </Grid>
              </AnimatedInPlainViewParent>
            </Grid>
          </Grid>
        </Container>
      </>
    ),
    [data, classes],
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
