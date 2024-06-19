import type { Block } from 'payload/types';
import linkGroup from '../../fields/linkGroup';
import { validateHexColor } from '../../../../utilities/validateHexColor';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const HeroWithBackgroundBlock: Block = {
  slug: 'hero-with-background-block',
  interfaceName: 'HeroWithBackgroundBlock',
  imageURL: '/blocks/hero-with-background-block.png',
  imageAltText: 'Hero With Background Block',
  labels: {
    singular: 'Hero With Background',
    plural: 'Hero With Background',
  },
  fields: [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'oneThird',
      options: [
        {
          value: 'oneThird',
          label: 'One Third',
        },
        {
          value: 'half',
          label: 'Half',
        },
        {
          value: 'twoThirds',
          label: 'Two Thirds',
        },
        {
          value: 'full',
          label: 'Full',
        },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
        {
          label: 'center',
          value: 'center',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
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
      name: 'backgroundType',
      type: 'select',
      defaultValue: 'backgroundImage',
      options: [
        {
          label: 'Background Image',
          value: 'backgroundImage',
        },
        {
          label: 'Background Color',
          value: 'backgroundColor',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.backgroundType === 'backgroundImage',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      validate: validateHexColor,
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.backgroundType === 'backgroundColor',
      },
      defaultValue: '#111827',
    },
    {
      name: 'textColor',
      type: 'text',
      validate: validateHexColor,
      required: true,
      defaultValue: '#ffffff',
    },
    lexicalHTML('heroContent', { name: 'heroContent_html' }),
  ],
};
