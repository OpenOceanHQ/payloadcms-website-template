import { adminsAndUsers } from '@/access/adminsAndUsers';
import { HomeBlock, QuoteBlock } from '@/app/(payload)/Blocks';
import { CTACenteredBlock } from '@/app/(payload)/Blocks/CTAs/CTACentered';
import { CTAWithSplitContentAndButtonBlock } from '@/app/(payload)/Blocks/CTAs/CTAWithSplitContentAndButton';
import { CTAWithSplitContentAndImageBlock } from '@/app/(payload)/Blocks/CTAs/CTAWithSplitContentAndImage';

import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: adminsAndUsers,
    read: adminsAndUsers,
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
      blocks: [
        HomeBlock,
        QuoteBlock,
        CTACenteredBlock,
        CTAWithSplitContentAndButtonBlock,
        CTAWithSplitContentAndImageBlock,
      ],
    },
  ],
};
