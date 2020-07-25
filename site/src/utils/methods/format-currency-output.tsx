import React from 'react'
import { renderToString } from 'react-dom/server'

export function formatCurrencyOutput(price: string) {
  return renderToString(
    <>
      <span>{price.slice(0, price.indexOf('.'))}</span>
      <span>
        {price.slice(price.indexOf('.')) === '.00'
          ? ''
          : price.slice(price.indexOf('.'))}
      </span>
    </>,
  )
}
