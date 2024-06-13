import type { Block } from 'payload/types';
import linkGroup from '../../fields/linkGroup';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const HeroWithSplitContentAndImageBlock: Block = {
  slug: 'hero-with-split-content-and-image-block',
  interfaceName: 'HeroWithSplitContentAndImageBlock',
  imageURL: process.env.SERVER_URL + 'blocks/hero-with-split-content-and-image-block.png',
  imageAltText: 'Hero With Split Content And Image Block',
  labels: {
    singular: 'Hero With Split Content And Image',
    plural: 'Hero With Split Content And Image',
  },
  fields: [
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'leftToRight',
      options: [
        {
          label: 'Left to Right',
          value: 'leftToRight',
        },
        {
          label: 'Right to Left',
          value: 'rightToLeft',
        },
        {
          label: 'Top to Bottom',
          value: 'topToBottom',
        },
        {
          label: 'Bottom to Top',
          value: 'bottomToTop',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },

    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'showImage',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.showImage,
      },
    },
    lexicalHTML('heroContent', { name: 'heroContent_html' }),
  ],
};
