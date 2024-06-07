import { LinkButton } from '../../components/LinkButtons';
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
            {data.links?.map(({ link }, index) => <LinkButton link={link} key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
