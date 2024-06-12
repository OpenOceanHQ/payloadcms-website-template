import React from 'react';
import { LogoCloudBlock as LogoCloudBlockType } from '@/payload-types';
import { MediaImage } from '../../Components/MediaImage';

export const LogoCloudBlock = ({ data }: { data: LogoCloudBlockType | null | undefined }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto flex flex-col w-full items-center justify-center max-w-7xl px-6 lg:px-8">
        {data && data.section_title_and_description_html && (
          <div className="max-w-3xl mx-auto text-center prose lg:prose-lg xl:prose-xl prose-headings:text-inherit">
            {<div dangerouslySetInnerHTML={{ __html: data.section_title_and_description_html }} />}
          </div>
        )}
        <div className="flex flex-wrap mt-10 w-full justify-evenly gap-x-8 gap-y-10">
          {data?.logos &&
            data.logos.map((logo) => {
              const { storeLogo } = logo;
              if (typeof storeLogo !== 'string') {
                return (
                  <MediaImage
                    key={storeLogo.id}
                    media={storeLogo}
                    className="col-span-2 max-h-12 w-full sm:basis-1/3 md:basis-1/4 xl:basis-1/6 object-contain sm:col-span-2"
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
