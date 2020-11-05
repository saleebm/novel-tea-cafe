import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Divider, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useInView } from 'react-intersection-observer'
import { MenuTitle } from '@Components/views/Menu/menu-title'
import { MenuItem } from '@Components/views/Menu/menu-item'
import { MenuNavContext } from '@Components/context/MenuNav/menu-nav-context'
import { useDebouncedCallback } from '@Utils/hooks/use-debounced-callback'

interface MenuSection {
  id: string
  pageTitle: string
  edges: Readonly<GatsbyTypes.MENU_ITEM_EDGEFragment[]>
  index: number
}

const useStyles = makeStyles((theme) => ({
  menuPanelDupe: {
    padding: theme.spacing(3),
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
  const [inView, setInView] = useState(false)
  const { inView: intersectionCaught, ref } = useInView({
    threshold: [0.05],
    triggerOnce: false,
    rootMargin: '42px 0px -69%',
  })

  // debounced callback extraction
  const [setInViewDebounced] = useDebouncedCallback(
    (intersecting: boolean) => setInView(intersecting),
    420, // lol 420
  )

  // initial effect if intersecting
  // calls debounced function
  useEffect(() => {
    setInViewDebounced(intersectionCaught)
  }, [intersectionCaught, setInViewDebounced])

  // inView = true after debounced function so that we don't see the jitter in nav location
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
          innerRef={ref}
        >
          <MenuTitle align={'center'} id={id} pageTitle={pageTitle} />
          {edges.map((addIn) => (
            <MenuItem key={addIn.node.id} theRealMenuItem={addIn} />
          ))}
        </Paper>
        <Divider variant={'inset'} orientation={'horizontal'} />
      </>
    ),
    [classes, edges, id, pageTitle, index, ref],
  )
}
