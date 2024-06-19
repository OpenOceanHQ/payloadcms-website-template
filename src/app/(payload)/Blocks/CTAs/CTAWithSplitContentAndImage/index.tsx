import { Block } from 'payload';
import linkGroup from '../../../fields/linkGroup';
import { validateHexColor } from '../../../../../utilities/validateHexColor';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';

export const CTAWithSplitContentAndImageBlock: Block = {
  slug: 'cta-with-split-content-and-image-block',
  interfaceName: 'CTAWithSplitContentAndImageBlock',
  imageURL: '/blocks/cta-with-split-content-and-image-block.png',
  imageAltText: 'CTA With Split Content And Image Block',
  labels: {
    singular: 'CTA With Split Content And Image',
    plural: 'CTA With Split Content And Image',
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    lexicalHTML('sectionTitleAndDescription', { name: 'sectionTitleAndDescription_html' }),
  ],
};
