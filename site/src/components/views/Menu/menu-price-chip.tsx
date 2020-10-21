import React from 'react'
import clsx from 'clsx'
import { Chip, ChipProps } from '@material-ui/core'
import { PriceTag } from '@Components/views/Menu/price-tag'
import styles from './menu.mod.scss'
import { makeStyles } from '@material-ui/core/styles'

type MenuPriceChipProps = Omit<ChipProps, 'icon' | 'variant'> & {
  price?: number
}

const useStyles = makeStyles((theme) => ({
  chipLabel: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.button.fontSize,
    fontFamily: 'Jost',
    fontVariationSettings: '"SALT" 1, "WGHT" 200, "WDTH" 69',
  },
}))

export const MenuPriceChip = ({
  price,
  className,
  ...props
}: MenuPriceChipProps) => {
  const { chipLabel } = useStyles()
  return (
    <div className={styles.menupricewrap}>
      <Chip
        variant={'outlined'}
        className={clsx(className, styles.chip)}
        classes={{
          label: chipLabel,
        }}
        icon={
          price && !isNaN(price) ? (
            <PriceTag price={price / 100} />
          ) : undefined
        }
        {...props}
      />
    </div>
  )
}
