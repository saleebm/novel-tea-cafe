import React, { useState } from 'react'
import {
  AppBar,
  Card,
  Container,
  Grid,
  Paper,
  Tab,
  Typography,
} from '@material-ui/core'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'

import { Menu_PageQuery } from '@Graphql/gatsby-graphql'
import { makeStyles } from '@material-ui/core/styles'
import { MenuPanel } from '@Components/views/Menu/menu-panel'
import { MenuPriceChip } from '@Components/views/Menu/menu-price-chip'

interface Menu {
  menu: Menu_PageQuery
}

const useStyles = makeStyles((theme) => ({
  rootTabs: {
    position: 'relative',
  },
  root: {
    position: 'relative',
    display: 'grid',
    grid: '1fr / 1fr',
    rowGap: '50px',
    height: '100%',
    minHeight: 'fit-content',
  },
  gridList: {
    position: 'relative',
  },
}))

enum TabLinks {
  kavaKava = 'kavaKava',
  kratom = 'kratom',
}

enum MenuPageKeys {
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
  const [tabContext, setTabContext] = useState<
    TabLinks.kavaKava | TabLinks.kratom
  >(TabLinks.kavaKava)

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string,
  ) => {
    setTabContext(newValue as TabLinks)
  }

  return (
    <div className={classes.root}>
      <Container maxWidth={'lg'}>
        <TabContext value={tabContext}>
          <Grid className={classes.rootTabs} container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper component={'section'} variant={'outlined'}>
                <MenuPanel
                  value={TabLinks.kavaKava}
                  menuItem={menu.kavaKava.edges}
                />
                <MenuPanel
                  value={TabLinks.kratom}
                  menuItem={menu.kratom.edges}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <AppBar
                position={'sticky'}
                component={'aside'}
                variant={'elevation'}
              >
                <TabList
                  onChange={handleChange}
                  aria-label={'simple tabs menu'}
                  orientation={'vertical'}
                  variant={'fullWidth'}
                >
                  <Tab
                    value={TabLinks.kavaKava}
                    label={'Kava Kava'}
                  />
                  <Tab value={TabLinks.kratom} label={'Kratom'} />
                </TabList>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                {menu.addIns.edges.map((addIn) => (
                  <Card key={addIn.node.id}>
                    <Typography variant={'h1'}>
                      {addIn.node.name}
                    </Typography>
                    <Typography variant={'subtitle1'}>
                      {addIn.node.description}
                    </Typography>
                    {addIn.node.menuItemPriceOption?.map(
                      (option, index) => (
                        <Grid
                          key={option?.variant ?? index}
                          item
                          xs={12}
                          md={6}
                        >
                          <MenuPriceChip
                            size={'medium'}
                            label={option?.variant}
                            color={
                              index % 2 === 0
                                ? 'primary'
                                : 'secondary'
                            }
                            price={option?.price ?? undefined}
                          />
                        </Grid>
                      ),
                    )}
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </TabContext>
      </Container>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}
