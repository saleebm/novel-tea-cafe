import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'
import { SEO } from '@Components/elements/SEO/seo'
import { ImageGallery } from '@Components/views/Gallery/image-gallery'

interface PictureShow {
  data: GatsbyTypes.PictureShowImagesQuery
}

function PictureShowPage({ data }: PictureShow) {
  const { sanityGalleryImages } = data || {}
  return (
    <>
      <SEO
        title={'Gallery'}
        description={
          'Come on in! The kava is fine. See the gallery of inside NovelTea.'
        }
      />
      <Container maxWidth={'lg'}>
        <ImageGallery sanityGalleryImages={sanityGalleryImages} />
      </Container>
    </>
  )
}

/**
 * this gets all the images in the gallery folder
 */
export const query = graphql`
  query PictureShowImages {
    sanityGalleryImages(_id: { eq: "galleries" }) {
      id
      images {
        image {
          alt
          asset {
            assetId
            fluid {
              ...GatsbySanityImageFluid
            }
          }
          caption
        }
      }
    }
  }
`
export default PictureShowPage
