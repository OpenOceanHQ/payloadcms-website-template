'use client';
import { PayloadAdminBar } from 'payload-admin-bar';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const AdminBar = () => {
  return (
    <PayloadAdminBar
      cmsURL={serverUrl}
      collection="pages"
      collectionLabels={{ singular: 'page', plural: 'pages' }}
      style={{ position: 'static' }}
      logoProps={{ style: { marginBlock: '4px', marginLeft: '10px' } }}
      logoutProps={{ style: { marginRight: '10px' } }}
      logo={<h1>Admin Dashboard</h1>}
    />
  );
};
