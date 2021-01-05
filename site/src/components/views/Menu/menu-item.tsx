import React, { useMemo } from 'react'
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

const useStyles = makeStyles((theme) => ({
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
    marginBottom: theme.spacing(1.5),
  },
  description: {
    maxWidth: '50ch',
    marginTop: '0.35rem',
  },
}))

export function MenuItem({ theRealMenuItem }: MenuItem) {
  const classes = useStyles()
  const menuItemsSorted = Array.from(
    theRealMenuItem.node?.menuItemPriceOption ?? [],
  ).sort((a, b) =>
    a?.variant && b?.variant && a.variant > b.variant ? 1 : -1,
  )
  return useMemo(
    () => (
      <AnimatedInPlainViewParent>
        <AnimatedInViewChildDiv>
          <Card
            key={theRealMenuItem.node.id}
            className={classes.root}
            variant={'elevation'}
            elevation={0}
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
              {theRealMenuItem.node.description && (
                <Typography
                  color={'textPrimary'}
                  variant={'body1'}
                  component={'p'}
                  className={classes.description}
                  gutterBottom
                >
                  {theRealMenuItem.node.description}
                </Typography>
              )}
            </CardContent>
            <CardActions className={classes.cardPrice}>
              {menuItemsSorted.map((option, index) => (
                <MenuPriceChip
                  size={'medium'}
                  key={option?.variant ?? index}
                  label={option?.variant}
                  color={'secondary'}
                  price={option?.price ?? undefined}
                />
              ))}
            </CardActions>
          </Card>
        </AnimatedInViewChildDiv>
      </AnimatedInPlainViewParent>
    ),
    [
      menuItemsSorted,
      theRealMenuItem.node.description,
      theRealMenuItem.node.name,
      theRealMenuItem.node.id,
      classes,
    ],
  )
}
