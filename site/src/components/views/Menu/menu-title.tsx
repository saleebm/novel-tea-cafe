import { Typography, TypographyProps } from '@material-ui/core'
import React from 'react'

export const MenuTitle = ({
  pageTitle,
  ...props
}: { pageTitle: string } & TypographyProps) => (
  <Typography
    variant={'h1'}
    color={'textSecondary'}
    gutterBottom
    {...props}
  >
    {pageTitle}
  </Typography>
)
