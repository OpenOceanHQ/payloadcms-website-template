import Link from 'next/link';
import { CustomIcon } from '../../Components/CustomIcon';
import type { FeatureWithThreeColumnBlock as FeatureWithThreeColumnBlockType } from '@/payload-types';

export const FeatureWithThreeColumnBlock = ({
  data,
}: {
  data: FeatureWithThreeColumnBlockType | null | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl lg:text-center prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
        {data && data.section_title_and_description_html && (
          <div dangerouslySetInnerHTML={{ __html: data.section_title_and_description_html }} />
        )}
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {data.features?.map(({ link, icon, feature_content_html }, index: number) => (
            <div key={index} className="flex flex-col">
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
                {icon && <CustomIcon name={icon} className="h-6 w-6 flex-none text-indigo-600 " />}
                {feature_content_html && (
                  <div dangerouslySetInnerHTML={{ __html: feature_content_html }} />
                )}
                <p className="mt-6">
                  {link && (
                    <Link
                      href={link.url ? link.url : ''}
                      className={`text-sm font-semibold leading-6 text-indigo-600`}
                    >
                      {link.label}
                    </Link>
                  )}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
