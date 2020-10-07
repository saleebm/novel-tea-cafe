import React, { ReactNode, ReactNodeArray, useMemo } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { useDarkMode } from '@Utils/hooks/use-dark-mode'
import { createMaterialTheme } from '@Config/material-theme'

export function ThemeProvider({
  children,
}: {
  children: ReactNode | ReactNodeArray
}) {
  const {
    themeMode: { isDarkMode },
  } = useDarkMode()

  const materialTheme = useMemo(
    () => createMaterialTheme(isDarkMode),
    [isDarkMode],
  )
  return (
    <MuiThemeProvider theme={materialTheme}>
      {children}
    </MuiThemeProvider>
  )
}
