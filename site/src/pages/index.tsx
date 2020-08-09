import React from 'react'
import { graphql } from 'gatsby'
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GatsbyLink from 'gatsby-link'
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
      textAlign: 'center',
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
      textAlign: 'center',
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
  firstSectionWrap: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'space-around',
    flex: '1 1 auto',
  },
  firstSectionItem: {
    position: 'relative',
    flex: '0 1 fit-content',
    width: '100%',
    display: 'inline-flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
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
  ctaButton: {
    fontSize: '2rem',
    marginTop: theme.spacing(3),
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
          spacing={0}
          component={'section'}
        >
          <Grid item xs={12} md={5}>
            <AnimatedInPlainViewParent
              className={classes.firstSectionWrap}
              key={'home-title'}
            >
              <AnimatedInViewChildDiv
                className={classes.firstSectionItem}
              >
                <Typography className={classes.title} variant={'h1'}>
                  {sanityPage?.hero?.label}
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv
                className={classes.firstSectionItem}
              >
                <Typography
                  className={classes.subTitle}
                  variant={'h2'}
                >
                  {sanityPage?.hero?.heading}
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv
                className={classes.firstSectionItem}
              >
                <Button
                  fullWidth
                  size={'large'}
                  to={`${sanityPage?.hero?.cta?.route}`}
                  component={GatsbyLink}
                  className={classes.ctaButton}
                  variant={'text'}
                >
                  {sanityPage?.hero?.cta?.title}
                </Button>
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
        label
        cta {
          link
          title
          kind
          route
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
