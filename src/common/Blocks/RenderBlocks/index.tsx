import { Page } from '@/payload-types';
import QuoteBlock from '../QuoteBlock';
import { HeroWithBackgroundBlock } from '../HeroWithBackgroundBlock';
import { HeroWithSplitContentAndImageBlock } from '../HeroWithSplitContentAndImageBlock';

export type RenderBlocks = Page['layout'];

export const RenderBlocks = ({ data }: { data: RenderBlocks }) => {
  if (!data) return null;

  return <>{data.map((block, index) => blocks(block, index))}</>;
};

const blocks = (block: NonNullable<RenderBlocks>[number], index: number) => {
  switch (block.blockType) {
    case 'quote-block':
      return <QuoteBlock key={index} data={block} />;
    case 'hero-with-background-block':
      return <HeroWithBackgroundBlock key={index} data={block} />;
    case 'hero-with-split-content-and-image-block':
      return <HeroWithSplitContentAndImageBlock key={index} data={block} />;
    default:
      return null;
  }
};
