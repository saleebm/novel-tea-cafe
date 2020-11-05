import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  CardProps,
  Typography,
} from '@material-ui/core'
import { MenuPriceChip } from '@Components/views/Menu/menu-price-chip'

import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'

interface MenuItem extends CardProps {
  theRealMenuItem: GatsbyTypes.MENU_ITEM_EDGEFragment
}

const useStyles = makeStyles((_theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 'clamp(1.3rem, 8vw, 2.4rem)',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    fallback: {
      fontSize: '2rem',
    },
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
  description: {
    maxWidth: '50ch',
  },
}))

export function MenuItem({ theRealMenuItem, ...rest }: MenuItem) {
  const classes = useStyles()
  return (
    <AnimatedInPlainViewParent>
      <AnimatedInViewChildDiv>
        <Card
          key={theRealMenuItem.node.id}
          className={classes.root}
          variant={'elevation'}
          elevation={0}
          {...rest}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.title}
              color={'textSecondary'}
              variant={'h3'}
              component={'h3'}
            >
              {theRealMenuItem.node.name}
            </Typography>
            <Typography
              color={'textPrimary'}
              variant={'body1'}
              component={'p'}
              className={classes.description}
            >
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
      </AnimatedInViewChildDiv>
    </AnimatedInPlainViewParent>
  )
}
