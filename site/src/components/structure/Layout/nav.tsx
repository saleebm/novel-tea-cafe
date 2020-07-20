import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
  Backdrop,
  MenuItem,
  Modal,
  Typography,
  Fade,
} from '@material-ui/core'
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
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  menuItemWrap: {
    maxWidth: '1200px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    height: '100%',
    overflowY: 'auto',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  menuTitle: {
    fontSize: '7vmax',
  },
  menuItems: {
    fontSize: '5vmax',
    fontVariant: 'petite-caps',
    marginTop: theme.spacing(1),
  },
  darkModeArea: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

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
        <Modal
          aria-labelledby={'navigation-title'}
          onBackdropClick={() => setNavOpen(false)}
          open={navOpen}
          BackdropComponent={Backdrop}
        >
          <Fade in={navOpen}>
            <motion.nav
              animate={navOpen ? 'show' : 'hidden'}
              className={classes.navigation}
            >
              <div className={classes.menuItemWrap}>
                <Typography
                  className={classes.menuTitle}
                  id={'navigation-title'}
                  variant={'h1'}
                >
                  Menu
                </Typography>
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
                <AnimatedInViewChildDiv
                  className={classes.darkModeArea}
                >
                  <DarkmodeToggle />
                </AnimatedInViewChildDiv>
              </div>
            </motion.nav>
          </Fade>
        </Modal>
      </div>
    </div>
  )
}
