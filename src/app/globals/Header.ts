import { GlobalConfig } from 'payload/types';

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },
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
    {
      name: 'showLoginButton',
      type: 'checkbox',
      required: true,
    },
  ],
};

export default Header;
