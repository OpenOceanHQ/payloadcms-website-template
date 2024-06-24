import { Media } from '@/payload-types';
import Image from 'next/image';

export const MediaImage = ({
  media,
  className,
}: {
  media: Media | string | null | undefined;
  className: React.ComponentProps<'div'>['className'];
}) => {
  if (!media || typeof media === 'string')
    return (
      <Image
        src={'/images/placeholder.jpg'}
        width={500}
        height={500}
        alt={'placeholderImage'}
        className={className}
      />
    );

  return (
    <Image
      src={media.url ? media.url : '/images/placeholder.jpg'}
      width={media.width ?? 500}
      height={media.height ?? 500}
      alt={media.alt}
      className={className}
    />
  );
};
