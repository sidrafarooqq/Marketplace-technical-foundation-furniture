export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'image',
        title: 'Image URL',
        type: 'url',
        validation: (Rule) => Rule.required(),
      },
    ],
  };