import S from '@sanity/desk-tool/structure-builder'

import { MdMenu } from 'react-icons/lib/md'
import { GoArchive as AllIcon, GoBeer, GoSquirrel, GoTag } from 'react-icons/lib/go'

export default S.listItem()
  .title('Menu')
  .icon(MdMenu)
  .child(
    S.list()
      .title('Menu')
      .items([
        S.listItem()
          .title('Menu Items')
          .schemaType('menuItem')
          .icon(GoBeer)
          .child(
            S.documentList('menuItem')
              .title('Published menu items')
              .menuItems(S.documentTypeList('menuItem').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "menuItem" && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document().documentId(documentId).schemaType('menuItem').views([S.view.form()])
              )
          ),
        S.documentTypeListItem('menuItem').title('All menu items').icon(AllIcon),
        S.listItem()
          .title('Menu items by category')
          .icon(GoSquirrel)
          .child(
            // List out all categories
            S.documentTypeList('menuItemCategory')
              .title('Menu Items by category')
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('menuItem')
                  .title('Menu Items')
                  .filter('_type == "menuItem" && $catId in menuItemCategory[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem('menuItemCategory').title('Categories').icon(GoTag),
      ])
  )
