import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import { Block } from 'payload';

export const StatsBlock: Block = {
  slug: 'stats-block',
  interfaceName: 'StatsBlock',
  imageURL: '/blocks/stats-block.png',
  imageAltText: 'Stats Block',
  labels: {
    singular: 'Stats Block',
    plural: 'Statss Block',
  },
  fields: [
    {
      name: 'sectionTitleAndDescription',
      label: 'Section Title And Description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({}),
        ],
      }),
    },

    {
      name: 'yourMetrics',
      type: 'array',
      label: 'Your metrics',
      minRows: 1,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Name of displayed metric',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value of metric',
          required: true,
        },
      ],
    },
    lexicalHTML('sectionTitleAndDescription', { name: 'sectionTitleAndDescription_html' }),
  ],
};
