import React from 'react'
import { graphql } from 'gatsby'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { SEO } from '@Components/elements/SEO/seo'
import { HomepageQuery } from '@Graphql/gatsby-graphql'

interface Index {
  data: HomepageQuery
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '7vw',
  },
  subTitle: {
    width: '100%',
    fontSize: '5vw',
    zIndex: 1,
    whiteSpace: 'pre-wrap',
  },
  tagLine: {
    fontSize: '3vw',
    lineHeight: 2,
    textAlign: 'right',
  },
  pageContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSection: {
    maxWidth: theme.breakpoints.width('lg'),
    height: '100%',
  },
  image: {
    objectFit: 'contain',
  },
  weeklyEventsSection: {
    width: '100%',
  },
}))

function IndexPage({ data }: Index) {
  const classes = useStyles()
  const { sanityPage } = data
  return (
    <>
      <SEO title={'Herbal Mixology'} image={[]} />
      <Container
        maxWidth={false}
        disableGutters
        className={classes.pageContainer}
      >
        <Grid
          className={classes.firstSection}
          container
          spacing={5}
          component={'section'}
        >
          <Grid item xs={12} md={5}>
            <AnimatedInPlainViewParent key={'home-title'}>
              <AnimatedInViewChildDiv>
                <Typography className={classes.title} variant={'h1'}>
                  NovelTea
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv>
                <Typography
                  className={classes.subTitle}
                  variant={'h2'}
                >
                  {sanityPage?.hero?.heading}
                </Typography>
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
          <Grid item xs={12} md={7}>
            <AnimatedInPlainViewParent key={'home-hero-image'}>
              <AnimatedInViewChildDiv>
                <figure>
                  {sanityPage?.hero?.illustration?.image?.asset
                    ?.fluid && (
                    <GatsbyImage
                      className={classes.image}
                      fluid={
                        sanityPage?.hero?.illustration?.image?.asset
                          .fluid as FluidObject
                      }
                    />
                  )}
                </figure>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv>
                {sanityPage?.hero?.tagline?.map(
                  (tags, index) =>
                    tags &&
                    Array.isArray(tags.children) &&
                    tags.children.map((child) => (
                      <Typography
                        className={classes.tagLine}
                        variant={'subtitle1'}
                        key={`${index}`}
                      >
                        {child?.text}
                      </Typography>
                    )),
                )}
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query homepage {
    sanityPage(title: { eq: "Frontpage" }) {
      hero {
        heading
        tagline {
          ...TAGLINE
        }
        illustration {
          ...FLUID_IMAGE
        }
      }
    }
    sanitySiteSettings {
      openGraph {
        title
        description
        image {
          alt
          asset {
            url
            fixed {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
