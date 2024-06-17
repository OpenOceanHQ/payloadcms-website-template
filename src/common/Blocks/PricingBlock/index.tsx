import React from 'react';
import type { PricingBlock as PricingBlockType } from '@/payload-types';

export function PricingBlock({ data }: { data: PricingBlockType | null | undefined }) {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {data?.pricingPlans &&
          data?.pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-medium text-gray-900">
                    {plan.title}
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 text-gray-700">{plan.description}</p>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      {' '}
                      {plan.monthlyPrice}${' '}
                    </strong>

                    <span className="text-sm font-medium text-gray-700">/month</span>
                  </p>

                  <a
                    className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">
                    What&apos;s included:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {plan?.planPerks &&
                      plan.planPerks.map((perk) => {
                        return (
                          <li key={perk.id} className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 text-indigo-700"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>

                            <span className="text-gray-700"> {perk.perk} </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
