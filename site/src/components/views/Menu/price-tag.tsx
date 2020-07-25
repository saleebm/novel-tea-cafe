import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatCurrencyOutput } from '@Utils/methods/format-currency-output'
import { formatMoney } from '@Utils/methods/format-money'

const useClasses = makeStyles((theme) => ({
  priceTagSpan: {
    '&> span': {
      'fontVariant': 'tabular-nums',
      'fontVariationSettings': `'wght' 700, 'slnt' -100`,
      '&:nth-child(2)': {
        fontFeatureSettings: `'numr'`,
      },
    },
  },
  info: {
    fontSize: theme.typography.pxToRem(15),
  },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}))

export function PriceTag({ price }: { price: number }) {
  const classes = useClasses()
  return (
    <Avatar className={classes.avatar} variant={'circle'}>
      <Typography className={classes.info}>
        <span
          className={classes.priceTagSpan}
          dangerouslySetInnerHTML={{
            __html: `${formatCurrencyOutput(formatMoney(price))}`,
          }}
        />
      </Typography>
    </Avatar>
  )
}
