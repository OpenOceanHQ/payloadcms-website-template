import type { Block } from 'payload/types';

export const Testimonial: Block = {
  slug: 'testimonial-block',
  interfaceName: 'TestimonialBlock',
  imageURL: '/blocks/testimonial-block.png',
  imageAltText: 'Testimonial Block',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonial',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'reviews',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'rating',
          type: 'number',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'customerName',
          type: 'text',
        },
      ],
    },
  ],
};
