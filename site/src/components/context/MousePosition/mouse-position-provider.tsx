import React, {
  Context,
  createContext,
  Dispatch,
  MouseEvent,
  ReactNode,
  Reducer,
  useReducer,
} from 'react'
import useEventListener from '@use-it/event-listener'
import produce, { Draft } from 'immer'

interface MouseTrap {
  x: number
  y: number
}
export type Cursor = Readonly<{
  pos: Array<number>
  mouseTraps: ReadonlyArray<MouseTrap>
}>

enum CursorActionTypes {
  setPos = 'SET_POS',
  setMouseTraps = 'SET_MOUSE_TRAPS',
  removeMouseTraps = 'REMOVE_MOUSE_TRAPS',
}

interface SetMouseTrap {
  type: CursorActionTypes.setMouseTraps
  payload: MouseTrap
}

interface RemoveMouseTrap {
  type: CursorActionTypes.removeMouseTraps
  payload: MouseTrap
}

interface SetPos {
  type: CursorActionTypes.setPos
  payload: Array<number>
}

type CursorAction = SetMouseTrap | RemoveMouseTrap | SetPos

const initialCursor: Cursor = {
  pos: [0, 0],
  mouseTraps: [],
}

export const CursorContext: Context<{
  setCursor: Dispatch<CursorAction>
  cursor: Cursor
}> = createContext({
  setCursor: (_cursor) => {},
  cursor: initialCursor,
})

const reducer: Reducer<Cursor, CursorAction> = (
  state: Cursor,
  action: CursorAction,
) =>
  produce(state, (draft: Draft<Cursor>) => {
    const { type } = action
    switch (type) {
      case CursorActionTypes.setPos:
        draft.pos = action.payload as Array<number>
        return draft
      case CursorActionTypes.setMouseTraps:
        draft.mouseTraps.push(action.payload as MouseTrap)
        return draft
      case CursorActionTypes.removeMouseTraps:
        const optionalMouseTrap = draft.mouseTraps.indexOf(
          action.payload as MouseTrap,
        )
        if (optionalMouseTrap) {
          draft.mouseTraps.splice(optionalMouseTrap, 1)
        }
        return draft
    }
  })

export function MousePositionProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  const [cursor, setCursor] = useReducer(reducer, initialCursor)

  useEventListener<MouseEvent>(
    'mousemove',
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      setCursor({
        type: CursorActionTypes.setPos,
        payload: [clientX, clientY],
      })
    },
  )

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  )
}
