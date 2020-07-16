import { useContext } from 'react'
import { CursorContext } from '@Components/context/MousePosition/mouse-position-provider'

export function useCursorPosition() {
  return useContext(CursorContext).cursor.pos
}
