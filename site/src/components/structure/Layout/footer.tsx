import React from 'react'
import { Container, Divider, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocialIcons } from '@Components/structure/Layout/social-icons'

const useClasses = makeStyles((theme) => ({
  footerWrap: {
    position: 'relative',
    height: 'min-content',
    minHeight: '100%',
    padding: `${theme.spacing(5)}px 0 ${theme.spacing(10)}px`,
  },
}))

export function Footer() {
  const classes = useClasses()

  return (
    <Container
      className={classes.footerWrap}
      maxWidth={'xl'}
      component={'footer'}
    >
      <Grid container spacing={3} justify={'flex-end'}>
        <Grid item xs={12}>
          <Divider variant={'inset'} />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SocialIcons />
        </Grid>
      </Grid>
    </Container>
  )
}
