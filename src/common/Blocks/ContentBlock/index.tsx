import { LinkButton } from '../../components/LinkButtons';
import { ContentBlock as ContentBlockType } from '@/payload-types';

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
              links.map(({ link }, index) => <LinkButton link={link} key={index} />)}
          </div>
        ))}
      </div>
    </section>
  );
};
