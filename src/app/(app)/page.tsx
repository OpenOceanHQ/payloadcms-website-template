import Header from '@/common/Components/Header/Header';
import Footer from '@/common/Components/Footer/Footer';
import React from 'react';
import { RenderBlocks } from '@/common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

const Home = async () => {
  const payload = await getPayload({ config: configPromise });

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
    });

    if (docs.length === 0) {
      throw new Error();
    }

    return (
      <>
        <Header /> <RenderBlocks data={docs[0].layout} /> <Footer />
      </>
    );
  } catch (error) {
    return notFound();
  }
};
export default Home;
