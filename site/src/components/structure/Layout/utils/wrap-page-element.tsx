import React from 'react'
import { ThemeProvider } from '@Components/context/ThemeProvider/theme-provider'

import {
  PageProps,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
} from 'gatsby'
import { Layout } from '@Components/structure/Layout'

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementNodeArgs | WrapRootElementBrowserArgs) => {
  return (
    <ThemeProvider>
      <Layout {...(props as PageProps)}>{element}</Layout>
    </ThemeProvider>
  )
}
