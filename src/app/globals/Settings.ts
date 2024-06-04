import { GlobalConfig } from 'payload/types'

const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'reference',
      label: 'Page to Edit',
      type: 'relationship',
      relationTo: ['pages'],
    },
  ],
}

export default Settings
