import React, { useMemo, useState } from 'react'
import {
  Backdrop,
  Grid,
  MenuItem,
  Modal,
  Typography,
} from '@material-ui/core'
import { Link } from 'gatsby'
import { FixedObject } from 'gatsby-image'
import { useLocation } from '@reach/router'

import { MenuToggle } from '@Components/elements/MenuToggle/menu-toggle'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { Logo } from '@Components/structure/Layout/logo'
import { SocialIcons } from '@Components/structure/Layout/social-icons'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'
import { useStyles } from '@Components/structure/Layout/nav'
import { ROUTES } from '@Config/routes'

interface MobileNavProps {
  logoSrc?: FixedObject
}

export function MobileNav({ logoSrc }: MobileNavProps) {
  const classes = useStyles()
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()

  return useMemo(
    () => (
      <>
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
            <nav className={classes.navigation}>
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
                      <Logo
                        onClick={() => setNavOpen(false)}
                        file={logoSrc}
                      />
                    )}
                    <AnimatedInViewChildDiv>
                      <Typography
                        align={'center'}
                        className={classes.menuTitle}
                        id={'navigation-title'}
                        variant={'h1'}
                        color={'textPrimary'}
                      >
                        NovelTea
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
                        <MenuItem
                          alignItems={'center'}
                          aria-label={route.name}
                          to={route.path}
                          component={Link}
                          className={classes.menuItems}
                          onClick={() => setNavOpen(false)}
                          color={
                            (route.path === '/' &&
                              (pathname === '' ||
                                pathname === '/')) ||
                            (route.path !== '/' &&
                              pathname.includes(route.path))
                              ? 'textSecondary'
                              : 'textPrimary'
                          }
                          style={{
                            textDecoration:
                              (route.path === '/' &&
                                (pathname === '' ||
                                  pathname === '/')) ||
                              (route.path !== '/' &&
                                pathname.includes(route.path))
                                ? 'underline'
                                : 'unset',
                          }}
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
                  </AnimatedInPlainViewParent>
                </Grid>
              </Grid>
            </nav>
          </Modal>
        </div>
      </>
    ),
    [classes, setNavOpen, navOpen, logoSrc, pathname],
  )
}
