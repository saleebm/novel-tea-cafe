import React from 'react'
import { Chip, ChipProps } from '@material-ui/core'
import { PriceTag } from '@Components/views/Menu/price-tag'
import styles from './menu.mod.scss'

type MenuPriceChipProps = Omit<ChipProps, 'avatar'> & {
  price?: number
}

export const MenuPriceChip = ({
  price,
  ...props
}: MenuPriceChipProps) => (
  <div className={styles.menupricewrap}>
    <Chip
      avatar={
        price && !isNaN(price) ? (
          <PriceTag price={price / 100} />
        ) : undefined
      }
      {...props}
    />
  </div>
)
