import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
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
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef(null)
  const { intersecting: intersection } = useIntersectionObserver(
    intersectionRef,
    {
      threshold: [0.05],
      once: false,
      rootMargin: '42px 0px -69%',
    },
  )

  const [setInViewDebounced] = useDebouncedCallback(
    (intersecting: boolean) => setInView(intersecting),
    420, // lol 420
  )

  useEffect(() => {
    setInViewDebounced(intersection)
  }, [intersection, setInViewDebounced])

  useEffect(() => {
    if (inView) {
      setMenuNav({ menuLocation: index })
    }
  }, [id, inView, setMenuNav, index])

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
