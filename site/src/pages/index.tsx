import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { SEO } from '@Components/elements/SEO/seo'
import { HomepageQuery } from '@Graphql/gatsby-graphql'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '3rem',
  },
  subTitle: {
    width: '100%',
  },
  tagLine: {
    fontSize: '3rem',
    lineHeight: 2,
  },
}))

function IndexPage() {
  const classes = useStyles()
  const { sanityPage } = useStaticQuery<HomepageQuery>(graphql`
    query HOMEPAGE {
      sanityPage(title: { eq: "Frontpage" }) {
        hero {
          heading
          tagline {
            style
            list
            children {
              text
              marks
            }
          }
          illustration {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid_withWebp
                }
                url
                title
                size
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title={'Herbal Mixology'} />
      <Container maxWidth={'lg'} component={'section'}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <AnimatedInPlainViewParent key={'home-title'}>
              <AnimatedInViewChildDiv>
                <Typography className={classes.title} variant={'h1'}>
                  NovelTea
                </Typography>
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
          <Grid item xs={12} md={5}>
            <AnimatedInPlainViewParent key={'home-hero-image'}>
              <AnimatedInViewChildDiv>
                <figure>
                  {sanityPage?.hero?.illustration?.image?.asset
                    ?.fluid && (
                    <GatsbyImage
                      fluid={
                        sanityPage?.hero?.illustration?.image?.asset
                          .fluid as FluidObject
                      }
                    />
                  )}
                </figure>
                <AnimatedInViewChildDiv>
                  <Typography
                    className={classes.subTitle}
                    variant={'h2'}
                  >
                    {sanityPage?.hero?.heading}
                  </Typography>
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
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage
