import Header from '../../common/Components/Header';
import Footer from '../../common/Components/Footer';
import React from 'react';
import { RenderBlocks } from '../../common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import type { Setting as SettingBlock } from '@/payload-types';

const Home = async () => {
  const payload = await getPayload({ config: configPromise });

  try {
    const settingGlobal: SettingBlock = await payload.findGlobal({
      slug: 'settings' as never,
    });

    if (!settingGlobal) {
      throw new Error();
    }

    const pageId =
      typeof settingGlobal.homePage?.value !== 'string' && settingGlobal.homePage?.value.id;

    const { docs } = await payload.find({
      collection: 'pages',
      where: { id: { equals: pageId } },
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
