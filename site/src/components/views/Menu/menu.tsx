import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { MenuSection } from '@Components/views/Menu/menu-section'
import { MenuNav } from '@Components/views/Menu/menu-nav'
import { MenuNavContextProvider } from '@Components/context/MenuNav/menu-nav-context'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

interface Menu {
  menu: GatsbyTypes.MENU_PAGEQuery
}

const useStyles = makeStyles((theme) => ({
  rootTabs: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      paddingBottom: theme.spacing(7),
    },
    margin: `${theme.spacing(4)}px 0`,
  },
  root: {
    position: 'relative',
    height: '100%',
    minHeight: 'fit-content',
  },
  pageTitle: {
    fontSize: '4.2rem',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    width: '100%',
  },
  fullBlock: {
    position: 'relative',
    width: '100%',
    display: 'block',
  },
  gridList: {
    position: 'relative',
  },
  menuColumn: {
    padding: `${theme.spacing(1)}px 0`,
  },
  menuWrap: {
    rowGap: `${theme.spacing(4)}px`,
    height: '100%',
    padding: 0,
    position: 'relative',
  },
  menuSectionWrap: {
    position: 'relative',
    marginBottom: theme.spacing(3),
    padding: 0,
    marginBlock: theme.spacing(0.25),
  },
  navSection: {
    position: 'relative',
  },
  menuNavWrap: {
    height: '100%',
    width: '100%',
    minHeight: '100%',
    position: 'relative',
  },
}))

export enum MenuPageKeys {
  bulk = 'bulk',
  addIns = 'addIns',
  coffee = 'coffee',
  herbalTea = 'herbalTea',
  kavaKava = 'kavaKava',
  kratom = 'kratom',
}

export function Menu({ menu }: Menu) {
  const classes = useStyles()
  //todo
  // dynamically set menu page keys
  // ex. set/unset from sanity and update here
  // set page title dynamically
  return (
    <div className={classes.root}>
      <MenuNavContextProvider>
        <AnimatedInPlainViewParent>
          <AnimatedInViewChildDiv className={classes.fullBlock}>
            <Typography
              className={classes.pageTitle}
              variant={'h1'}
              color={'textSecondary'}
            >
              Menu
            </Typography>
          </AnimatedInViewChildDiv>
          <AnimatedInViewChildDiv>
            <Grid className={classes.rootTabs} container>
              <Grid
                className={clsx(classes.menuWrap, classes.menuColumn)}
                item
                xs={12}
                md={8}
              >
                <MenuSection
                  id={MenuPageKeys.kavaKava}
                  pageTitle={'Kava Kava'}
                  edges={menu.kavaKava.edges}
                  index={0}
                />
                <MenuSection
                  id={MenuPageKeys.kratom}
                  pageTitle={'Kratom'}
                  edges={menu.kratom.edges}
                  index={1}
                />
                <MenuSection
                  id={MenuPageKeys.addIns}
                  pageTitle={'Add-ins: Make it Stronger'}
                  edges={menu.addIns.edges}
                  index={2}
                />
                <MenuSection
                  id={MenuPageKeys.herbalTea}
                  pageTitle={'Herbal Tea'}
                  edges={menu.herbalTea.edges}
                  index={3}
                />
                <MenuSection
                  id={MenuPageKeys.coffee}
                  pageTitle={'Coffee & Cold Brew'}
                  edges={menu.coffee.edges}
                  index={4}
                />
                <MenuSection
                  id={MenuPageKeys.bulk}
                  pageTitle={'Bulk Kratom and Kava'}
                  edges={menu.bulk.edges}
                  index={5}
                />
              </Grid>
              <Grid
                className={classes.menuColumn}
                item
                xs={12}
                md={4}
              >
                <div className={classes.menuNavWrap}>
                  <MenuNav />
                </div>
              </Grid>
            </Grid>
          </AnimatedInViewChildDiv>
        </AnimatedInPlainViewParent>
      </MenuNavContextProvider>
    </div>
  )
}
