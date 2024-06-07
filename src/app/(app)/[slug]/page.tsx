import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { RenderBlocks } from '../../../common/Blocks/RenderBlocks';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import { ParsedUrlQuery } from 'querystring';

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

    return (
      <>
        <Header /> <RenderBlocks data={docs[0].layout} /> <Footer />
      </>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
