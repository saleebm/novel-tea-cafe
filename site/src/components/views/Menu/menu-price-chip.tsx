import React from 'react'
import clsx from 'clsx'
import { Chip, ChipProps } from '@material-ui/core'
import { PriceTag } from '@Components/views/Menu/price-tag'
import styles from './menu.mod.scss'

type MenuPriceChipProps = Omit<ChipProps, 'icon' | 'variant'> & {
  price?: number
}

export const MenuPriceChip = ({
  price,
  className,
  ...props
}: MenuPriceChipProps) => (
  <div className={styles.menupricewrap}>
    <Chip
      variant={'outlined'}
      className={clsx(className, styles.chip)}
      icon={
        price && !isNaN(price) ? (
          <PriceTag price={price / 100} />
        ) : undefined
      }
      {...props}
    />
  </div>
)
