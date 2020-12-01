export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Happy Hour Special',
      name: 'happyHour',
      type: 'excerptPortableText',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'excerptPortableText',
    },
    {
      type: 'color',
      name: 'primaryColor',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color for websites, press materials, etc'
    },
    {
      title: 'Facebook Page',
      name: 'facebookPage',
      type: 'string',
    },
    {
      title: 'Instagram',
      name: 'instagramPage',
      type: 'string',
    },
    {
      title: 'Twitter',
      name: 'twitterPage',
      type: 'string',
    },
  ]
}
