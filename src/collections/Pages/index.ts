import { adminsAndUsers } from '@/access/adminsAndUsers';
import {
  CTACenteredBlock,
  CTAWithSplitContentAndButtonBlock,
  CTAWithSplitContentAndImageBlock,
  HomeBlock,
  QuoteBlock,
  StatsBlock,
  Testimonial,
} from '@/app/(payload)/Blocks';

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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
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
        StatsBlock,
        Testimonial,
      ],
    },
  ],
};
