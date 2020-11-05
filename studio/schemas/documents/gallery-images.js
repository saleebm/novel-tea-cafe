export default {
  name: 'galleryImages',
  type: 'document',
  title: 'Gallery Images',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'mainImage',
        },
      ],
    },
  ]
}
