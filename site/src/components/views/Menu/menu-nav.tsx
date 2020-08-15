import React, { useCallback, useContext, useMemo } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Tab } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'gatsby'
import { MenuPageKeys } from '@Components/views/Menu/menu'
import { MenuNavContext } from '@Components/context/MenuNav/menu-nav-context'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: theme.spacing(5),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.primary[theme.palette.type],
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      overflowX: 'auto',
      color: theme.palette.primary.contrastText,
    },
  },
  navigationButton: {
    fontSize: '1.5rem',
    lineHeight: 1,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  scrollButton: {
    color: theme.palette.text.primary,
  },
}))

export function MenuNav() {
  const classes = useStyles()
  const {
    setMenuNav,
    menuNav: { menuLocation },
  } = useContext(MenuNavContext)
  const isWideScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('md'),
  )
  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setMenuNav({ menuLocation: newValue })
    },
    [setMenuNav],
  )

  const getIfSelected = useCallback(
    (tabName: string, index: number) =>
      typeof window !== 'undefined' &&
      window.location.hash === `#${tabName}`
        ? true
        : menuLocation === index,
    [menuLocation],
  )

  //todo consider using Object.keys
  // dryyyyyy (DRY) off
  return useMemo(
    () => (
      <AppBar
        position={isWideScreen ? 'sticky' : 'fixed'}
        component={'aside'}
        variant={'elevation'}
        elevation={isWideScreen ? 0 : 4}
        className={classes.appBar}
      >
        <AnimatedInPlainViewParent>
          <AnimatedInViewChildDiv>
            <Tabs
              value={menuLocation}
              onChange={handleChange}
              indicatorColor={'secondary'}
              textColor={'primary'}
              variant={isWideScreen ? 'fullWidth' : 'scrollable'}
              scrollButtons={'on'}
              aria-label={'auto tabs'}
              orientation={isWideScreen ? 'vertical' : 'horizontal'}
              TabScrollButtonProps={{
                className: classes.scrollButton,
              }}
            >
              <Tab
                selected={getIfSelected(MenuPageKeys.kavaKava, 0)}
                fullWidth
                label={'Kava Kava'}
                component={Link}
                to={`#${MenuPageKeys.kavaKava}`}
                className={classes.navigationButton}
                textColor={'primary'}
                id={`auto-tab-0`}
                aria-controls={`auto-tabpanel-0`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.kratom, 1)}
                fullWidth
                label={'Kratom'}
                component={Link}
                to={`#${MenuPageKeys.kratom}`}
                className={classes.navigationButton}
                textColor={'primary'}
                id={`auto-tab-1`}
                aria-controls={`auto-tabpanel-1`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.addIns, 2)}
                fullWidth
                component={Link}
                className={classes.navigationButton}
                to={`#${MenuPageKeys.addIns}`}
                label={'Add-ins: Make it Stronger'}
                textColor={'primary'}
                id={`auto-tab-2`}
                aria-controls={`auto-tabpanel-2`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.herbalTea, 3)}
                fullWidth
                component={Link}
                className={classes.navigationButton}
                to={`#${MenuPageKeys.herbalTea}`}
                label={'Herbal Tea'}
                textColor={'primary'}
                id={`auto-tab-3`}
                aria-controls={`auto-tabpanel-3`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.coffee, 4)}
                fullWidth
                component={Link}
                className={classes.navigationButton}
                to={`#${MenuPageKeys.coffee}`}
                label={'Coffee & Cold Brew'}
                textColor={'primary'}
                id={`auto-tab-4`}
                aria-controls={`auto-tabpanel-4`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.superfoods, 5)}
                fullWidth
                component={Link}
                className={classes.navigationButton}
                to={`#${MenuPageKeys.superfoods}`}
                label={'Superfoods'}
                textColor={'primary'}
                id={`auto-tab-5`}
                aria-controls={`auto-tabpanel-5`}
              />
              <Tab
                selected={getIfSelected(MenuPageKeys.bulk, 6)}
                fullWidth
                component={Link}
                className={classes.navigationButton}
                to={`#${MenuPageKeys.bulk}`}
                label={'Bulk Kratom & KavaKava'}
                textColor={'primary'}
                id={`auto-tab-6`}
                aria-controls={`auto-tabpanel-6`}
              />
            </Tabs>
          </AnimatedInViewChildDiv>
        </AnimatedInPlainViewParent>
      </AppBar>
    ),
    [
      classes,
      isWideScreen,
      menuLocation,
      handleChange,
      getIfSelected,
    ],
  )
}
