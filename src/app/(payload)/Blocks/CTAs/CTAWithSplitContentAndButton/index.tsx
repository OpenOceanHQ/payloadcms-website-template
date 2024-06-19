import { Block } from 'payload';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import linkGroup from '../../../fields/linkGroup';
import { validateHexColor } from '../../../../../utilities/validateHexColor';

export const CTAWithSplitContentAndButtonBlock: Block = {
  slug: 'cta-with-split-content-and-button-block',
  interfaceName: 'CTAWithSplitContentAndButtonBlock',
  imageURL: '/blocks/cta-with-split-content-and-button-block.png',
  imageAltText: 'CTA With Split Content And Button Block',
  labels: {
    singular: 'CTA With Split Content And Button',
    plural: 'CTA With Split Content And Button',
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
