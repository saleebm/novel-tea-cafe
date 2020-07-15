import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { cookieService } from '@Services/cookie-service'

const themeKeyLocalStorage = '_pref_dark_mode'
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
const localTheme = () => cookieService.getItem(themeKeyLocalStorage)

export interface ThemeMode {
  isDarkMode: boolean
}

// keeping the lights off from the start
const initialThemeMode: ThemeMode = {
  isDarkMode: true,
}

export const DarkModeContext: Context<{
  toggleThemeMode: Dispatch<ThemeMode>
  themeMode: ThemeMode
}> = createContext({
  toggleThemeMode: (_shouldBeDark) => {},
  themeMode: initialThemeMode,
})

function reducer(state: ThemeMode, setThemeMode: ThemeMode) {
  return {
    isDarkMode: setThemeMode.isDarkMode,
  }
}

export const DarkModeContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  const [themeMode, toggleThemeMode] = useReducer(
    reducer,
    initialThemeMode,
  )

  useEffect(() => {
    const pastPref = localTheme()
    const setMode = (mode: boolean) => {
      cookieService.setItem(themeKeyLocalStorage, String(mode), {
        sameSite: 'lax',
      })
      toggleThemeMode({ isDarkMode: mode })
    }
    if (supportsDarkMode() && !pastPref) {
      setMode(true)
    } else if (!!pastPref) {
      const prefDarkMode = pastPref === 'true'
      toggleThemeMode({ isDarkMode: prefDarkMode })
    } else setMode(false)
  }, [])

  useEffect(() => {
    cookieService.setItem(
      themeKeyLocalStorage,
      String(themeMode.isDarkMode),
      {
        sameSite: 'lax',
      },
    )
  }, [themeMode.isDarkMode])

  return (
    <DarkModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
