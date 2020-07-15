import { useContext } from 'react'
import { DarkModeContext } from '@Components/context/DarkMode/dark-mode-context'

export const useDarkMode = () => useContext(DarkModeContext)
