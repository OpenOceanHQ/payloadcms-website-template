import { RenderBlocks } from '@/common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React from 'react';

type Props = {};
const Home = async ({}: Props) => {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'pages',
  });

  return (
    <div>
      <RenderBlocks data={docs[1].layout} />
    </div>
  );
};
export default Home;
