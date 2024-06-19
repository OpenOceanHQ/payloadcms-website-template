import { siteName } from '../../../../common/Components/Header';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import { ParsedUrlQuery } from 'querystring';
import type { Blog as BlogType } from '@/payload-types';
import { MediaImage } from '../../../../common/Components/MediaImage';
import { BlogBreadCrumbs } from '../../../../common/Components/BlogBreadCrumbs';
import { ArticleJsonLd } from 'next-seo';

export async function generateMetadata({ params }: { params: ParsedUrlQuery }) {
  const { slug } = params;
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug } },
  });

  if (docs.length === 0) {
    return notFound();
  }

  const url =
    docs[0].image && typeof docs[0].image !== 'string' && docs[0].image.url
      ? docs[0].image.url
      : '/placeholder.jpg';

  return {
    title: docs[0].title,
    description: docs[0].description,
    openGraph: {
      url: process.env.SERVER_URL + `blog/${slug}`,
      siteName: siteName.siteName,
      images: [
        {
          url: url,
        },
      ],
    },

    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    additionalMetaTags: [
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1',
      },
    ],
  };
}

const page = async ({ params }: { params: ParsedUrlQuery }) => {
  const { slug } = params;
  const payload = await getPayload({ config: configPromise });

  try {
    const { docs } = await payload.find({
      collection: 'blog',
      where: { slug: { equals: slug } },
    });

    if (docs.length === 0) {
      throw new Error();
    }

    let imageUrl = '';
    let authorImageUrl = '';
    if (docs[0].image && typeof docs[0].image !== 'string' && docs[0].image.url) {
      imageUrl = docs[0].image.url;
    }
    if (
      docs[0].author_image &&
      typeof docs[0].author_image !== 'string' &&
      docs[0].author_image.url
    ) {
      authorImageUrl = docs[0].author_image.url;
    }

    return (
      <>
        <ArticleJsonLd
          useAppDir={true}
          url={`${process.env.NEXT_PUBLIC_SERVER_URL}blog/${slug}`}
          {...{ title: docs[0].title }}
          {...{ images: [imageUrl] }}
          {...{
            datePublished: docs[0].createdAt,
          }}
          {...{
            description: docs[0].description,
          }}
          authorName={[
            {
              name: docs[0].author ? docs[0].author : '',
              url: authorImageUrl,
            },
          ]}
          publisherName={docs[0].author ? docs[0].author : ''}
          isAccessibleForFree={true}
        />
        <Blog blog={docs[0]} />
      </>
    );
  } catch (error) {
    return notFound();
  }
};

function Blog({ blog }: { blog: BlogType }) {
  let date = new Date(blog.createdAt);

  return (
    <>
      <main className="w-full h-full">
        <div className="py-12">
          <div className="container mx-auto px-6 xl:px-32 2xl:px-60 flex flex-col">
            <BlogBreadCrumbs />
          </div>
          <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
            <time dateTime={blog.createdAt} className="text-gray-500">
              {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="group relative max-w-xl mx-auto text-center">
              <h1 className="mt-3 text-5xl font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {blog.title}
              </h1>
            </div>
            <div className="flex pt-6">
              <div className="relative flex items-center gap-x-2">
                <MediaImage className="h-7 w-7 rounded-full bg-gray-50" media={blog.author_image} />
                <div className="text-md leading-6">
                  <p className="text-gray-900">
                    <span className="absolute inset-0" />
                    {blog.author}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 relative w-full aspect-[16/9] lg:shrink-0 max-w-5xl">
              <MediaImage
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                media={blog.image}
              />

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <br />
            <br />
            <div>
              <div className="max-w-5xl block prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
                {blog.content_html && (
                  <div dangerouslySetInnerHTML={{ __html: blog.content_html }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
