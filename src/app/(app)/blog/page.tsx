import configPromise from '@payload-config';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import type { Blog as BlogType } from '@/payload-types';
import { MediaImage } from '@/common/Components/MediaImage';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blogs',
  openGraph: {
    url: process.env.SERVER_URL + 'blog',
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

const page = async () => {
  const payload = await getPayload({ config: configPromise });

  try {
    const { docs } = await payload.find({
      collection: 'blog',
    });

    if (docs.length === 0) {
      throw new Error();
    }

    return <Blogs blogs={docs} />;
  } catch (error) {
    return notFound();
  }
};

function Blogs({ blogs }: { blogs: BlogType[] }) {
  return (
    <>
      <div className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        {blogs && blogs.length > 0 && (
          <Link href={`/blog/${blogs[0].slug}`} key={blogs[0].slug}>
            <article className="relative flex flex-col gap-8 isolate lg:flex-row">
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2] lg:w-[40rem] lg:shrink-0">
                <MediaImage
                  className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50"
                  media={blogs[0].image}
                />

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={blogs[0].createdAt} className="text-gray-500">
                    {new Date(blogs[0].createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="relative max-w-xl group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {blogs[0].title}
                  </h3>
                  {blogs[0].content_html && (
                    <div
                      className="mt-5 text-sm leading-6 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: blogs[0].content_html }}
                    ></div>
                  )}
                </div>
                <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                  <div className="relative flex items-center gap-x-2">
                    <MediaImage
                      className="w-6 h-6 rounded-full bg-gray-50"
                      media={blogs[0].author_image}
                    />
                    <div className="text-sm leading-6">
                      <p className="text-gray-900">
                        <span className="absolute inset-0" />
                        {blogs[0].author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs &&
            blogs.map((blog, idx) => {
              let date = new Date(blog.createdAt);

              if (idx !== 0) {
                return (
                  <Link href={`/blog/${blog.slug}`} key={blog.slug + idx}>
                    <article className="flex flex-col items-start justify-between">
                      <div className="relative w-full">
                        <MediaImage
                          media={blog.image}
                          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />

                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="max-w-xl">
                        <div className="flex items-center mt-8 text-xs gap-x-4">
                          <time dateTime={blog.createdAt} className="text-gray-500">
                            {date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        <div className="relative group">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <span className="absolute inset-0" />
                            {blog.title}
                          </h3>
                          {blog.content_html && (
                            <div
                              className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3"
                              dangerouslySetInnerHTML={{ __html: blog.content_html }}
                            ></div>
                          )}
                        </div>
                        <div className="relative flex items-center mt-8 gap-x-4">
                          <MediaImage
                            className="w-5 h-5 bg-gray-100 rounded-full"
                            media={blog.image}
                          />

                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                              <span className="absolute inset-0" />
                              {blog.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default page;
