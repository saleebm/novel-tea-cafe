import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useReducer,
  useRef,
} from 'react'
import useEventListener from '@use-it/event-listener'
import produce, { Draft } from 'immer'

export enum ActiveAreaTypes {
  anchor = 'anchor',
  image = 'image',
  notSet = 'notSet',
}

export type ActiveAreaType =
  | ActiveAreaTypes.anchor
  | ActiveAreaTypes.image
  | ActiveAreaTypes.notSet

export type Cursor = Readonly<{
  pos: ReadonlyArray<number>
  activeArea: ActiveAreaType
  activeContainer: any
  additionalProps: Readonly<{ [key: string]: any }>
}>

export enum CursorActionTypes {
  setPos = 'SET_POS',
  setActiveArea = 'SET_ACTIVE_AREA',
  setAdditionalProps = 'SET_ADDITIONAL_PROPS',
}

interface SetActiveArea {
  type: CursorActionTypes.setActiveArea
  payload: ActiveAreaType
}

interface SetAdditionalProps {
  type: CursorActionTypes.setAdditionalProps
  payload: Readonly<{ [key: string]: any }>
}

interface SetPos {
  type: CursorActionTypes.setPos
  payload: Array<number>
}

export type CursorAction = SetActiveArea | SetPos | SetAdditionalProps

const initialCursor: Cursor = {
  pos: [0, 0],
  activeArea: ActiveAreaTypes.notSet,
  activeContainer: false,
  additionalProps: {},
}

export const CursorContext: Context<{
  setCursor: Dispatch<CursorAction>
  cursor: Cursor
  setActiveContainer: (el: any) => void
}> = createContext({
  setActiveContainer: (_el) => {},
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
      case CursorActionTypes.setActiveArea:
        draft.activeArea = action.payload as ActiveAreaType
        return draft
      case CursorActionTypes.setAdditionalProps:
        draft.additionalProps = action.payload as any
        return draft
      default:
        return draft
    }
  })

export function MousePositionProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  const [cursor, setCursor] = useReducer(reducer, initialCursor)
  const activeContainer = useRef(false)

  const setActiveContainer = (el: any) => {
    activeContainer.current = el
  }

  useEventListener(
    'mousemove',
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      setCursor({
        type: CursorActionTypes.setPos,
        payload: [clientX, clientY],
      })
    },
  )

  return (
    <CursorContext.Provider
      value={{
        cursor: {
          ...cursor,
          activeContainer: activeContainer.current,
        },
        setCursor,
        setActiveContainer,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}
