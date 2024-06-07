import type { Block, Field } from 'payload/types';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import linkGroup from '@/app/(payload)/fields/linkGroup';

const columnFields: Field[] = [
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
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
    }),
  },
  lexicalHTML('richText', { name: 'richText_html' }),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  linkGroup({
    appearances: ['primary', 'secondary'],

    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
];

export const ContentBlock: Block = {
  slug: 'content-block',
  interfaceName: 'ContentBlock',
  imageURL: 'https://cornerrr.com/blocks/content-block.png',
  imageAltText: 'Content Block',
  fields: [
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
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
};
