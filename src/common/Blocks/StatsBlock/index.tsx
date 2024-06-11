import { StatsBlock as StatsBlockType } from '@/payload-types';

import React from 'react';

export function StatsBlock({ data }: { data: StatsBlockType | null | undefined }) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 md:py-12 lg:py-16 lg:px-8">
        {data && data.sectionTitleAndDescription_html && (
          <div className="max-w-3xl mx-auto text-center prose xl:prose-xl">
            {<div dangerouslySetInnerHTML={{ __html: data.sectionTitleAndDescription_html }} />}
          </div>
        )}

        {data?.yourMetrics && (
          <div className="mt-6 sm:mt-8 md:mt-12">
            <dl className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6 sm:justify-around">
              {data?.yourMetrics?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col px-4 py-6 text-center border border-gray-100 rounded-lg sm:py-8"
                >
                  <dt className="order-last text-sm font-medium text-gray-500 sm:text-lg">
                    {item.metric}
                  </dt>

                  <dd className="text-3xl font-extrabold text-blue-600 sm:text-4xl md:text-5xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
