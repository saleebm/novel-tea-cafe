import { graphql } from 'gatsby'

export const query = graphql`
  fragment FLUID_IMAGE on SanityIllustration {
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

  fragment FIXED_IMAGE on SanityIllustration {
    image {
      asset {
        fixed(height: 500) {
          ...GatsbySanityImageFixed
        }
      }
    }
  }

  fragment TAGLINE on SanityBlock {
    style
    list
    children {
      text
      marks
    }
  }

  fragment DAY on SanityEventDay {
    heading
    tagline {
      ...TAGLINE
    }
    illustration {
      ...FLUID_IMAGE
    }
  }
`
