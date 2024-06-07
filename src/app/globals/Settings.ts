import { GlobalConfig } from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'page',
      type: 'relationship',
      relationTo: ['pages'],
    },
  ],
};

export default Settings;
