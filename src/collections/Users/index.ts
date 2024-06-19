import { CollectionConfig } from 'payload';
import { admins } from '@/access/admins';
import { adminsOrUsers, adminsOrUsersFieldAccess } from '@/access/adminsOrUsers';
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
    read: adminsOrUsers,
    create: admins,
    update: admins,
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
        read: adminsOrUsersFieldAccess,
        create: admins,
        update: admins,
      },
    },
  ],
  timestamps: true,
};
