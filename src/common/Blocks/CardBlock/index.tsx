import { MediaImage } from '@/common/Components/MediaImage';
import { CardBlock as CardBlockType } from '@/payload-types';

export const CardBlock = ({ data }: { data: CardBlockType }) => {
  if (!data) return;
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {data.titleAndDescription_html && (
        <div
          className="prose lg:prose-lg xl:prose-xl prose-headings:text-inherit"
          dangerouslySetInnerHTML={{ __html: data.titleAndDescription_html }}
        />
      )}
      <div className="flex flex-wrap justify-evenly">
        {data.cards.map((card) => (
          <div key={card.id} className="block sm:basis-1/2 md:basis-1/3 px-10 mt-10">
            <MediaImage
              media={card.image}
              className="h-52 w-full object-contain sm:h-72 lg:h-80 "
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{card.title}</h3>

            <p className="mt-2 max-w-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
