import React from 'react';
import { RenderBlocks } from '../../common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import type { Setting as SettingBlock } from '@/payload-types';
import { Metadata } from 'next';
import { siteName } from '../../common/Components/Header';
import JsonLdSchema from '@/common/Components/JsonLd';

const serverUrl = process.env.SERVER_URL;

export const dynamic = 'force-dynamic';

const getGlobalData = async () => {
  const payload = await getPayload({ config: configPromise });

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

  return docs;
};

export async function generateMetadata(): Promise<Metadata> {
  let metadata: Metadata = {};
  try {
    const docs = await getGlobalData();

    if (docs.length === 0) {
      throw new Error();
    }

    metadata = {
      description: 'Build your website with ease using our website builder template.',
      openGraph: {
        type: 'website',
        url: serverUrl,
        siteName: siteName.siteName,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return metadata;
}

const Home = async () => {
  try {
    const docs = await getGlobalData();

    if (docs.length === 0) {
      throw new Error();
    }

    const jsonLdData = {
      url: serverUrl + docs[0].slug,
      name: docs[0].title ? docs[0].title : '',
      datePublished: docs[0].createdAt,
      dateModified: docs[0].updatedAt,
    };

    return (
      <>
        <JsonLdSchema {...jsonLdData} />
        <RenderBlocks data={docs[0].layout} />
      </>
    );
  } catch (error) {
    return notFound();
  }
};
export default Home;
