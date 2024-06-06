import { adminsAndUsers } from '@/access/adminsAndUsers';
import { anyone } from '@/access/anyone';
import { HomeBlock, QuoteBlock, StatsBlock, Testimonial } from '@/app/(payload)/Blocks';

import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: adminsAndUsers,
    read: anyone,
    update: adminsAndUsers,
    delete: adminsAndUsers,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'layout',
      type: 'blocks',
      admin: {
        initCollapsed: true,
      },
      blocks: [HomeBlock, QuoteBlock, StatsBlock, Testimonial],
    },
  ],
};
