import { LinkButton } from '@/common/Components/LinkButtons';
import { BannerBlock as BannerBlockType } from '@/payload-types';

export const BannerBlock = ({ data }: { data: BannerBlockType | null | undefined }) => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          {data && data.sectionTitleAndDescription_html && (
            <div className="max-w-3xl mx-auto text-center prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
              <div dangerouslySetInnerHTML={{ __html: data.sectionTitleAndDescription_html }} />
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {data &&
              data.links &&
              data.links?.map(({ link }, index) => <LinkButton link={link} key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
