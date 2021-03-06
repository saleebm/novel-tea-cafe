import { useCallback, useContext } from 'react'
import {
  ActiveAreaType,
  ActiveAreaTypes,
  CursorActionTypes,
  CursorStateContext,
  CursorDispatchContext,
} from '@Components/context/MousePosition/mouse-position-provider'

interface MouseEventInput {
  area: ActiveAreaType
  additionalProps: Readonly<{ [key: string]: any }>
}

/**
 * will require using event listener on exported mouseenter and mouseleave events
 */
export function useMouseTrap() {
  const { cursor } = useContext(CursorStateContext)
  const { setCursor, setActiveContainer } = useContext(
    CursorDispatchContext,
  )
  const handleMouseEnter = useCallback(
    (
      { area, additionalProps = {} }: MouseEventInput,
      event: MouseEvent,
    ) => {
      // set the active container ref
      setActiveContainer(event.target)
      // set the area type
      setCursor({
        type: CursorActionTypes.setActiveArea,
        payload: area,
      })
      // finally set the additional props
      setCursor({
        type: CursorActionTypes.setAdditionalProps,
        payload: additionalProps,
      })
    },
    [setCursor, setActiveContainer],
  )

  const handleMouseLeave = useCallback(() => {
    setActiveContainer(false)
    setCursor({
      type: CursorActionTypes.setActiveArea,
      payload: ActiveAreaTypes.notSet,
    })
    setCursor({
      type: CursorActionTypes.setAdditionalProps,
      payload: {},
    })
  }, [setCursor, setActiveContainer])

  return {
    activeArea: cursor.activeArea,
    activeContainer: cursor.activeContainer,
    additionalProps: cursor.additionalProps,
    mouseenter: (area: MouseEventInput) => (e: MouseEvent) =>
      handleMouseEnter(area, e),
    mouseleave: (_area?: MouseEventInput) => (_e: MouseEvent) =>
      handleMouseLeave(),
  }
}
