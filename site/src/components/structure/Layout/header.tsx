import React from 'react'
import GatsbyImage, { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './header.mod.scss'
import GatsbyLink from 'gatsby-link'

export function Header() {
  const { file } = useStaticQuery<{
    file: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }>(graphql`
    query LOGO_IMG {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 175) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <figure className={styles.logo_wrap}>
          <GatsbyLink to={'/'}>
            <GatsbyImage
              fixed={file?.childImageSharp.fixed}
              alt={
                'bucket with two leaves, noveltea written with kava bar on second line'
              }
            />
          </GatsbyLink>
        </figure>
      </div>
    </header>
  )
}
