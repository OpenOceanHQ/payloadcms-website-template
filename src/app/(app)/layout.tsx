import Header from '../../common/Components/Header';
import Footer from '../../common/Components/Footer';
import './global.css';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import type { Header as HeaderBlock } from '@/payload-types';
import { Metadata } from 'next';

const getGlobalData = async () => {
  const payload = await getPayload({ config: configPromise });

  const data: HeaderBlock = await payload.findGlobal({
    slug: 'header' as never,
  });

  return data;
};
export async function generateMetadata(): Promise<Metadata> {
  let metadata: Metadata = {};
  try {
    const docs = await getGlobalData();

    if (!docs) {
      throw new Error();
    }

    metadata = {
      title: {
        template: '%s | ' + docs.storeName,
        default: docs.storeName,
      },
      openGraph: {
        type: 'website',
        siteName: docs.storeName,
      },
      twitter: {
        creator: '@handle',
        site: '@site',
        card: 'summary_large_image',
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return metadata;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        {' '}
        <Header /> {children}
        <Footer />
      </body>
    </html>
  );
}
