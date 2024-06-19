import { GlobalConfig } from 'payload';
import linkGroup from '../(payload)/fields/linkGroup';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },
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
          name: 'youtube',
          label: 'Youtube URL',
          admin: {
            placeholder: 'Enter Youtube URL',
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
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 5,
          },
        }),
      ],
    },
    { name: 'copyright', type: 'text', required: true },
  ],
};

export default Footer;
