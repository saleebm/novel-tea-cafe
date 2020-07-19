import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Backdrop, MenuItem } from '@material-ui/core'
import { motion, Variants } from 'framer-motion'
import { MenuToggle } from '@Components/elements/MenuToggle/menu-toggle'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'
import { ROUTES } from '@Config/routes'
import GatsbyLink from 'gatsby-link'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    whiteSpace: 'nowrap',
  },
  skipToMenu: {
    ...theme.mixins.visuallyHidden,
  },
  navigationWrap: {
    zIndex: 11000000,
  },
  navigation: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: fade(theme.palette.background.paper, 0.9),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-evenly',
    padding: theme.spacing(3),
  },
  menuItems: {
    fontSize: '7vw',
    fontVariant: 'petite-caps',
    marginTop: theme.spacing(3),
  },
}))

const navigationVariants: Variants = {
  hidden: {
    scaleY: 0,
    scaleX: 1,
  },
  open: {
    scaleY: 1,
    scaleX: 1,
  },
  close: {
    scaleY: 0,
    scaleX: 0,
  },
}

export function Nav() {
  const classes = useStyles()
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className={classes.container}>
      <a
        className={classes.skipToMenu}
        title={'Skip to main content.'}
        href={'#herb-main'}
      >
        Skip to main content
      </a>
      <MenuToggle
        isToggled={navOpen}
        onToggleClicked={() => setNavOpen((prevState) => !prevState)}
      />
      <div className={classes.navigationWrap}>
        <Backdrop unmountOnExit mountOnEnter open={navOpen}>
          <motion.nav
            initial={'hidden'}
            animate={'open'}
            exit={'close'}
            variants={navigationVariants}
            className={classes.navigation}
          >
            <AnimatedInPlainViewParent>
              {ROUTES.map((route) => (
                <AnimatedInViewChildDiv key={route.path}>
                  <MenuItem
                    aria-label={route.name}
                    to={route.path}
                    component={GatsbyLink}
                    className={classes.menuItems}
                    onClick={() => setNavOpen(false)}
                  >
                    {route.name}
                  </MenuItem>
                </AnimatedInViewChildDiv>
              ))}
              <DarkmodeToggle />
            </AnimatedInPlainViewParent>
          </motion.nav>
        </Backdrop>
      </div>
    </div>
  )
}
