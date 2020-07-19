import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { MenuToggle } from '@Components/elements/MenuToggle/menu-toggle'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'
import { Backdrop } from '@material-ui/core'

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
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: fade(theme.palette.background.paper, 0.9),
  },
}))

const navigationVariants: Variants = {
  hidden: {
    scaleY: 0,
    scaleX: 1,
    translateY: '-100vh',
  },
  open: {
    scaleY: 1,
    scaleX: 1,
    translateY: 0,
  },
  close: {
    scaleY: 0,
    scaleX: 0,
    translateY: '100vh',
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
        <AnimatePresence exitBeforeEnter>
          {navOpen && (
            <motion.nav
              initial={'hidden'}
              animate={'open'}
              exit={'close'}
              variants={navigationVariants}
              className={classes.navigation}
            >
              <DarkmodeToggle />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
