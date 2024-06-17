import { Page } from '@/payload-types';
import FormBlock from '../FormBlock';
import { MediaBlock } from '../MediaBlock';
import { IncentiveBlock } from '../IncentiveBlock';
import { HeroWithBackgroundBlock } from '../HeroWithBackgroundBlock';
import { HeroWithSplitContentAndImageBlock } from '../HeroWithSplitContentAndImageBlock';
import { StatsBlock } from '../StatsBlock';
import { CTACenteredBlock } from '../CTACenteredBlock';
import { CTAWithSplitContentAndButtonBlock } from '../CTAWithSplitContentAndButtonBlock';
import { CTAWithSplitContentAndImageBlock } from '../CTAWithSplitContentAndImageBlock';
import { Testimonial } from '../Testimonial';
import { ContentBlock } from '../ContentBlock';
import { LogoCloudBlock } from '../LogoCloudBlock';
import { FeatureWithImageBlock } from '../FeatureWithImageBlock';
import { FeatureWithThreeColumnBlock } from '../FeatureWithThreeColumnBlock';
import { PricingBlock } from '../PricingBlock';

export type RenderBlocks = Page['layout'];

export const RenderBlocks = ({ data }: { data: RenderBlocks }) => {
  if (!data) return null;
  return <>{data.map((block, index) => blocks(block, index))}</>;
};

const blocks = (block: NonNullable<RenderBlocks>[number], index: number) => {
  switch (block.blockType) {
    case 'form-block':
      return <FormBlock key={index} data={block} />;
    case 'media-block':
      return <MediaBlock key={index} data={block} />;
    case 'content-block':
      return <ContentBlock key={index} data={block} />;
    case 'incentive-block':
      return <IncentiveBlock key={index} data={block} />;
    case 'hero-with-background-block':
      return <HeroWithBackgroundBlock key={index} data={block} />;
    case 'hero-with-split-content-and-image-block':
      return <HeroWithSplitContentAndImageBlock key={index} data={block} />;
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
    case 'logo-cloud-block':
      return <LogoCloudBlock key={index} data={block} />;
    case 'feature-with-image-block':
      return <FeatureWithImageBlock key={index} data={block} />;
    case 'feature-with-three-column-block':
      return <FeatureWithThreeColumnBlock key={index} data={block} />;
    case 'pricing-block':
      return <PricingBlock key={index} data={block} />;
    default:
      return null;
  }
};
