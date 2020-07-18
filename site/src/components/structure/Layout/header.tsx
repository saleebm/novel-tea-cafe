import React, { useRef } from 'react'
import GatsbyImage, { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import { Container } from '@material-ui/core'

import { Logo_Img_In_HeaderQuery } from '@Graphql/gatsby-graphql'
import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'
import styles from './header.mod.scss'

export function Header() {
  const { file } = useStaticQuery<Logo_Img_In_HeaderQuery>(graphql`
    query LOGO_IMG_IN_HEADER {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  //todo
  // visually hidden link to skip menu
  const mouseTrapRef = useRef(null)

  return (
    <Container
      component={'header'}
      maxWidth={'lg'}
      className={styles.header}
    >
      <div className={styles.header_wrap}>
        <figure className={styles.logo_wrap}>
          <GatsbyLink
            className={styles.logo_link}
            innerRef={mouseTrapRef}
            to={'/'}
          >
            {file?.childImageSharp?.fixed && (
              <MouseTrap
                additionalProps={{}}
                area={ActiveAreaTypes.anchor}
              >
                <GatsbyImage
                  fixed={file?.childImageSharp?.fixed as FixedObject}
                  alt={
                    'bucket with two leaves, noveltea written with kava bar on second line'
                  }
                />
              </MouseTrap>
            )}
          </GatsbyLink>
        </figure>
        <div className={styles.darkmode_area}>
          <DarkmodeToggle />
        </div>
      </div>
    </Container>
  )
}
