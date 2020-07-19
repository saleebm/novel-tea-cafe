import React from 'react'
import GatsbyImage, { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import { Container } from '@material-ui/core'

import { Logo_Img_In_HeaderQuery } from '@Graphql/gatsby-graphql'
import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import styles from './header.mod.scss'
import { Nav } from '@Components/structure/Layout/nav'

export function Header() {
  const { file } = useStaticQuery<Logo_Img_In_HeaderQuery>(graphql`
    query LOGO_IMG_IN_HEADER {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container
      component={'header'}
      maxWidth={false}
      className={styles.header}
    >
      <AnimatedInPlainViewParent className={styles.header_wrap}>
        <figure className={styles.logo_wrap}>
          <GatsbyLink className={styles.logo_link} to={'/'}>
            {file?.childImageSharp?.fixed && (
              <AnimatedInViewChildDiv>
                <MouseTrap
                  additionalProps={{}}
                  area={ActiveAreaTypes.anchor}
                >
                  <GatsbyImage
                    fixed={
                      file?.childImageSharp?.fixed as FixedObject
                    }
                    alt={
                      'bucket with two leaves, noveltea written with kava bar on second line'
                    }
                  />
                </MouseTrap>
              </AnimatedInViewChildDiv>
            )}
          </GatsbyLink>
        </figure>
        <AnimatedInViewChildDiv>
          <Nav />
        </AnimatedInViewChildDiv>
      </AnimatedInPlainViewParent>
    </Container>
  )
}
