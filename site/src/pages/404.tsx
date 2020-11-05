import React from 'react'
import { SEO } from '@Components/elements/SEO/seo'

const NotFoundPage = () => (
  <div>
    <SEO
      gatsbySeoProps={{
        noindex: true,
      }}
      title={'Not Found'}
    />
    <h1>404</h1>
    <p>Nothing here!</p>
  </div>
)

export default NotFoundPage
