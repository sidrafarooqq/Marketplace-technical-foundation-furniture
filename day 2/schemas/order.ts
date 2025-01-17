export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerInfo',
        title: 'Customer Information',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
          },
          {
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        name: 'productDetails',
        title: 'Product Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                title: 'Product ID',
                type: 'reference',
                to: [{ type: 'product' }],
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: (Rule) => Rule.required().min(1),
              },
            ],
          },
        ],
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Paid', 'Pending', 'Failed'], // Predefined options
        },
        validation: (Rule) => Rule.required(),
      },
    ],
  };