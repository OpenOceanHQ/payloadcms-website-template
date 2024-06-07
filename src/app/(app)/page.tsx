import Header from '@/common/Components/Header/Header';
import Footer from '@/common/Components/Footer/Footer';
import React from 'react';
import { RenderBlocks } from '@/common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import type { Setting as SettingBlock } from '@/payload-types';

const Home = async () => {
  const payload = await getPayload({ config: configPromise });

  try {
    const doc: SettingBlock = await payload.findGlobal({
      slug: 'settings' as never,
    });

    if (!doc) {
      throw new Error();
    }

    let layout;
    if (doc.homePage?.value && typeof doc.homePage?.value !== 'string') {
      layout = doc.homePage?.value.layout;
    }

    return (
      <>
        <Header /> <RenderBlocks data={layout} /> <Footer />
      </>
    );
  } catch (error) {
    return notFound();
  }
};
export default Home;
