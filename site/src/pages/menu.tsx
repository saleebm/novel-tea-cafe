import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Container } from '@material-ui/core'
import { Menu_PageQuery } from '@Graphql/gatsby-graphql'
import { Menu } from '@Components/views/Menu/menu'

interface MenuPage extends PageProps {
  data: Menu_PageQuery
}

function MenuPage({ data }: MenuPage) {
  return (
    <Container maxWidth={'xl'}>
      <Menu menu={data} />
    </Container>
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
 "Superfoods"
 */
export const query = graphql`
  query MENU_PAGE {
    addIns: allSanityMenuItem(
      sort: { fields: [name] }
      filter: {
        menuItemCategory: { elemMatch: { title: { eq: "Add-ins" } } }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    bulk: allSanityMenuItem(
      sort: { fields: [name] }
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
      sort: { fields: [name] }
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
      sort: { fields: [name] }
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
      sort: { fields: [name] }
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
      sort: { fields: [name] }
      filter: {
        menuItemCategory: { elemMatch: { title: { eq: "Kratom" } } }
      }
    ) {
      edges {
        ...MENU_ITEM_EDGE
      }
    }
    superfoods: allSanityMenuItem(
      sort: { fields: [name] }
      filter: {
        menuItemCategory: {
          elemMatch: { title: { eq: "Superfoods" } }
        }
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
