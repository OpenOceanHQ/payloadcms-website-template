import Link from 'next/link';
import type { CTAWithSplitContentAndButtonBlock as CTAWithSplitContentAndButtonBlockType } from '@/payload-types';

export const CTAWithSplitContentAndButtonBlock = ({
  data,
}: {
  data: CTAWithSplitContentAndButtonBlockType | null | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div
        className="w-full h-full rounded-xl"
        style={
          data.backgroundColor ? { backgroundColor: data.backgroundColor || '#FFFFFF' } : undefined
        }
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="prose xl:prose-xl">
            {data.sectionTitleAndDescription_html && (
              <div
                style={data.textColor ? { color: data.textColor || '#000000' } : undefined}
                dangerouslySetInnerHTML={{ __html: data.sectionTitleAndDescription_html }}
              />
            )}
          </div>

          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            {data.links?.map(({ link }, index) => (
              <Link
                href={link.url ? link.url : ''}
                key={index}
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ${
                  link.appearance === 'primary'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'text-gray-900 bg-white'
                }`}
                target={link.newTab ? '_blank' : '_self'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
