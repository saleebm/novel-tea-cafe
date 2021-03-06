import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Container } from '@material-ui/core'
import { Menu } from '@Components/views/Menu/menu'
import { SEO } from '@Components/elements/SEO/seo'

interface MenuPage extends PageProps {
  data: GatsbyTypes.MENU_PAGEQuery
}

function MenuPage({ data }: MenuPage) {
  return (
    <>
      <SEO
        title={'Menu'}
        description={
          'Kratom, kava kava, herbal tea, and more available fresh at NovelTea Cafe. Check out the full menu of available options here.'
        }
      />
      <Container maxWidth={'lg'}>
        <Menu menu={data} />
      </Container>
    </>
  )
}

/**
 Menu Item Categories
 ______________________
 "Add-ins",
 "Bulk Kratom and Kava Kava",
 "Coffee and Cold Brew",
 "Custom Herbal Tea",
 "Kava Kava",
 "Kratom",
 _______________________
 TODO: as part of dynamically setting these, will need to batch get all of them
 */
export const query = graphql`
  query MENU_PAGE {
    addIns: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: { elemMatch: { title: { eq: "Add-ins" } } }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    bulk: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: {
          elemMatch: { title: { eq: "Bulk Kratom and Kava Kava" } }
        }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    coffee: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: {
          elemMatch: { title: { eq: "Coffee and Cold Brew" } }
        }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    herbalTea: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: {
          elemMatch: { title: { eq: "Custom Herbal Tea" } }
        }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    kavaKava: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: {
          elemMatch: { title: { eq: "Kava Kava" } }
        }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    kratom: allSanityMenuItem(
      sort: { fields: [menuItemPriceOption___price] }
      filter: {
        menuItemCategory: { elemMatch: { title: { eq: "Kratom" } } }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    cats: allSanityMenuItemCategory {
      edges {
        node {
          title
          description
          id
        }
      }
    }
  }
`

export default MenuPage
