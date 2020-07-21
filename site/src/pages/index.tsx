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
    fontSize: '7vmax',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
    },
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  subTitle: {
    width: '100%',
    fontSize: '5vmax',
    zIndex: 1,
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
    },
    wordWrap: 'normal',
    overflowWrap: 'normal',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  tagLine: {
    fontSize: '3.5vmax',
    fontVariationSettings: '"WGHT" 200, "SALT" 1, "CONT" 0',
    textAlign: 'left',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
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
  figureArea: {
    padding: `0 ${theme.spacing(5)}px`,
    position: 'relative',
  },
  image: {
    objectFit: 'contain',
    transform: 'skew(-12deg)',
  },
  weeklyEventsSection: {
    width: '100%',
  },
}))

function IndexPage({ data }: Index) {
  const classes = useStyles()
  const { sanityPage, sanitySiteSettings } = data
  return (
    <>
      <SEO
        title={sanityPage?.hero?.heading ?? 'Herbal Mixology'}
        description={sanitySiteSettings?.openGraph?.description ?? ''}
        image={[
          {
            url:
              sanitySiteSettings?.openGraph?.image?.asset?.url ?? '',
            alt: sanitySiteSettings?.openGraph?.image?.alt ?? '',
            height: 500,
            width: 500,
          },
        ]}
      />
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
                <figure className={classes.figureArea}>
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
                  <figcaption>
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
                  </figcaption>
                </figure>
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
            fixed(width: 500, height: 500) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
