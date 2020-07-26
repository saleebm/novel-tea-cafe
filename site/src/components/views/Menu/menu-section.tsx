import React from 'react'
import { Paper } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { MenuTitle } from '@Components/views/Menu/menu-title'
import { MenuItem } from '@Components/views/Menu/menu-item'
import { Menu_Item_EdgeFragment } from '@Graphql/gatsby-graphql'

interface MenuSection {
  id: string
  pageTitle: string
  edges: Menu_Item_EdgeFragment[]
}

const useStyles = makeStyles((theme) => ({
  menuPanelDupe: {
    padding: theme.spacing(3),
  },
}))

export function MenuSection({ id, edges, pageTitle }: MenuSection) {
  const classes = useStyles()
  return (
    <Paper component={'section'} variant={'elevation'} elevation={7}>
      <div className={classes.menuPanelDupe}>
        <MenuTitle id={id} pageTitle={pageTitle} />
        {edges.map((addIn) => (
          <MenuItem key={addIn.node.id} theRealMenuItem={addIn} />
        ))}
      </div>
    </Paper>
  )
}
