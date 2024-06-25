import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import { Block } from 'payload';

export const FormBlock: Block = {
  slug: 'form-block',
  interfaceName: 'FormBlock',
  imageURL: '/blocks/form-block.png',
  imageAltText: 'Form Block',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
    },
    {
      name: 'introContent',
      label: 'Intro Content',
      type: 'richText',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.enableIntro,
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('introContent', { name: 'intro_content_html' }),
  ],
};
