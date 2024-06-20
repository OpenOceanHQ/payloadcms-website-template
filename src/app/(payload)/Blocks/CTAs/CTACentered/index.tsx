import type { Block } from 'payload/types';
import linkGroup from '../../../fields/linkGroup';
import { validateHexColor } from '../../../../../utilities/validateHexColor';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const CTACenteredBlock: Block = {
  slug: 'cta-centered-block',
  interfaceName: 'CTACenteredBlock',
  imageURL: '/blocks/cta-centered-block.png',
  imageAltText: 'CTA Centered Block',
  labels: {
    singular: 'CTA Centered',
    plural: 'CTA Centered',
  },
  fields: [
    {
      name: 'sectionTitleAndDescription',
      label: 'Section Title And Description',
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
      name: 'backgroundColor',
      type: 'text',
      validate: validateHexColor,
      required: true,
      defaultValue: '#111827',
    },
    {
      name: 'textColor',
      type: 'text',
      validate: validateHexColor,
      required: true,
      defaultValue: '#ffffff',
    },

    lexicalHTML('sectionTitleAndDescription', { name: 'sectionTitleAndDescription_html' }),
  ],
};
