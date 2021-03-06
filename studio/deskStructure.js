import S from '@sanity/desk-tool/structure-builder'
import { GoHome, GoSettings, GoCalendar, GoCircuitBoard } from 'react-icons/go'
import blog from './src/structure/blog'
import menu from './src/structure/menu'

const hiddenDocTypes = (listItem) =>
  ![
    'post',
    'page',
    'siteSettings',
    'author',
    'category',
    'weeklyEvents',
    'menuItem',
    'menuItemCategory',
    'menuItemPriceOption',
    'galleryImages',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').views([S.view.form()]),
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(S.document().schemaType('page').documentId('frontpage').views([S.view.form()])),
      S.documentListItem()
        .title('Weekly Events')
        .schemaType('weeklyEvents')
        .icon(GoCalendar)
        .child(
          S.document().schemaType('weeklyEvents').documentId('weeklyEvents').views([S.view.form()]),
        ),
      S.documentListItem()
        .title('Galleries')
        .schemaType('galleryImages')
        .icon(GoCircuitBoard)
        .child(
          S.document().schemaType('galleryImages').documentId('galleries').views([S.view.form()]),
        ),
      menu,
      blog,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
