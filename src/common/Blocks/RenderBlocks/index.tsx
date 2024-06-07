import { Page } from '@/payload-types';
import QuoteBlock from '../QuoteBlock';
import { MediaBlock } from '../MediaBlock';
import { StatsBlock } from '../StatsBlock';
import { CTACenteredBlock } from '../CTACenteredBlock';
import { CTAWithSplitContentAndButtonBlock } from '../CTAWithSplitContentAndButtonBlock';
import { CTAWithSplitContentAndImageBlock } from '../CTAWithSplitContentAndImageBlock';
import { Testimonial } from '../Testimonial';
import { ContentBlock } from '../ContentBlock';

export type RenderBlocks = Page['layout'];

export const RenderBlocks = ({ data }: { data: RenderBlocks }) => {
  if (!data) return null;
  return <>{data.map((block, index) => blocks(block, index))}</>;
};

const blocks = (block: NonNullable<RenderBlocks>[number], index: number) => {
  switch (block.blockType) {
    case 'quote-block':
      return <QuoteBlock key={index} data={block} />;
    case 'media-block':
      return <MediaBlock key={index} data={block} />;
    case 'content-block':
      return <ContentBlock key={index} data={block} />;
    case 'stats-block':
      return <StatsBlock key={index} data={block} />;
    case 'cta-centered-block':
      return <CTACenteredBlock key={index} data={block} />;
    case 'cta-with-split-content-and-button-block':
      return <CTAWithSplitContentAndButtonBlock key={index} data={block} />;
    case 'cta-with-split-content-and-image-block':
      return <CTAWithSplitContentAndImageBlock key={index} data={block} />;
    case 'testimonial-block':
      return <Testimonial key={index} data={block} />;
    default:
      return null;
  }
};
