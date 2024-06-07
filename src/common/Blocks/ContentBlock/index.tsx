import { ContentBlock as ContentBlockType } from '@/payload-types';
import Link from 'next/link';

export const ContentBlock = ({ data }: { data: ContentBlockType | null | undefined }) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div
        className={`flex flex-col gap-10 ${data.alignment === 'left' ? 'items-start' : ''}
        ${data.alignment === 'center' ? 'items-center' : ''}
        ${data.alignment === 'right' ? 'items-end' : ''}`}
      >
        {data.columns?.map(({ richText_html, links, enableLink, size }, index) => (
          <div
            className={`
          ${data.alignment === 'left' ? 'text-left' : ''}
          ${data.alignment === 'center' ? 'text-center' : ''}
          ${data.alignment === 'right' ? 'text-right' : ''}
          ${size === 'oneThird' ? 'w-1/3' : ''}
          ${size === 'twoThirds' ? 'w-2/3' : ''}
          ${size === 'half' ? 'w-1/2' : ''}
          ${size === 'full' ? 'w-full' : ''}
          prose lg:prose-lg xl:prose-xl`}
            key={index}
          >
            {richText_html && <div dangerouslySetInnerHTML={{ __html: richText_html }} />}
            {enableLink &&
              links &&
              links.map(({ link }, index) => (
                <Link
                  key={index}
                  href={link.url ? link.url : ''}
                  className={`mr-2 mt-2 inline-block rounded border border-indigo-600 ${
                    link.appearance === 'primary' && 'bg-indigo-600'
                  } px-12 py-3 text-sm font-medium ${
                    link.appearance === 'primary' ? 'text-white' : 'text-indigo-600'
                  } transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400`}
                >
                  {link.label}
                </Link>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
