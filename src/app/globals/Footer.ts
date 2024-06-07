import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'storeName', type: 'text', required: true },
    {
      name: 'socialProfiles',
      label: 'Social profiles',
      type: 'group',
      admin: {
        description: 'Connect with customers and grow your online presence.',
      },
      fields: [
        {
          name: 'facebook',
          label: 'Facebook URL',
          admin: {
            placeholder: 'Enter Facebook URL',
          },
          type: 'text',
        },
        {
          name: 'twitter',
          label: 'Twitter URL',
          admin: {
            placeholder: 'Enter Twitter URL',
          },
          type: 'text',
        },
        {
          name: 'instagram',
          label: 'Instagram URL',
          admin: {
            placeholder: 'Enter Instagram URL',
          },
          type: 'text',
        },
        {
          name: 'linkedIn',
          label: 'LinkedIn URL',
          admin: {
            placeholder: 'Enter LinkedIn URL',
          },
          type: 'text',
        },
        {
          name: 'youtube',
          label: 'Youtube URL',
          admin: {
            placeholder: 'Enter Youtube URL',
          },
          type: 'text',
        },
        {
          name: 'pinterest',
          label: 'Pinterest URL',
          admin: {
            placeholder: 'Enter Pinterest URL',
          },
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
          admin: {
            placeholder: 'Enter Email',
          },
        },
        {
          name: 'phone',
          type: 'text',
          admin: {
            placeholder: 'Enter Phone number',
          },
        },
      ],
    },
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
    { name: 'copyright', type: 'text', required: true },
  ],
};

export default Footer;