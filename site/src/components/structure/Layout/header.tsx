import React from 'react'
import { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from '@material-ui/core'

import { Logo_Img_In_HeaderQuery } from '@Graphql/gatsby-graphql'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import styles from './header.mod.scss'
import { Nav } from '@Components/structure/Layout/nav'
import { Logo } from '@Components/structure/Layout/logo'

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
        {file?.childImageSharp?.fixed && (
          <Logo file={file.childImageSharp.fixed as FixedObject} />
        )}
        <AnimatedInViewChildDiv>
          <Nav
            logoSrc={
              (file?.childImageSharp?.fixed as FixedObject) ??
              undefined
            }
          />
        </AnimatedInViewChildDiv>
      </AnimatedInPlainViewParent>
    </Container>
  )
}
