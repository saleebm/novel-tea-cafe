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

export type CursorState = Readonly<{
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

const initialCursor: CursorState = {
  pos: [0, 0],
  activeArea: ActiveAreaTypes.notSet,
  activeContainer: false,
  additionalProps: {},
}

export const CursorStateContext: Context<{
  cursor: CursorState
}> = createContext({
  cursor: initialCursor,
})

// split dispatch context to optimize state
export const CursorDispatchContext: Context<{
  setCursor: Dispatch<CursorAction>
  setActiveContainer: (el: any) => void
}> = createContext({
  setActiveContainer: (_el) => {},
  setCursor: (_cursor) => {},
})

const reducer: Reducer<CursorState, CursorAction> = (
  state: CursorState,
  action: CursorAction,
) =>
  produce(state, (draft: Draft<CursorState>) => {
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
  const [cursor, dispatchCursorAction] = useReducer(
    reducer,
    initialCursor,
  )
  const activeContainer = useRef(false)

  const setActiveContainer = (el: any) => {
    activeContainer.current = el
  }

  useEventListener(
    'mousemove',
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      //update cursor position here..
      dispatchCursorAction({
        type: CursorActionTypes.setPos,
        payload: [clientX, clientY],
      })
    },
  )

  return (
    <CursorStateContext.Provider
      value={{
        cursor: {
          ...cursor,
          activeContainer: activeContainer.current,
          //update ref outside of context
        },
      }}
    >
      <CursorDispatchContext.Provider
        value={{
          setActiveContainer,
          setCursor: dispatchCursorAction,
        }}
      >
        {children}
      </CursorDispatchContext.Provider>
    </CursorStateContext.Provider>
  )
}
