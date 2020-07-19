import PriceInput from '../components/PriceInput';

export default {
  name: 'menuItemPriceOption',
  title: 'Menu Item Price Option',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant (size, color, etc.)',
      type: 'string',
      description: 'What is the variation, ie. 10oz?',
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'The price of the menu item in cents',
        validation: Rule => Rule.min(1),
        inputComponent: PriceInput,
      }
  ],
};
