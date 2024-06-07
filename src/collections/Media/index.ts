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
    // I think will be nice to save all the images of a store in its own folder. thinking {storeId}/store_logo.png
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
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({}),
        ],
      }),
    },

    lexicalHTML('caption', { name: 'caption_html' }),
  ],
};
