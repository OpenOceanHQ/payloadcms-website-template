import { MediaImage } from '@/common/Mediaimage';
import { MediaBlock as MediaBlockType } from '@/payload-types';

export const MediaBlock = ({ data }: { data: MediaBlockType | null | undefined }) => {
  if (!data) return null;
  if (!data.media) return null;

  if (data.position === 'fullscreen')
    return <MediaImage media={data.media} className="w-full h-full" />;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <MediaImage media={data.media} className="w-full h-full" />
    </section>
  );
};
