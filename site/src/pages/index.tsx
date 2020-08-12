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
import clsx from 'clsx'
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
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    width: '100%',
    paddingLeft: theme.spacing(3),
  },
  subTitle: {
    width: '100%',
    fontSize: '5vmax',
    zIndex: 1,
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '10ch',
    },
  },
  tagLine: {
    width: '100%',
    fontSize: '5vmax',
    fontVariationSettings: '"WGHT" 200, "SALT" 1, "CONT" 0',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    marginTop: theme.spacing(1),
  },
  //the page title
  firstSection: {
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    position: 'relative',
  },
  pageContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSectionItem: {
    position: 'relative',
    flex: '1 1 auto',
    width: '100%',
    display: 'inline-flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyWrap: {
    maxWidth: theme.breakpoints.width('lg'),
    position: 'relative',
    height: 'max-content',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'space-around',
    paddingBottom: theme.spacing(1),
  },
  bodyItem: {
    position: 'relative',
    flex: '1 1 auto',
    width: '100%',
    display: 'inline-flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullBlock: {
    width: '100%',
    display: 'block',
  },
  figureArea: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position: 'relative',
  },
  image: {
    objectFit: 'contain',
    transform: 'skew(-12deg)',
    marginTop: theme.spacing(1),
  },
  ctaButton: {
    fontSize: '2.5rem',
    marginTop: theme.spacing(1),
  },
  reverseMobileSection: {
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column-reverse nowrap',
    },
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
        <AnimatedInPlainViewParent
          className={classes.firstSection}
          key={'home-title'}
        >
          <AnimatedInViewChildDiv
            className={classes.firstSectionItem}
          >
            <Typography
              color={'primary'}
              className={classes.title}
              variant={'h1'}
            >
              {sanityPage?.hero?.label}
            </Typography>
          </AnimatedInViewChildDiv>
        </AnimatedInPlainViewParent>
        <Grid
          component={'section'}
          container
          className={clsx(
            classes.bodyWrap,
            classes.reverseMobileSection,
          )}
          spacing={3}
        >
          <Grid className={classes.bodyItem} item xs={12} md={5}>
            <AnimatedInPlainViewParent
              className={classes.fullBlock}
              key={'home-section'}
            >
              <AnimatedInViewChildDiv
                className={classes.firstSectionItem}
              >
                <Typography
                  className={classes.subTitle}
                  variant={'h2'}
                  color={'textSecondary'}
                  align={'center'}
                  gutterBottom
                >
                  {sanityPage?.hero?.heading}
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv
                className={classes.firstSectionItem}
              >
                <Button
                  size={'large'}
                  to={`${sanityPage?.hero?.cta?.route}`}
                  component={GatsbyLink}
                  className={classes.ctaButton}
                  variant={'outlined'}
                >
                  {sanityPage?.hero?.cta?.title}
                </Button>
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
          <Grid className={classes.bodyItem} item xs={12} md={7}>
            <AnimatedInPlainViewParent
              className={classes.fullBlock}
              key={'home-hero-image'}
            >
              <Grid
                container
                className={classes.reverseMobileSection}
                spacing={0}
              >
                <Grid item xs={12}>
                  <AnimatedInViewChildDiv>
                    <figure className={classes.figureArea}>
                      {sanityPage?.hero?.illustration?.image?.asset
                        ?.fluid && (
                        <GatsbyImage
                          className={classes.image}
                          fluid={
                            sanityPage?.hero?.illustration?.image
                              ?.asset.fluid as FluidObject
                          }
                        />
                      )}
                    </figure>
                  </AnimatedInViewChildDiv>
                </Grid>
                <Grid item xs={12}>
                  <AnimatedInViewChildDiv
                    className={classes.firstSectionItem}
                  >
                    {sanityPage?.hero?.tagline?.map(
                      (tags, index) =>
                        tags &&
                        Array.isArray(tags.children) &&
                        tags.children.map((child) => (
                          <Typography
                            className={classes.tagLine}
                            variant={'h2'}
                            component={'p'}
                            key={`${index}`}
                            color={'textPrimary'}
                            align={'center'}
                            gutterBottom
                          >
                            {child?.text}
                          </Typography>
                        )),
                    )}
                  </AnimatedInViewChildDiv>
                </Grid>
              </Grid>
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
      happyHour {
        ...TAGLINE
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
  }
`

export default IndexPage
