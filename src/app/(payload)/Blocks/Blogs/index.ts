import type { Block } from 'payload/types';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const BlogsBlock: Block = {
  slug: 'blogs-block',
  interfaceName: 'BlogsBlock',
  imageURL: process.env.SERVER_URL + 'blocks/blogs-block.png',
  imageAltText: 'Blogs Block',
  labels: {
    singular: 'Blogs',
    plural: 'Blogs',
  },

  fields: [
    {
      name: 'titleAndDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'blogs',
      type: 'array',
      required: true,
      maxRows: 3,
      fields: [
        {
          name: 'blog',
          type: 'relationship',
          relationTo: ['blog'],
        },
      ],
    },
    lexicalHTML('titleAndDescription', { name: 'titleAndDescription_html' }),
  ],
};
