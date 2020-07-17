import { SyntheticEvent, useCallback, useContext } from 'react'
import {
  ActiveAreaType,
  ActiveAreaTypes,
  CursorActionTypes,
  CursorContext,
} from '@Components/context/MousePosition/mouse-position-provider'

interface MouseEventInput {
  area: ActiveAreaType
  additionalProps: Readonly<{ [key: string]: any }>
}

/**
 * will require using event listener on exported mouseenter and mouseleave events
 */
export function useMouseTrap() {
  const { cursor, setCursor, setActiveContainer } = useContext(
    CursorContext,
  )
  const handleMouseEnter = useCallback(
    (
      { area, additionalProps = {} }: MouseEventInput,
      event: SyntheticEvent<any, Event>,
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
    mouseenter: (area: MouseEventInput) => (
      e: SyntheticEvent<any, Event>,
    ) => handleMouseEnter(area, e),
    mouseleave: (_area?: MouseEventInput) => (
      _e: SyntheticEvent<any, Event>,
    ) => handleMouseLeave(),
  }
}
