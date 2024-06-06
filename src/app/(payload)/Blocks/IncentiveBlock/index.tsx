import type { Block } from 'payload/types';
import { IconSelector } from '../ui/IconSelector';

export const IncentiveBlock: Block = {
  slug: 'incentive-block',
  interfaceName: 'IncentiveBlock',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          type: 'text',
          name: 'icon',
          admin: {
            components: {
              Field: IconSelector,
            },
          },
        },
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
      ],
    },
  ],
};
