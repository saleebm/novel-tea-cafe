export default {
  type: 'object',
  name: 'eventDay',
  title: 'Event of Day',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'details',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'illustration',
      type: 'illustration'
    }
  ],
}
