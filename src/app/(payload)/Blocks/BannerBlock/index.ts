import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload/types';
import linkGroup from '../../fields/linkGroup';

export const BannerBlock: Block = {
  slug: 'banner-block',
  interfaceName: 'BannerBlock',
  imageURL: process.env.SERVER_URL + 'blocks/banner-block.png',
  imageAltText: 'Banner Block',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Block',
  },
  fields: [
    {
      name: 'sectionTitleAndDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('sectionTitleAndDescription', { name: 'section_title_and_description_html' }),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        admin: {
          description: 'Add you links here.',
        },
        maxRows: 2,
      },
    }),
  ],
};
