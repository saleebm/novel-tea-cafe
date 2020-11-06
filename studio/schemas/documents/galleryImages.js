export default {
  name: 'galleryImages',
  type: 'document',
  title: 'Gallery Images',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'illustration',
          type: 'illustration'
        },
      ],
    },
  ]
}
