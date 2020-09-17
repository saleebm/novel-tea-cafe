import React from 'react'
import { Container, Divider, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocialIcons } from '@Components/structure/Layout/social-icons'

const useClasses = makeStyles((theme) => ({
  footerWrap: {
    position: 'relative',
    minHeight: '100%',
    padding: `${theme.spacing(5)}px 0 ${theme.spacing(10)}px`,
  },
  socialIconWrap: {
    width: '100%',
    display: 'inline-flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(3),
    filter: 'brightness(0.88) contrast(1.3)',
  },
}))

export function Footer() {
  const classes = useClasses()

  return (
    <Container
      className={classes.footerWrap}
      maxWidth={'lg'}
      component={'footer'}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Divider variant={'inset'} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.socialIconWrap}>
            <SocialIcons />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
