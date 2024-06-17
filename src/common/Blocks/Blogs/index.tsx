import { MediaImage } from '../../../common/Components/MediaImage';
import type { BlogsBlock as BlogsBlockType } from '@/payload-types';
// import { LinkButton } from '../../Components/LinkButtons';
import Link from 'next/link';

export const BlogsBlock = ({ data }: { data: BlogsBlockType | null | undefined }) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 rounded-xl">
      <div className="mx-auto text-center">
        <div className=" prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
          {data.titleAndDescription_html && (
            <div dangerouslySetInnerHTML={{ __html: data.titleAndDescription_html }} />
          )}
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.blogs &&
            data.blogs.length > 0 &&
            data.blogs.map(({ blog }, idx) => {
              const d = blog?.value;
              if (!d || typeof d === 'string') {
                return null;
              }
              let date = new Date(d.createdAt);

              return (
                <Link href={`/blog/${d.slug}`} key={idx}>
                  <article className="flex flex-col items-start justify-between">
                    <div className="relative w-full">
                      <MediaImage
                        media={d.image}
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />

                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={d.createdAt} className="text-gray-500">
                          {date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {d.title}
                        </h3>
                        {d.content_html && (
                          <div
                            className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                            dangerouslySetInnerHTML={{ __html: d.content_html }}
                          ></div>
                        )}
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <MediaImage className="h-5 w-5 rounded-full bg-gray-100" media={d.image} />

                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {d.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};
