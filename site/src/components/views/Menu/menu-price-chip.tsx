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
    ...theme.typography.body2,
    color: theme.palette.text.primary,
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
