// import { FormBlock } from '../Form';

import { Page } from '@/payload-types';
import QuoteBlock from '../QuoteBlock';

export type RenderBlocks = Page['layout'];

export const RenderBlocks = ({ data }: { data: RenderBlocks }) => {
  if (!data) return null;

  return <>{data.map((block, index) => blocks(block, index))}</>;
};

const blocks = (block: NonNullable<RenderBlocks>[number], index: number) => {
  switch (block.blockType) {
    // case 'form-block':
    //   return <FormBlock key={index} data={block} />;
    case 'quote-block':
      return <QuoteBlock key={index} data={block} />;
    default:
      return null;
  }
};
