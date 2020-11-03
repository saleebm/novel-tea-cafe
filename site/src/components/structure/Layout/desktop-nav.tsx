import React, { useMemo } from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import { MenuItem } from '@material-ui/core'
import clsx from 'clsx'
import { ROUTES } from '@Config/routes'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { useStyles } from '@Components/structure/Layout/nav'
import { DarkmodeToggle } from '@Components/structure/Layout/darkmode-toggle'

export function DesktopNav() {
  const classes = useStyles()
  const { pathname } = useLocation()

  return useMemo(
    () => (
      <AnimatedInPlainViewParent
        className={clsx(
          classes.menuItemWrapDesktop,
          classes.fullWidth,
        )}
      >
        <nav className={classes.menuItemWrapDesktop}>
          {ROUTES.filter((route) => route.showOnDesktop).map(
            (route) => (
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
                    className={classes.menuItemDesktop}
                    color={
                      pathname.includes(route.path)
                        ? 'textPrimary'
                        : 'textSecondary'
                    }
                    style={{
                      textDecoration: pathname.includes(route.path)
                        ? 'underline'
                        : 'unset',
                    }}
                  >
                    {route.name}
                  </MenuItem>
                </MouseTrap>
              </AnimatedInViewChildDiv>
            ),
          )}
          <AnimatedInViewChildDiv
            className={classes.darkModeAreaDesktop}
          >
            <DarkmodeToggle />
          </AnimatedInViewChildDiv>
        </nav>
      </AnimatedInPlainViewParent>
    ),
    [classes, pathname],
  )
}
