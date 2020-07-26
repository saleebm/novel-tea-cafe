import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import { MenuPriceChip } from '@Components/views/Menu/menu-price-chip'
import { Menu_Item_EdgeFragment } from '@Graphql/gatsby-graphql'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
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
    alignSelf: 'flex-start',
  },
  cardPrice: {
    flex: '1 1 auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}))

export function MenuItem({
  theRealMenuItem,
}: {
  theRealMenuItem: Menu_Item_EdgeFragment
}) {
  const classes = useStyles()
  return (
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
          variant={'h3'}
          component={'h2'}
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
              color={'secondary'}
              price={option?.price ?? undefined}
            />
          ),
        )}
      </CardActions>
    </Card>
  )
}
