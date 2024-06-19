import { GlobalConfig } from 'payload';

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
