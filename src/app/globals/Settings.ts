import { GlobalConfig } from 'payload/types';
import revalidateGlobal from './hooks/revalidateGlobal';

const Settings: GlobalConfig = {
  slug: 'settings',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: 'homePage',
      type: 'relationship',
      relationTo: ['pages'],
    },
  ],
};

export default Settings;
