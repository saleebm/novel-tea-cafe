import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
} from 'react'
import produce, { Draft } from 'immer'

export interface MenuNav {
  menuLocation: number
}

// keeping the lights off from the start
const initialMenuNav: MenuNav = {
  menuLocation: 0,
}

export const MenuNavContext: Context<{
  setMenuNav: Dispatch<MenuNav>
  menuNav: MenuNav
}> = createContext({
  setMenuNav: (_menu) => {},
  menuNav: initialMenuNav,
})

const reducer = (state: MenuNav, action: { menuLocation: number }) =>
  produce(action, (draft: Draft<MenuNav>) => {
    const { menuLocation } = action
    draft.menuLocation = menuLocation
    return draft
  })

export const MenuNavContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  const [menuNav, setMenuNav] = useReducer(reducer, initialMenuNav)

  return (
    <MenuNavContext.Provider value={{ menuNav, setMenuNav }}>
      {children}
    </MenuNavContext.Provider>
  )
}
