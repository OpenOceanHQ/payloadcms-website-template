import type { Block } from 'payload';
import linkGroup from '../../fields/linkGroup';
import { CURRENCIES } from './currencies';

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
          name: 'currency',
          label: 'Currency',
          required: true,
          type: 'select',
          options: CURRENCIES,
        },
        {
          name: 'monthlyPrice',
          type: 'number',
          required: true,
        },
        {
          name: 'planDuration',
          type: 'number',
          admin: {
            description: 'Number of months plan is valid for.',
          },
          required: true,
        },
        linkGroup({
          appearances: ['primary', 'secondary'],
          overrides: {
            admin: {
              description: 'Link to your payment page.',
            },
            maxRows: 2,
          },
        }),
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
