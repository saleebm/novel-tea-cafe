import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Social_Site_LinksQuery } from '@Graphql/gatsby-graphql'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GatsbyImage from 'gatsby-image'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { FixedObject } from 'gatsby-image/index'

const useClasses = makeStyles((theme) => ({
  footerWrap: {
    position: 'relative',
    height: 'min-content',
    minHeight: '100%',
    paddingBottom: theme.spacing(5),
  },
  socialArea: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'baseline',
  },
  socialIcon: {
    'willChange': 'filter, transform',
    'transition': theme.transitions.create(['filter', 'transform']),
    '&:hover, &:focus': {
      filter: 'brightness(1.2) contrast(0.9)',
      transform: 'translateY(-3px)',
    },
  },
  socialIconWrap: {
    position: 'relative',
    flex: 1,
  },
}))

export function Footer() {
  const classes = useClasses()
  const {
    sanitySiteSettings: socialLinks,
    facebookIcon,
    instagramIcon,
    twitterIcon,
  } = useStaticQuery<Social_Site_LinksQuery>(graphql`
    query SOCIAL_SITE_LINKS {
      sanitySiteSettings {
        facebookPage
        twitterPage
        instagramPage
      }
      facebookIcon: file(
        relativePath: { eq: "branding/f_logo_RGB-Blue_1024.png" }
      ) {
        childImageSharp {
          fixed(fit: CONTAIN, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon: file(
        relativePath: { eq: "branding/Twitter_Logo_Blue.png" }
      ) {
        childImageSharp {
          fixed(fit: CONTAIN, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramIcon: file(
        relativePath: { eq: "branding/IG_Glyph_Fill.png" }
      ) {
        childImageSharp {
          fixed(fit: CONTAIN, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container maxWidth={'xl'} component={'footer'}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <AnimatedInPlainViewParent className={classes.socialArea}>
            <Grid
              container
              spacing={4}
              alignItems={'baseline'}
              justify={'space-around'}
            >
              {facebookIcon?.childImageSharp?.fixed &&
                socialLinks?.facebookPage && (
                  <Grid item xs={4}>
                    <AnimatedInViewChildDiv>
                      <a
                        className={classes.socialIconWrap}
                        href={socialLinks.facebookPage}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                      >
                        <GatsbyImage
                          className={classes.socialIcon}
                          Tag={'span'}
                          fixed={
                            facebookIcon.childImageSharp
                              .fixed as FixedObject
                          }
                        />
                      </a>
                    </AnimatedInViewChildDiv>
                  </Grid>
                )}
              {twitterIcon?.childImageSharp?.fixed &&
                socialLinks?.twitterPage && (
                  <Grid item xs={4}>
                    <AnimatedInViewChildDiv>
                      <a
                        href={socialLinks.twitterPage}
                        className={classes.socialIconWrap}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                      >
                        <GatsbyImage
                          Tag={'span'}
                          className={classes.socialIcon}
                          fixed={
                            twitterIcon.childImageSharp
                              .fixed as FixedObject
                          }
                        />
                      </a>
                    </AnimatedInViewChildDiv>
                  </Grid>
                )}
              {instagramIcon?.childImageSharp?.fixed &&
                socialLinks?.instagramPage && (
                  <Grid item xs={4}>
                    <AnimatedInViewChildDiv>
                      <a
                        className={classes.socialIconWrap}
                        href={socialLinks.instagramPage}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                      >
                        <GatsbyImage
                          Tag={'span'}
                          className={classes.socialIcon}
                          fixed={
                            instagramIcon.childImageSharp
                              .fixed as FixedObject
                          }
                        />
                      </a>
                    </AnimatedInViewChildDiv>
                  </Grid>
                )}
            </Grid>
          </AnimatedInPlainViewParent>
        </Grid>
      </Grid>
    </Container>
  )
}
