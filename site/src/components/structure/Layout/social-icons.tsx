import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage, { FixedObject } from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'

import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

const useClasses = makeStyles((theme) => ({
  socialArea: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    columnGap: theme.spacing(1),
    padding: theme.spacing(3),
    margin: 0,
  },
  socialIcon: {
    'willChange': 'transform',
    'transition': theme.transitions.create(['transform']),
    '&:hover, &:focus': {
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
    maxHeight: '100px',
    height: '100px',
    maxWidth: '70px',
    width: '100%',
  },
}))

export function SocialIcons() {
  const classes = useClasses()
  const {
    sanitySiteSettings: socialLinks,
    facebookIcon,
    instagramIcon,
    twitterIcon,
  } = useStaticQuery<GatsbyTypes.SOCIAL_SITE_LINKSQuery>(graphql`
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
    <AnimatedInPlainViewParent className={classes.socialArea}>
      {facebookIcon?.childImageSharp?.fixed &&
      socialLinks?.facebookPage ? (
        <AnimatedInViewChildDiv
          key={'facebook'}
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
                facebookIcon.childImageSharp.fixed as FixedObject
              }
            />
          </a>
        </AnimatedInViewChildDiv>
      ) : null}
      {twitterIcon?.childImageSharp?.fixed &&
      socialLinks?.twitterPage ? (
        <AnimatedInViewChildDiv
          key={'twitter'}
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
              fixed={twitterIcon.childImageSharp.fixed as FixedObject}
            />
          </a>
        </AnimatedInViewChildDiv>
      ) : null}
      {instagramIcon?.childImageSharp?.fixed &&
      socialLinks?.instagramPage ? (
        <AnimatedInViewChildDiv
          key={'instagram'}
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
                instagramIcon.childImageSharp.fixed as FixedObject
              }
            />
          </a>
        </AnimatedInViewChildDiv>
      ) : null}
    </AnimatedInPlainViewParent>
  )
}
