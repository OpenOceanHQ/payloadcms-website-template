import Link from 'next/link';
import type { HeroWithSplitContentAndImageBlock as HeroWithSplitContentAndImageBlockType } from '@/payload-types';
import { MediaImage } from '../../Mediaimage';

export const HeroWithSplitContentAndImageBlock = ({
  data,
}: {
  data: HeroWithSplitContentAndImageBlockType | null | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div
        className={`flex 
        ${data.alignment === 'leftToRight' ? 'flex-col md:flex-row' : ''}
        ${data.alignment === 'rightToLeft' ? 'flex-col md:flex-row-reverse' : ''}
        ${data.alignment === 'topToBottom' ? 'flex-col' : ''}
        ${data.alignment === 'bottomToTop' ? 'flex-col-reverse' : ''}
         w-full gap-10`}
      >
        {data.showImage && data.image && (
          <div className="flex-1 relative min-h-80">
            <MediaImage
              media={data.image}
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
          </div>
        )}

        <div
          className={`flex-1 ${
            data.alignment === 'leftToRight' || data.alignment === 'rightToLeft'
              ? 'md:py-24'
              : 'md:py-10'
          } sm:max-w-[70%]`}
        >
          <div className="prose xl:prose-xl">
            {data.heroContent_html && (
              <div dangerouslySetInnerHTML={{ __html: data.heroContent_html }} />
            )}
          </div>

          <div className="mt-6">
            {data.links?.map(({ link }, index) => (
              <Link
                href={link.url ? link.url : ''}
                key={index}
                className={`mr-2 mt-2 inline-block rounded border border-indigo-600 ${
                  link.appearance === 'primary' && 'bg-indigo-600'
                } px-12 py-3 text-sm font-medium ${
                  link.appearance === 'primary' ? 'text-white' : 'text-indigo-600'
                } transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400`}
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
