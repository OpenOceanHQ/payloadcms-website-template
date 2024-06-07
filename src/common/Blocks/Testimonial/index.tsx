'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import type { TestimonialBlock } from '@/payload-types';

export function Testimonial({ data }: { data: TestimonialBlock | null | undefined }) {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 16,
    },

    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'auto',
          perView: 2.5,
          spacing: 32,
        },
      },
    },

    created() {
      setLoaded(true);
    },
  });

  return (
    data && (
      <section className="container mx-auto bg-gray-50">
        <div className="px-4 py-12 mx-auto sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="items-end justify-between max-w-7xl sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {data.title}
            </h2>

            <div className="flex gap-4 mt-8 lg:mt-0">
              {loaded && instanceRef.current && (
                <>
                  <button
                    aria-label="Previous slide"
                    onClick={(e) => {
                      e.stopPropagation();
                      instanceRef.current?.prev();
                    }}
                    id="keen-slider-previous"
                    className="p-3 transition border rounded-full border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next"
                    onClick={(e) => {
                      e.stopPropagation();
                      instanceRef.current?.next();
                    }}
                    className="p-3 transition border rounded-full border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      className="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 -mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider" ref={sliderRef}>
              {data.reviews && data.reviews.map((r) => <Card {...r} key={r.id} />)}
            </div>
          </div>
        </div>
      </section>
    )
  );
}

function Card(review: {
  rating?: number | null | undefined;
  heading: string;
  text: string;
  customerName?: string | null | undefined;
  id?: string | null | undefined;
}) {
  let stars;

  if (review.rating) {
    stars = Array.from({ length: review.rating }, (_, index) => (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        key={index}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  }

  return (
    <div className="keen-slider__slide">
      <blockquote className="flex flex-col justify-between h-full p-6 bg-white shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {review.rating && review.rating && stars}
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{review.heading}</p>

            <p className="mt-4 leading-relaxed text-gray-700">{review.text}</p>
          </div>
        </div>

        {review.customerName && (
          <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
            &mdash; {review.customerName}
          </footer>
        )}
      </blockquote>
    </div>
  );
}
