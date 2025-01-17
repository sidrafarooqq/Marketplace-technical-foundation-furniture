export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'shipmentId',
        title: 'Shipment ID',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'reference',
        to: [{ type: 'order' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'status',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: ['Pending', 'In Transit', 'Delivered', 'Cancelled'], // Predefined statuses
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'expectedDeliveryDate',
        title: 'Expected Delivery Date',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
    ],
  };