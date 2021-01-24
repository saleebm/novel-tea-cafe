import { useContext } from 'react'
import { CursorStateContext } from '@Components/context/MousePosition/mouse-position-provider'

export function useCursorPosition() {
  return useContext(CursorStateContext).cursor.pos
}
