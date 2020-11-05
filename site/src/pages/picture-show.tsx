import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'
import { SEO } from '@Components/elements/SEO/seo'
import { ImageGallery } from '@Components/views/Gallery/image-gallery'

interface PictureShow {
  data: GatsbyTypes.PictureShowImagesQuery
}

function PictureShowPage({ data }: PictureShow) {
  return (
    <>
      <SEO
        title={'The Kava is Fine-eee'}
        description={
          'Come for our daily happy hour and stay for the daily events, different everyday of the week. Come on in! The kava is fine.'
        }
      />
      <Container maxWidth={'xl'}>
        <ImageGallery allFile={data?.allFile} />
      </Container>
    </>
  )
}

/**
 * this gets all the images in the gallery folder
 */
export const query = graphql`
  query PictureShowImages {
    allFile(filter: { relativeDirectory: { eq: "nt" } }) {
      totalCount
      nodes {
        id
        publicURL
        childImageSharp {
          fluid(maxWidth: 600, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default PictureShowPage
