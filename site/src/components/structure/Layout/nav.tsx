import React, { useMemo, useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
  Backdrop,
  Grid,
  MenuItem,
  Modal,
  Typography,
} from '@material-ui/core'
import { motion } from 'framer-motion'
import { FixedObject } from 'gatsby-image'
import { Link } from 'gatsby'

import { MenuToggle } from '@Components/elements/MenuToggle/menu-toggle'
import { ROUTES } from '@Config/routes'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { Logo } from '@Components/structure/Layout/logo'
import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'
import { SocialIcons } from '@Components/structure/Layout/social-icons'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    maxHeight: 'max-content',
    whiteSpace: 'nowrap',
    position: 'relative',
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
    fontSize: '2.3rem',
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
              <Grid container spacing={3} className={classes.navGrid}>
                <Grid
                  className={classes.navHeader}
                  item
                  xs={12}
                  md={6}
                >
                  <AnimatedInPlainViewParent
                    className={classes.navHeaderArea}
                  >
                    {logoSrc && (
                      <AnimatedInViewChildDiv>
                        <Logo
                          onClick={() => setNavOpen(false)}
                          file={logoSrc}
                        />
                      </AnimatedInViewChildDiv>
                    )}
                    <AnimatedInViewChildDiv>
                      <Typography
                        align={'center'}
                        className={classes.menuTitle}
                        id={'navigation-title'}
                        variant={'h1'}
                        color={'textPrimary'}
                      >
                        Novel Tea
                      </Typography>
                    </AnimatedInViewChildDiv>
                  </AnimatedInPlainViewParent>
                  <div className={classes.socialIconWrap}>
                    <SocialIcons />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <AnimatedInPlainViewParent
                    className={classes.menuItemWrap}
                  >
                    {ROUTES.map((route) => (
                      <AnimatedInViewChildDiv key={route.path}>
                        <MouseTrap
                          area={ActiveAreaTypes.anchor}
                          additionalProps={{}}
                        >
                          <MenuItem
                            alignItems={'center'}
                            aria-label={route.name}
                            to={route.path}
                            component={Link}
                            className={classes.menuItems}
                            onClick={() => setNavOpen(false)}
                            color={'textSecondary'}
                          >
                            {route.name}
                          </MenuItem>
                        </MouseTrap>
                      </AnimatedInViewChildDiv>
                    ))}

                    <AnimatedInViewChildDiv
                      className={classes.darkModeArea}
                    >
                      <DarkmodeToggle />
                    </AnimatedInViewChildDiv>
                  </AnimatedInPlainViewParent>
                </Grid>
              </Grid>
            </motion.nav>
          </Modal>
        </div>
      </div>
    ),
    [classes, navOpen, setNavOpen, logoSrc],
  )
}
