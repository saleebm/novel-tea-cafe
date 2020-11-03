import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage, { FixedObject } from 'gatsby-image'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Social_Site_LinksQuery } from '@Graphql/gatsby-graphql'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

const useClasses = makeStyles((theme) => ({
  socialArea: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'baseline',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
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
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    maxWidth: '70px',
    marginLeft: theme.spacing(0.5),
  },
}))

export function SocialIcons() {
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
          fixed(fit: CONTAIN, width: 50, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon: file(
        relativePath: { eq: "branding/Twitter_Logo_Blue.png" }
      ) {
        childImageSharp {
          fixed(fit: CONTAIN, width: 50, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramIcon: file(
        relativePath: { eq: "branding/IG_Glyph_Fill.png" }
      ) {
        childImageSharp {
          fixed(fit: CONTAIN, width: 50, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <AnimatedInPlainViewParent className={classes.socialArea}>
        <Grid
          container
          spacing={0}
          justify={'center'}
          alignItems={'center'}
        >
          {facebookIcon?.childImageSharp?.fixed &&
            socialLinks?.facebookPage && (
              <Grid item xs className={classes.socialIconWrap}>
                <AnimatedInViewChildDiv
                  className={classes.socialIconWrap}
                >
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
              <Grid item xs className={classes.socialIconWrap}>
                <AnimatedInViewChildDiv
                  className={classes.socialIconWrap}
                >
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
              <Grid item xs className={classes.socialIconWrap}>
                <AnimatedInViewChildDiv
                  className={classes.socialIconWrap}
                >
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
    </>
  )
}
