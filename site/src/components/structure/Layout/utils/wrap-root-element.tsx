import React from 'react'

import {
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby'
import { MousePositionProvider } from '@Components/context/MousePosition/mouse-position-provider'
import { DarkModeContextProvider } from '@Components/context/DarkMode/dark-mode-context'

export const wrapRootElement = ({
  element,
}: WrapRootElementNodeArgs | WrapRootElementBrowserArgs) => (
  <MousePositionProvider>
    <DarkModeContextProvider>{element}</DarkModeContextProvider>
  </MousePositionProvider>
)
