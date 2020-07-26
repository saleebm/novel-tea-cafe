import React from 'react'
import { Container, Divider, Grid } from '@material-ui/core'
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
    },
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
    margin: `${theme.spacing(5)}px auto`,
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
      <Container maxWidth={'lg'}>
        <Grid className={classes.rootTabs} container spacing={3}>
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
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.kratom}
              pageTitle={'Kratom'}
              edges={menu.kratom.edges}
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.addIns}
              pageTitle={'Add Ins'}
              edges={menu.addIns.edges}
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.herbalTea}
              pageTitle={'Custom Herbal Tea'}
              edges={menu.herbalTea.edges}
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.coffee}
              pageTitle={'Coffee'}
              edges={menu.coffee.edges}
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.superfoods}
              pageTitle={'SuperFoods'}
              edges={menu.superfoods.edges}
            />
            <Divider variant={'inset'} orientation={'horizontal'} />
            <MenuSection
              id={MenuPageKeys.bulk}
              pageTitle={'Bulk Kratom and Kava'}
              edges={menu.bulk.edges}
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
