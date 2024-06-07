import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import path from 'path';
import type { CollectionConfig } from 'payload/types';
import { adminsOrUsers } from '@/access/adminsOrUsers';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
  admin: {
    hideAPIURL: true,
  },
  access: {
    create: adminsOrUsers,
    read: adminsOrUsers,
    update: adminsOrUsers,
    delete: adminsOrUsers,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          'Provide descriptive text for images to improve accessibility. This ensures that visually impaired users can understand the content of the image.',
      },
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },

    lexicalHTML('caption', { name: 'caption_html' }),
  ],
};
