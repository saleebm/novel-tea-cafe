import React from 'react'
import { Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocialIcons } from '@Components/structure/Layout/social-icons'

const useClasses = makeStyles((theme) => ({
  footerWrap: {
    position: 'relative',
    display: 'flex',
    zIndex: 2,
    flexFLow: 'column nowrap',
    height: '100%',
  },
  socialIconWrap: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
}))

export function Footer() {
  const classes = useClasses()

  return (
    <Container
      className={classes.footerWrap}
      maxWidth={'md'}
      component={'footer'}
    >
      <Divider variant={'fullWidth'} />
      <div className={classes.socialIconWrap}>
        <SocialIcons />
      </div>
    </Container>
  )
}
