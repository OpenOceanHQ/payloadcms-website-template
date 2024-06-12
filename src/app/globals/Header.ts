import { GlobalConfig } from 'payload/types';
import linkGroup from '../(payload)/fields/linkGroup';

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    { name: 'showStoreLogo', type: 'checkbox', defaultValue: false },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.showStoreLogo,
      },
    },
    { name: 'storeName', type: 'text', required: true },

    {
      name: 'navLinks',
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

    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
};

export default Header;
