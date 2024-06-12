import { MediaImage } from '../../Components/MediaImage';
import { CustomIcon } from '../CustomIcon';
import type { IncentiveBlock as IncentiveBlockType } from '@/payload-types';

export const IncentiveBlock = ({ data }: { data: IncentiveBlockType | null | undefined }) => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col items-center justify-center my-10 md:flex-row gap-x-16 gap-y-10">
        <div className="basis-1/2">
          <h1 className="text-4xl font-bold text-gray-900">{data?.title}</h1>
          <p className="mt-2 text-base text-gray-600">{data?.description}</p>
        </div>
        <div className="w-full sm:w-3/4 basis-1/2">
          {data && (
            <MediaImage
              media={data?.image}
              className="h-full w-full object-cover aspect-[8/6] rounded-lg shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-16 lg:grid-cols-3 gap-y-10 gap-x-8">
        {data?.features &&
          data.features?.map((item) => (
            <div className="sm:flex lg:block" key={item.title}>
              <div className="bzt">
                {item.icon && (
                  <CustomIcon name={item.icon} className="flex-none text-gray-900 w-14 h-14" />
                )}
              </div>
              <div className="lg:mt-6 lg:ml-0 lh sm:ml-6 sm:mt-0 ">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
