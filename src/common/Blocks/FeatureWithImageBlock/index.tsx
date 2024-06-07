import type { FeatureWithImageBlock as FeatureWithImageBlockType } from '@/payload-types';
import { MediaImage } from '../../Components/MediaImage';
import { CustomIcon } from '../../Components/CustomIcon';

export const FeatureWithImageBlock = ({
  data,
}: {
  data: FeatureWithImageBlockType | null | undefined;
}) => {
  if (!data) return null;
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div
          className={`${data.alignment === 'leftToRight' ? 'lg:pr-8' : ''} ${
            data.alignment === 'leftToRight' ? 'lg:ml-auto lg:pl-4' : ''
          }`}
        >
          <div className="lg:max-w-lg prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
            {data && data.section_title_and_description_html && (
              <div dangerouslySetInnerHTML={{ __html: data.section_title_and_description_html }} />
            )}
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {data.features?.map(({ icon, feature_content_html }, index) => (
                <div key={index} className="flex flex-col">
                  {icon && <CustomIcon name={icon} className="h-6 w-6 text-indigo-600" />}
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
                    {feature_content_html && (
                      <div dangerouslySetInnerHTML={{ __html: feature_content_html }} />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {data.showImage && (
          <div
            className={`flex-1 relative max-w-[48rem] min-h-80 ${
              data.alignment === 'leftToRight' ? 'lg:order-first' : ''
            }`}
          >
            <MediaImage
              media={data.image}
              className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        )}
      </div>
    </section>
  );
};
