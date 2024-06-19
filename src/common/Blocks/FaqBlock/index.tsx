import React from 'react';
import type { FAQ as ContentBlockType } from '@/payload-types';

export function FAQ({ data }: { data: ContentBlockType | null | undefined }) {
  return (
    <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="mb-4 text-2xl font-medium text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {data &&
          data.FAQ &&
          data.FAQ.length > 0 &&
          data.FAQ.map((faq, index) => (
            <Bar question={faq.Question} answer={faq.Answer} index={index} key={faq.id} />
          ))}
      </div>
    </div>
  );
}

function Bar({
  question,
  answer,
  index,
}: {
  question: string | null | undefined;
  answer: string | null | undefined;
  index: number;
}) {
  return (
    <details
      className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open={index === 0}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="font-medium">{question}</h2>

        <span className="relative size-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-100 size-5 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-0 size-5 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
  );
}
