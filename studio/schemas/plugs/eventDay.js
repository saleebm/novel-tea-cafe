export default {
  type: 'object',
  name: 'eventDay',
  title: 'Event of Day',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'details',
      type: 'string',
      title: 'Details',
      description: "What's the special??",
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent',
    },
    {
      name: 'illustration',
      type: 'illustration',
    },
  ],
}
