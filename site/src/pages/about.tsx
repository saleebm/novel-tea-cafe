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
    maxWidth: '42ch',
    width: '100%',
    lineHeight: 1.42,
    textAlign: 'center',
  },
  fullAndCenter: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  figureArea: {
    position: 'relative',
  },
  figureImageWrap: {
    padding: `0 ${theme.spacing(7)}px`,
    display: 'inline-block',
    position: 'relative',
  },
}))

function AboutPage({ data }: AboutPage) {
  const classes = useClasses()
  return useMemo(
    () => (
      <>
        <SEO title={'About'} />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimatedInPlainViewParent key={'main-about-text'}>
                <Grid container spacing={3} component={'section'}>
                  <Grid item xs={12}>
                    <AnimatedInViewChildDiv>
                      <Typography
                        gutterBottom
                        align={'center'}
                        variant={'h1'}
                      >
                        {data.sanitySiteSettings?.openGraph?.title}
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.fullAndCenter}
                  >
                    <AnimatedInViewChildDiv
                      className={classes.fullAndCenter}
                    >
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
                  <Grid
                    item
                    xs={12}
                    className={classes.figureImageWrap}
                  >
                    <AnimatedInViewChildDiv>
                      {data.staticMap?.childFile?.childImageSharp
                        ?.fluid && (
                        <a
                          rel={'noopener noreferrer'}
                          target={'_blank'}
                          href={`${data.staticMap?.mapUrl}`}
                          className={classes.fullAndCenter}
                        >
                          <GatsbyImage
                            className={classes.fullAndCenter}
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
                  <Grid
                    item
                    xs={12}
                    component={'figcaption'}
                    className={classes.fullAndCenter}
                  >
                    <AnimatedInViewChildDiv
                      className={classes.fullAndCenter}
                    >
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
