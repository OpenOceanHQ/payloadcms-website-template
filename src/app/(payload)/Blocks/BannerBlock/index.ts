import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';
import linkGroup from '../../fields/linkGroup';

export const BannerBlock: Block = {
  slug: 'banner-block',
  interfaceName: 'BannerBlock',
  imageURL: '/blocks/banner-block.png',
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
    lexicalHTML('sectionTitleAndDescription', { name: 'sectionTitleAndDescription_html' }),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        admin: {
          description: 'Add links here.',
        },
        maxRows: 2,
      },
    }),
  ],
};
