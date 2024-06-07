import { adminsOrUsers } from '@/access/adminsOrUsers';
import {
  HomeBlock,
  QuoteBlock,
  HeroWithBackgroundBlock,
  HeroWithSplitContentAndImageBlock,
  FeatureWithImageBlock,
  FeatureWithThreeColumnBlock,
  CTACenteredBlock,
  CTAWithSplitContentAndButtonBlock,
  CTAWithSplitContentAndImageBlock,
  MediaBlock,
  ContentBlock,
  IncentiveBlock,
  StatsBlock,
  Testimonial,
  LogoCloudBlock,
  FormBlock,
} from '@/app/(payload)/Blocks';

import { CollectionConfig } from 'payload/types';
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
        MediaBlock,
        ContentBlock,
        HeroWithBackgroundBlock,
        HeroWithSplitContentAndImageBlock,
        FeatureWithImageBlock,
        FeatureWithThreeColumnBlock,
        CTACenteredBlock,
        CTAWithSplitContentAndButtonBlock,
        CTAWithSplitContentAndImageBlock,
        StatsBlock,
        IncentiveBlock,
        Testimonial,
        LogoCloudBlock,
        FormBlock,
      ],
    },
  ],
};
