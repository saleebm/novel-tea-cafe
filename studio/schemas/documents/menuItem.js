export default {
  name: 'menuItem',
  title: 'Menu Items',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Menu Item.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Optionally describe the menu item',
    },
    {
      name: 'slug',
      title: 'Unique Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'menuItemCategory',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'menuItemCategory',
            title: 'Category',
          },
        },
      ],
    },
    {
      title: 'Menu Item Options',
      name: 'menuItemPriceOption',
      type: 'array',
      editModal: 'popover',
      of: [
        {
          type: 'menuItemPriceOption',
          to: [{ type: 'menuItemPriceOption', title: 'Menu Item Price Option' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      description: 'description'
    },
    prepare({ title = 'No title', description }) {
      return {
        title,
        description,
      }
    },
  },
}
