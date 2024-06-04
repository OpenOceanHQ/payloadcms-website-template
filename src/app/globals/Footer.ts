import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'footerLinks',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'reference',
          label: 'Page to link',
          type: 'relationship',
          relationTo: ['pages'],
        },
      ],
    },
  ],
};

export default Footer;
