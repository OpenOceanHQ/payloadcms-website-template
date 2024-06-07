import type { Block } from 'payload/types';

import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import { IconSelector } from '../../ui/IconSelector';

export const FeatureWithImageBlock: Block = {
  slug: 'feature-with-image-block',
  interfaceName: 'FeatureWithImageBlock',
  imageAltText: 'Feature With Image Block',
  labels: {
    singular: 'Feature With Image',
    plural: 'Feature With Image',
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
      ],
    },
    {
      name: 'sectionTitleAndDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('sectionTitleAndDescription', { name: 'section_title_and_description_html' }),
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'icon',
          admin: {
            components: {
              Field: IconSelector,
            },
          },
        },
        {
          name: 'featureContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('featureContent', { name: 'feature_content_html' }),
      ],
    },
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
  ],
};
