import React from 'react'

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
  return <Layout {...(props as PageProps)}>{element}</Layout>
}
