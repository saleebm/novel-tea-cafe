import React, { useCallback, useContext, useMemo } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Tab } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'gatsby'
import { MenuPageKeys } from '@Components/views/Menu/menu'
import { MenuNavContext } from '@Components/context/MenuNav/menu-nav-context'

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: theme.spacing(5),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.background.paper,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      overflowX: 'auto',
      boxShadow: theme.shadows['6'],
    },
    zIndex: 1000,
  },
  navigationButton: {
    'color': theme.palette.text.primary,
    'fontSize': 'clamp(1.3rem, 10vw, 1.6rem)',
    'lineHeight': 1,
    'marginTop': theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
    'fallback': {
      fontSize: '16px',
    },
    '& span': {
      color: theme.palette.text.primary,
    },
  },
  btnActive: {
    'color':
      theme.palette.primary[
        theme.palette.type === 'dark' ? 'light' : 'dark'
      ],
    '& span': {
      color:
        theme.palette.primary[
          theme.palette.type === 'dark' ? 'light' : 'dark'
        ],
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

  return useMemo(
    () => (
      <AppBar
        position={isWideScreen ? 'sticky' : 'fixed'}
        component={'aside'}
        variant={'elevation'}
        elevation={isWideScreen ? 0 : 4}
        className={classes.appBar}
      >
        <Tabs
          value={menuLocation}
          onChange={handleChange}
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
            id={`auto-tab-0`}
            aria-controls={`auto-tabpanel-0`}
            classes={{
              selected: classes.btnActive,
            }}
          />
          <Tab
            selected={getIfSelected(MenuPageKeys.kratom, 1)}
            fullWidth
            label={'Kratom'}
            component={Link}
            to={`#${MenuPageKeys.kratom}`}
            className={classes.navigationButton}
            id={`auto-tab-1`}
            aria-controls={`auto-tabpanel-1`}
            classes={{
              selected: classes.btnActive,
            }}
          />
          <Tab
            selected={getIfSelected(MenuPageKeys.addIns, 2)}
            fullWidth
            component={Link}
            className={classes.navigationButton}
            to={`#${MenuPageKeys.addIns}`}
            label={'Add-ins: Make it Stronger'}
            id={`auto-tab-2`}
            aria-controls={`auto-tabpanel-2`}
            classes={{
              selected: classes.btnActive,
            }}
          />
          <Tab
            selected={getIfSelected(MenuPageKeys.herbalTea, 3)}
            fullWidth
            component={Link}
            className={classes.navigationButton}
            to={`#${MenuPageKeys.herbalTea}`}
            label={'Herbal Tea'}
            id={`auto-tab-3`}
            aria-controls={`auto-tabpanel-3`}
            classes={{
              selected: classes.btnActive,
            }}
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
            classes={{
              selected: classes.btnActive,
            }}
          />
          <Tab
            selected={getIfSelected(MenuPageKeys.bulk, 5)}
            fullWidth
            component={Link}
            className={classes.navigationButton}
            to={`#${MenuPageKeys.bulk}`}
            label={'Bulk Kratom & KavaKava'}
            id={`auto-tab-6`}
            aria-controls={`auto-tabpanel-6`}
            classes={{
              selected: classes.btnActive,
            }}
          />
        </Tabs>
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
