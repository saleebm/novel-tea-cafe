import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tab } from '@material-ui/core'
import { Link } from 'gatsby'
import { MenuPageKeys } from '@Components/views/Menu/menu'

const useStyles = makeStyles((theme) => ({
  appBar: {
    'paddingTop': theme.spacing(5),
    'backgroundColor': 'transparent',
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
  },
  navigationButton: {
    fontSize: '1.5rem',
    lineHeight: 1,
    marginTop: theme.spacing(3),
  },
}))

export function MenuNav() {
  const classes = useStyles()

  const getIfSelected = useCallback(
    (tabName: string) =>
      typeof window !== 'undefined' &&
      window.location.hash === `#${tabName}`,
    [],
  )

  return (
    <AppBar
      position={'sticky'}
      component={'aside'}
      variant={'elevation'}
      elevation={0}
      className={classes.appBar}
    >
      <Tab
        selected={getIfSelected(MenuPageKeys.kavaKava)}
        fullWidth
        label={'Kava Kava'}
        component={Link}
        to={`#${MenuPageKeys.kavaKava}`}
        className={classes.navigationButton}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.kratom)}
        fullWidth
        label={'Kratom'}
        component={Link}
        to={`#${MenuPageKeys.kratom}`}
        className={classes.navigationButton}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.addIns)}
        fullWidth
        component={Link}
        className={classes.navigationButton}
        to={`#${MenuPageKeys.addIns}`}
        label={'Add-ins'}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.herbalTea)}
        fullWidth
        component={Link}
        className={classes.navigationButton}
        to={`#${MenuPageKeys.herbalTea}`}
        label={'Custom Herbal Tea'}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.coffee)}
        fullWidth
        component={Link}
        className={classes.navigationButton}
        to={`#${MenuPageKeys.coffee}`}
        label={'Cold Brew & Coffee'}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.superfoods)}
        fullWidth
        component={Link}
        className={classes.navigationButton}
        to={`#${MenuPageKeys.superfoods}`}
        label={'Superfoods'}
        textColor={'primary'}
      />
      <Tab
        selected={getIfSelected(MenuPageKeys.bulk)}
        fullWidth
        component={Link}
        className={classes.navigationButton}
        to={`#${MenuPageKeys.bulk}`}
        label={'Bulk Kratom & KavaKava'}
        textColor={'primary'}
      />
    </AppBar>
  )
}
