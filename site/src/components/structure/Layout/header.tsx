import React from 'react'
import { FixedObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import { LogoJsonLd } from 'gatsby-plugin-next-seo'
import { makeStyles } from '@material-ui/core/styles'

import { Nav } from '@Components/structure/Layout/nav'
import { Logo } from '@Components/structure/Layout/logo'
import styles from './header.mod.scss'

const useStyles = makeStyles((theme) => ({
  navArea: {
    position: 'relative',
    display: 'block',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
  },
}))

export function Header() {
  const {
    file,
  } = useStaticQuery<GatsbyTypes.LogoImgInHeaderQuery>(graphql`
    query LogoImgInHeader {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 90, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const classes = useStyles()

  return (
    <Container maxWidth={'lg'} className={styles.header}>
      <Grid component={'header'} container id={'top'}>
        <Grid item xs={8} sm={6}>
          {file?.childImageSharp?.fixed && (
            <>
              <LogoJsonLd
                url={'https://novelteaorlando.com'}
                logo={file.childImageSharp.fixed.src}
                defer
              />
              <Logo
                file={file.childImageSharp.fixed as FixedObject}
              />
            </>
          )}
        </Grid>
        <Grid className={classes.navArea} item xs={4} sm={6}>
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
