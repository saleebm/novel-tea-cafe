import React from 'react'
import { Divider, Paper } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { MenuTitle } from '@Components/views/Menu/menu-title'
import { MenuItem } from '@Components/views/Menu/menu-item'
import { Menu_Item_EdgeFragment } from '@Graphql/gatsby-graphql'

interface MenuSection {
  id: string
  pageTitle: string
  edges: Menu_Item_EdgeFragment[]
  index: number
}

const useStyles = makeStyles((theme) => ({
  menuPanelDupe: {
    paddingTop: theme.spacing(1),
  },
}))

export function MenuSection({
  id,
  edges,
  pageTitle,
  index,
}: MenuSection) {
  const classes = useStyles()
  return (
    <>
      <Paper
        id={`auto-tabpanel-${index}`}
        aria-labelledby={`auto-tab-${index}`}
        component={'section'}
        variant={'elevation'}
        elevation={7}
        role='tabpanel'
        className={classes.menuPanelDupe}
      >
        <MenuTitle align={'center'} id={id} pageTitle={pageTitle} />
        {edges.map((addIn) => (
          <MenuItem key={addIn.node.id} theRealMenuItem={addIn} />
        ))}
      </Paper>
      <Divider variant={'inset'} orientation={'horizontal'} />
    </>
  )
}
