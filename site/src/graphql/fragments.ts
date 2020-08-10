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

  fragment SMALL_FIXED_IMAGE on SanityIllustration {
    image {
      asset {
        fixed(width: 50) {
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
      ...SMALL_FIXED_IMAGE
    }
    details
  }

  fragment MENU_ITEM_EDGE on SanityMenuItemEdge {
    node {
      name
      slug {
        current
      }
      description
      id
      menuItemPriceOption {
        price
        variant
      }
      menuItemCategory {
        title
        description
      }
    }
  }
`
