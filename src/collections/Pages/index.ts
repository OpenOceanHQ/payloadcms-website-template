import { admins } from '@/access/admins';
import { adminsAndUsers } from '@/access/adminsAndUsers';
import { HomeBlock, QuoteBlock } from '@/app/(payload)/Blocks';

import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: admins,
    read: adminsAndUsers,
    update: admins,
    delete: admins,
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
      blocks: [HomeBlock, QuoteBlock],
    },
  ],
};
