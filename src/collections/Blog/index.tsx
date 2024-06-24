import type { CollectionConfig } from 'payload/types';
import { adminsOrUsers } from '@/access/adminsOrUsers';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import {
  revalidateDeletedCollection,
  revalidateUpdatedCollection,
} from '../hooks/revalidateCollection';

export const Blog: CollectionConfig = {
  slug: 'blog',
  hooks: {
    afterChange: [revalidateUpdatedCollection],
    afterDelete: [revalidateDeletedCollection],
  },
  admin: {
    hideAPIURL: true,
    useAsTitle: 'title',
  },
  access: {
    create: adminsOrUsers,
    read: adminsOrUsers,
    update: adminsOrUsers,
    delete: adminsOrUsers,
  },
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
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'author_image',
      type: 'upload',
      relationTo: 'media',
    },

    lexicalHTML('content', { name: 'content_html' }),
  ],
};
