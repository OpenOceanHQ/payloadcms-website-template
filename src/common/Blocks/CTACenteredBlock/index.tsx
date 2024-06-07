import type { CTACenteredBlock as CTACenteredBlockType } from '@/payload-types';
import { LinkButton } from '../../components/LinkButtons';

export const CTACenteredBlock = ({ data }: { data: CTACenteredBlockType | null | undefined }) => {
  if (!data) return null;

  return (
    <section
      className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 rounded-xl"
      style={
        data.backgroundColor ? { backgroundColor: data.backgroundColor || '#FFFFFF' } : undefined
      }
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="prose xl:prose-xl">
          {data.sectionTitleAndDescription_html && (
            <div
              style={data.textColor ? { color: data.textColor || '#000000' } : undefined}
              dangerouslySetInnerHTML={{ __html: data.sectionTitleAndDescription_html }}
            />
          )}
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {data.links?.map(({ link }, index) => <LinkButton link={link} key={index} />)}
        </div>
      </div>
    </section>
  );
};
