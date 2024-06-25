import { Block } from 'payload';

export const FAQBlock: Block = {
  slug: 'faq-block',
  interfaceName: 'FAQ',
  imageURL: '/blocks/faq-block.png',
  imageAltText: 'FAQ Block',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  fields: [
    {
      name: 'FAQ',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          type: 'text',
          name: 'Question',
          label: 'Question',
          required: true,
        },
        {
          type: 'text',
          name: 'Answer',
          label: 'Answer',
          required: true,
        },
      ],
    },
  ],
};
