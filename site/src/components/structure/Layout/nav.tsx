import React from 'react'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import { FixedObject } from 'gatsby-image'
import { useMediaQuery } from '@material-ui/core'
import { MobileNav } from '@Components/structure/Layout/mobile-nav'
import { DesktopNav } from '@Components/structure/Layout/desktop-nav'

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    maxHeight: 'max-content',
    whiteSpace: 'nowrap',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      flex: 1,
    },
  },
  skipToMenu: {
    ...theme.mixins.visuallyHidden,
  },
  navigationWrap: {
    zIndex: 1000000,
  },
  navigation: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `linear-gradient(90deg, ${fade(
      theme.palette.primary.main,
      0.42,
    )}, 42%, ${fade(
      theme.palette.primary[theme.palette.type],
      0.95,
    )} 100%)`,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navGrid: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100%',
    width: '100%',
  },
  navHeader: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  navHeaderArea: {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexFlow': 'column wrap',
    'marginTop': theme.spacing(2),
    '& figure': {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
    },
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
  menuTitle: {
    fontSize: '4.2rem',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  menuItems: {
    fontSize: '3.2rem',
    fontVariant: 'petite-caps',
    marginTop: theme.spacing(1),
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    borderRadius: '12px',
  },
  menuItemWrap: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignSelf: 'center',
    height: '100%',
  },
  // for mobile
  darkModeArea: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  darkModeAreaDesktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    maxHeight: '50px',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2.5),
  },
  menuItemWrapDesktop: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    rowGap: '1rem',
  },
  fullWidth: {
    width: '100%',
  },
  menuItemDesktop: {
    fontSize: '1.5rem',
    fontVariant: 'petite-caps',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2.5),
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    borderRadius: '12px',
  },
}))

export function Nav({ logoSrc }: { logoSrc?: FixedObject }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallWidth = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={classes.container}>
      <a
        className={classes.skipToMenu}
        title={'Skip to main content.'}
        href={'#herb-main'}
      >
        Skip to main content
      </a>
      {isSmallWidth ? (
        <MobileNav logoSrc={logoSrc} />
      ) : (
        <DesktopNav />
      )}
    </div>
  )
}
