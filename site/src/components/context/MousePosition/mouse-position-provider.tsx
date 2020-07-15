import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'

export type Cursor = ReadonlyArray<number>

// keeping the lights off from the start
const initialCursor: Cursor = [0, 0]

export const CursorContext: Context<{
  setCursor: Dispatch<Cursor>
  cursor: Cursor
}> = createContext({
  setCursor: (cursor) => {},
  cursor: initialCursor,
})

const reducer = (state: Cursor, updatedState: Cursor) => updatedState

export function MousePositionProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  const [cursor, setCursor] = useReducer(reducer, initialCursor)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handler = ({
      clientX,
      clientY,
    }: {
      clientX: number
      clientY: number
    }) => {
      setCursor([clientX, clientY])
    }
    window.addEventListener('mousemove', handler)
    return () => {
      window.removeEventListener('mousemove', handler)
    }
  }, [])

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  )
}
