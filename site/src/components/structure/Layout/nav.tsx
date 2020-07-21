import React, { useMemo, useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
  Backdrop,
  MenuItem,
  Modal,
  Typography,
  Fade,
  Grid,
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
import { FixedObject } from 'gatsby-image'
import { Logo } from '@Components/structure/Layout/logo'

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
    [theme.breakpoints.down('md')]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
  },
  navGrid: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  menuTitle: {
    fontSize: '7vmax',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  menuItems: {
    fontSize: '5vmax',
    fontVariant: 'petite-caps',
    marginTop: theme.spacing(1),
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  menuItemWrap: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
    alignContent: 'space-evenly',
    textAlign: 'left',
    height: '100%',
    overflowY: 'auto',
  },
  darkModeArea: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export function Nav({ logoSrc }: { logoSrc?: FixedObject }) {
  const classes = useStyles()
  const [navOpen, setNavOpen] = useState(false)
  return useMemo(
    () => (
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
          onToggleClicked={() =>
            setNavOpen((prevState) => !prevState)
          }
        />
        <div className={classes.navigationWrap}>
          <Modal
            aria-labelledby={'navigation-title'}
            onBackdropClick={() => setNavOpen(false)}
            open={navOpen}
            BackdropComponent={Backdrop}
          >
            <motion.nav
              animate={navOpen ? 'show' : 'hidden'}
              className={classes.navigation}
            >
              <Grid container spacing={4} className={classes.navGrid}>
                <Grid item xs={12} md={6}>
                  <Grid
                    alignItems={'center'}
                    justify={'center'}
                    container
                    spacing={0}
                  >
                    <Grid item xs={12} sm={6}>
                      {logoSrc && (
                        <Logo
                          onClick={() => setNavOpen(false)}
                          file={logoSrc}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        className={classes.menuTitle}
                        id={'navigation-title'}
                        variant={'h1'}
                      >
                        Novel Tea Cafe
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.menuItemWrap}
                >
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
                </Grid>
              </Grid>
            </motion.nav>
          </Modal>
        </div>
      </div>
    ),
    [classes, navOpen, setNavOpen],
  )
}
