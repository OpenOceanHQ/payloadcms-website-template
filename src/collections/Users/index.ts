import type { CollectionConfig } from 'payload/types';

import { admins } from '@/access/admins';
import { anyone } from '@/access/anyone';
import { adminsAndUsers } from '@/access/adminsAndUsers';
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin';
// import { loginAfterCreate } from './hooks/loginAfterCreate';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email'],
  },
  // hooks: {
  //   afterChange: [loginAfterCreate],
  // },
  access: {
    read: adminsAndUsers,
    create: anyone,
    update: adminsAndUsers,
    delete: admins,
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'user',
          value: 'user',
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
  ],
  timestamps: true,
};
