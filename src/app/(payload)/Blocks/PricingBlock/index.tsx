import type { Block } from 'payload/types';

export const PricingBlock: Block = {
  slug: 'pricing-block',
  interfaceName: 'PricingBlock',
  imageURL: process.env.SERVER_URL + 'blocks/price-block.png',
  imageAltText: 'Pricing Block',
  labels: {
    singular: 'Pricing Block',
    plural: 'Pricing Block',
  },
  fields: [
    {
      name: 'pricingPlans',
      type: 'array',
      label: 'Your various pricing plans',
      minRows: 1,
      maxRows: 5,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'monthlyPrice',
          type: 'number',
          required: true,
        },
        {
          name: 'planPerks',
          type: 'array',
          label: 'Perks of your plan',
          minRows: 1,
          required: true,
          fields: [
            {
              name: 'perk',
              required: true,
              type: 'text',
              admin: {
                description: 'Describe the perks of choosing this plan.',
              },
            },
          ],
        },
      ],
    },
  ],
};
