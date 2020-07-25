import React from 'react'
import { TabPanel, TabPanelProps } from '@material-ui/lab'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu_Item_EdgeFragment } from '@Graphql/gatsby-graphql'
import { MenuPriceChip } from '@Components/views/Menu/menu-price-chip'

interface MenuPanel extends TabPanelProps {
  menuItem: Array<Menu_Item_EdgeFragment>
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '2rem',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  cardContent: {
    flex: '0 1 auto',
  },
  cardPrice: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export function MenuPanel({ value, menuItem, ...rest }: MenuPanel) {
  const classes = useStyles()
  return (
    <TabPanel value={value} {...rest}>
      {menuItem.map((theRealMenuItem) => (
        <Card
          key={theRealMenuItem.node.id}
          className={classes.root}
          variant={'elevation'}
          elevation={0}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              {theRealMenuItem.node.name}
            </Typography>
            <Typography variant={'h5'} component={'p'}>
              {theRealMenuItem.node.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardPrice}>
            {theRealMenuItem.node.menuItemPriceOption?.map(
              (option, index) => (
                <MenuPriceChip
                  size={'medium'}
                  key={option?.variant ?? index}
                  label={option?.variant}
                  color={index % 2 ? 'primary' : 'secondary'}
                  variant={'outlined'}
                  price={option?.price ?? undefined}
                />
              ),
            )}
          </CardActions>
        </Card>
      ))}
    </TabPanel>
  )
}
