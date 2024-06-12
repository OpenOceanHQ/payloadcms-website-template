import type { CTAWithSplitContentAndImageBlock as CTAWithSplitContentAndImageBlockType } from '@/payload-types';
import { LinkButton } from '../../Components/LinkButtons';
import { MediaImage } from '../../Components/MediaImage';

export const CTAWithSplitContentAndImageBlock = ({
  data,
}: {
  data: CTAWithSplitContentAndImageBlockType | null | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div
        className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        style={
          data.backgroundColor ? { backgroundColor: data.backgroundColor || '#FFFFFF' } : undefined
        }
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <div className="prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
            {data.sectionTitleAndDescription_html && (
              <div
                style={data.textColor ? { color: data.textColor || '#000000' } : undefined}
                dangerouslySetInnerHTML={{ __html: data.sectionTitleAndDescription_html }}
              />
            )}
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            {data.links?.map(({ link }, index) => <LinkButton link={link} key={index} />)}
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          {data.image && (
            <>
              <MediaImage
                media={data.image}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
