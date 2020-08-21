import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { Divider, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { MenuTitle } from '@Components/views/Menu/menu-title'
import { MenuItem } from '@Components/views/Menu/menu-item'
import { Menu_Item_EdgeFragment } from '@Graphql/gatsby-graphql'
import { useIntersectionObserver } from '@Utils/hooks/use-intersection-observer'
import { MenuNavContext } from '@Components/context/MenuNav/menu-nav-context'
import { useDebouncedCallback } from '@Utils/hooks/use-debounced-callback'

interface MenuSection {
  id: string
  pageTitle: string
  edges: Menu_Item_EdgeFragment[]
  index: number
}

const useStyles = makeStyles((theme) => ({
  menuPanelDupe: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}))

export function MenuSection({
  id,
  edges,
  pageTitle,
  index,
}: MenuSection) {
  const classes = useStyles()
  const { setMenuNav } = useContext(MenuNavContext)
  const intersectionRef = useRef(null)
  const { intersecting: intersection } = useIntersectionObserver(
    intersectionRef,
    {
      threshold: [0.05],
      once: false,
      rootMargin: '42px 0px -69%',
    },
  )

  // debounced callback extraction
  const [setInViewDebounced] = useDebouncedCallback(
    (intersecting: boolean) => {
      setMenuNav({ menuLocation: index })
    },
    420, // lol 420
  )

  // if intersection caught (true), then set menu nav location to the index,
  useEffect(() => {
    if (intersection) setInViewDebounced(intersection)
  }, [intersection, setInViewDebounced])

  return useMemo(
    () => (
      <>
        <Paper
          id={`auto-tabpanel-${index}`}
          aria-labelledby={`auto-tab-${index}`}
          component={'section'}
          variant={'elevation'}
          elevation={7}
          role={'tabpanel'}
          className={classes.menuPanelDupe}
          innerRef={intersectionRef}
        >
          <MenuTitle align={'center'} id={id} pageTitle={pageTitle} />
          {edges.map((addIn) => (
            <MenuItem key={addIn.node.id} theRealMenuItem={addIn} />
          ))}
        </Paper>
        <Divider variant={'inset'} orientation={'horizontal'} />
      </>
    ),
    [classes, edges, id, pageTitle, index],
  )
}
