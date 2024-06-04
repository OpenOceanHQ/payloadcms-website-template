import { QuoteBlock } from '@/app/(payload)/Blocks';
import type { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    // preview: (doc) =>
    //   doc?.['storeAndSlug']?.['slug'] ? `/${doc?.['storeAndSlug']?.['slug']}` : '#',
    livePreview: {
      url: ({ data }) => {
        if (typeof window === 'undefined') return '';
        return `https://${window.location.host}/${data?.['storeAndSlug']?.['slug']}`;
      },
    },
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      admin: {
        initCollapsed: true,
      },
      blocks: [QuoteBlock],
    },
    // {
    //   name: 'storeAndSlug',
    //   label: false,
    //   type: 'group',
    //   unique: true,
    //   index: true,
    //   admin: {
    //     position: 'sidebar',
    //     style: {
    //       border: 'none',
    //       marginBottom: 'var(--spacing-field)',
    //       paddingBottom: 0,
    //     },
    //   },
    //   fields: [store, slugField()],
    // },
  ],
};
