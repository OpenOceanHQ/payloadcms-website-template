import { adminsOrUsers } from '@/access/adminsOrUsers';
import {
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
  PricingBlock,
  BannerBlock,
  BlogsBlock,
  FAQBlock,
  CardBlock,
} from '@/app/(payload)/Blocks';
import './style.css';

import { CollectionConfig } from 'payload/types';
import { admins } from '@/access/admins';
import {
  revalidateDeletedCollection,
  revalidateUpdatedCollection,
} from '../hooks/revalidateCollection';

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterChange: [revalidateUpdatedCollection],
    afterDelete: [revalidateDeletedCollection],
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: (doc) => {
      let url = process.env.SERVER_URL ? process.env.SERVER_URL : 'http://localhost:3000/';
      const previewUrl = doc?.slug ? url + doc.slug : url;
      return previewUrl;
    },
    livePreview: {
      url: ({ data }) => {
        let url = process.env.NEXT_PUBLIC_VERCEL_URL
          ? process.env.NEXT_PUBLIC_VERCEL_URL
          : 'http://localhost:3000/';
        return url + data.slug;
      },
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
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
        PricingBlock,
        BannerBlock,
        BlogsBlock,
        FAQBlock,
        CardBlock,
      ],
    },
  ],
};
