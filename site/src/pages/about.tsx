import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Container, Grid, Link, Typography } from '@material-ui/core'
import { SEO } from '@Components/elements/SEO/seo'
import { makeStyles } from '@material-ui/core/styles'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

interface AboutPage {
  data: GatsbyTypes.aboutPageQuery
}

const useClasses = makeStyles((theme) => ({
  bodyText: {
    maxWidth: '42ch',
    width: '100%',
    lineHeight: 1.2,
    fontSize: 'clamp(1.3rem, 10vw, 1.7rem)',
    fallback: {
      fontSize: '18px',
    },
  },
  fullBlock: {
    width: '100%',
    position: 'relative',
    display: 'block',
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
  locationInfo: {
    fontSize: 'clamp(1.3rem, 10vw, 1.7rem)',
    width: '100%',
    lineHeight: 1.2,
    fallback: {
      fontSize: '18px',
    },
  },
  figureImageWrap: {
    padding: `0 ${theme.spacing(3)}px`,
    display: 'inline-block',
    position: 'relative',
  },
  hoursArea: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
}))

function AboutPage({ data }: AboutPage) {
  const classes = useClasses()
  return useMemo(
    () => (
      <>
        <SEO
          title={'About'}
          description={
            'Kava Kava and Kratom brewed fresh everyday, plus fresh herbal teas, cold brew and more here at NovelTea located in Orlando, Florida.'
          }
        />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AnimatedInViewChildDiv>
                <Typography color={'textPrimary'} variant={'h1'}>
                  {data.sanitySiteSettings?.openGraph?.title}
                </Typography>
              </AnimatedInViewChildDiv>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedInPlainViewParent key={'main-about-text'}>
                <Grid container spacing={3} component={'section'}>
                  <Grid
                    item
                    xs={12}
                    className={classes.fullAndCenter}
                  >
                    <Typography
                      className={classes.fullBlock}
                      variant={'h2'}
                      align={'left'}
                      color={'textSecondary'}
                    >
                      About
                    </Typography>
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
                        variant={'body1'}
                        className={classes.bodyText}
                      >
                        {
                          data.sanitySiteSettings?.openGraph
                            ?.description
                        }
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
                        className={classes.fullBlock}
                        variant={'h2'}
                        align={'left'}
                        color={'textSecondary'}
                      >
                        Location
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedInViewChildDiv>
                      <Link
                        href={`${data.staticMap?.mapUrl}`}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                        className={classes.bodyText}
                        color={'textPrimary'}
                      >
                        {data.sanitySiteSettings?.address}
                      </Link>
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
                        className={classes.fullBlock}
                        variant={'h2'}
                        align={'left'}
                        color={'textSecondary'}
                      >
                        Hours
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </Grid>
                  <Grid item xs={12}>
                    <AnimatedInViewChildDiv
                      className={classes.hoursArea}
                    >
                      {data?.sanitySiteSettings?.hours?.map(
                        (tags, index) =>
                          tags &&
                          Array.isArray(tags.children) &&
                          tags.children.map((child) =>
                            !!child?.text ? (
                              <Typography
                                component={'p'}
                                key={`${index}`}
                                className={classes.bodyText}
                                color={'textPrimary'}
                              >
                                {child?.text}
                              </Typography>
                            ) : null,
                          ),
                      )}
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
      address
      hours {
        children {
          text
          marks
        }
      }
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
