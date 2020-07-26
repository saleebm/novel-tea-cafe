import React from 'react'
import { Container, Grid } from '@material-ui/core'
import clsx from 'clsx'

import { Menu_PageQuery } from '@Graphql/gatsby-graphql'
import { makeStyles } from '@material-ui/core/styles'
import { MenuSection } from '@Components/views/Menu/menu-section'
import { MenuNav } from '@Components/views/Menu/menu-nav'

interface Menu {
  menu: Menu_PageQuery
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
  gridList: {
    position: 'relative',
  },
  menuColumn: {
    padding: `${theme.spacing(1)}px 0`,
  },
  menuWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    rowGap: `${theme.spacing(4)}px`,
    height: '100%',
    padding: 0,
    position: 'relative',
  },
  menuSectionWrap: {
    position: 'relative',
  },
  navSection: {
    position: 'relative',
  },
}))

export enum MenuPageKeys {
  bulk = 'bulk',
  addIns = 'addIns',
  coffee = 'coffee',
  herbalTea = 'herbalTea',
  superfoods = 'superfoods',
  kavaKava = 'kavaKava',
  kratom = 'kratom',
}

export function Menu({ menu }: Menu) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container disableGutters maxWidth={'lg'}>
        <Grid className={classes.rootTabs} container spacing={0}>
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
              id={MenuPageKeys.superfoods}
              pageTitle={'Superfoods'}
              edges={menu.superfoods.edges}
              index={5}
            />
            <MenuSection
              id={MenuPageKeys.bulk}
              pageTitle={'Bulk Kratom and Kava'}
              edges={menu.bulk.edges}
              index={6}
            />
          </Grid>
          <Grid className={classes.menuColumn} item xs={12} md={4}>
            <MenuNav />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
