import type { HeroWithSplitContentAndImageBlock as HeroWithSplitContentAndImageBlockType } from '@/payload-types';
import { MediaImage } from '../../Components/MediaImage';
import { LinkButton } from '../../Components/LinkButtons';

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
          <div className="prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
            {data.heroContent_html && (
              <div dangerouslySetInnerHTML={{ __html: data.heroContent_html }} />
            )}
          </div>

          <div className="mt-6">
            {data.links?.map(({ link }, index) => <LinkButton link={link} key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
