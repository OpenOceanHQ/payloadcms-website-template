import { GlobalConfig } from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'homePage',
      type: 'relationship',
      relationTo: ['pages'],
    },
  ],
};

export default Settings;
