import React from 'react'
import { Container, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocialIcons } from '@Components/structure/Layout/social-icons'

const useClasses = makeStyles((theme) => ({
  footerWrap: {
    position: 'relative',
    display: 'block',
    minHeight: '100%',
    padding: `${theme.spacing(5)}px 0 ${theme.spacing(10)}px`,
  },
  socialIconWrap: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
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
      <div className={classes.socialIconWrap}>
        <Divider variant={'inset'} />
        <SocialIcons />
      </div>
    </Container>
  )
}
