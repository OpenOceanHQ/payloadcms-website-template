import { adminsOrUsers } from '@/access/adminsOrUsers';
import { CollectionConfig } from 'payload/types';
import { HomeBlock, QuoteBlock } from '@/app/(payload)/Blocks';
import { admins } from '@/access/admins';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: adminsOrUsers,
    read: adminsOrUsers,
    update: adminsOrUsers,
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
