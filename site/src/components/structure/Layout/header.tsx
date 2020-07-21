import React from 'react'
import { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Grid } from '@material-ui/core'

import { Logo_Img_In_HeaderQuery } from '@Graphql/gatsby-graphql'
import { Nav } from '@Components/structure/Layout/nav'
import { Logo } from '@Components/structure/Layout/logo'
import styles from './header.mod.scss'

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
    <Container maxWidth={false} className={styles.header}>
      <Grid component={'header'} container>
        <Grid item xs={8} sm={6}>
          {file?.childImageSharp?.fixed && (
            <Logo file={file.childImageSharp.fixed as FixedObject} />
          )}
        </Grid>
        <Grid item xs={4} sm={6}>
          <Nav
            logoSrc={
              (file?.childImageSharp?.fixed as FixedObject) ??
              undefined
            }
          />
        </Grid>
      </Grid>
    </Container>
  )
}
