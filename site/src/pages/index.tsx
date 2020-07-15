import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { SEO } from '@Components/elements/SEO/seo'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '3rem',
  },
  subTitle: {
    width: '100%',
  },
}))

function IndexPage() {
  const classes = useStyles()

  return (
    <>
      <SEO title={'Herbal Mixology'} />
      <Container maxWidth={'xl'} component={'section'}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <AnimatedInPlainViewParent key={'home-title'}>
              <AnimatedInViewChildDiv>
                <Typography className={classes.title} variant={'h1'}>
                  NovelTea
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv>
                <Typography
                  className={classes.subTitle}
                  variant={'h2'}
                >
                  Herbal Mixology
                </Typography>
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage
