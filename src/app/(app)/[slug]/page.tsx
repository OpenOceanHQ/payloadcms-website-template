import { RenderBlocks } from '../../../common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import { ParsedUrlQuery } from 'querystring';
import { Metadata } from 'next';
import { siteName } from '../../../common/Components/Header';
import JsonLdSchema from '@/common/Components/JsonLd';

const serverUrl = process.env.SERVER_URL;
const getData = async (slug: string) => {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
  });

  return docs;
};

export async function generateMetadata({ params }: { params: ParsedUrlQuery }): Promise<Metadata> {
  let metadata: Metadata = {};
  const { slug } = params;

  try {
    const docs = await getData(typeof slug === 'string' ? slug : slug ? slug[0] : '');

    if (!docs) {
      throw new Error();
    }

    metadata = {
      title: docs[0].title,
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
const page = async ({ params }: { params: ParsedUrlQuery }) => {
  const { slug } = params;
  const payload = await getPayload({ config: configPromise });

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
    });

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
        <JsonLdSchema {...jsonLdData} /> <RenderBlocks data={docs[0].layout} />
      </>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
