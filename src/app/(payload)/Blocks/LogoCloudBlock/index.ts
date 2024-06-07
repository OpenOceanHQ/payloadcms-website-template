import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload/types';

export const LogoCloudBlock: Block = {
  slug: 'logo-cloud-block',
  interfaceName: 'LogoCloudBlock',
  imageAltText: 'Logo Cloud Block',
  labels: {
    singular: 'Logo Cloud Block',
    plural: 'Logo Cloud Block',
  },
  fields: [
    {
      name: 'sectionTitleAndDescription',
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
    lexicalHTML('sectionTitleAndDescription', { name: 'section_title_and_description_html' }),
    {
      name: 'logos',
      type: 'array',
      label: 'Your Logos to be displayed',
      minRows: 3,
      maxRows: 5,
      required: true,
      fields: [
        {
          name: 'storeLogo',
          required: true,
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Logo should be atleast 200px*200px.',
          },
        },
      ],
    },
  ],
};
