import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload/config';
// import sharp from 'sharp'
import { fileURLToPath } from 'url';
import { Users } from './collections/Users';
import Header from './app/globals/Header';
import Footer from './app/globals/Footer';
import Settings from './app/globals/Settings';
import { Pages } from './collections/Pages';
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import { Media } from './collections/Media';
import { admins } from './access/admins';
import { adminsOrUsers } from './access/adminsOrUsers';
import { Blog } from './collections/Blog';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Blog, Pages, Media],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || 'this is best',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  globals: [Header, Footer, Settings],
  graphQL: {
    disablePlaygroundInProduction: false,
  },
  plugins: [
    formBuilderPlugin({
      /*@ts-ignore*/
      formOverrides: {
        access: {
          create: adminsOrUsers,
          read: adminsOrUsers,
          update: adminsOrUsers,
          delete: admins,
        },
      },
      /*@ts-ignore*/
      formSubmissionOverrides: {
        access: {
          create: adminsOrUsers,
          read: adminsOrUsers,
          update: adminsOrUsers,
          delete: admins,
        },
      },
      fields: {
        text: true,
        textarea: true,
        number: true,
        checkbox: true,
        select: true,
        email: true,
        country: true,
        message: true,
        state: false,
        payment: false,
      },
    }),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
