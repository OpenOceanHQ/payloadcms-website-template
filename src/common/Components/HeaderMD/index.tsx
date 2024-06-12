'use client';

import { IoCloseOutline } from 'react-icons/io5';
import type { Header as HeaderBlock } from '@/payload-types';
import React, { useState } from 'react';
import HeaderButtons from '../HeaderButtons';
import Link from 'next/link';

function HeaderMD({
  navLinks,
  buttons,
}: {
  navLinks: HeaderBlock['navLinks'];
  buttons: HeaderBlock['links'];
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        <button
          className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          onClick={() => {
            setShow((pre) => !pre);
            if (typeof window != 'undefined' && window.document) {
              document.body.style.overflow = 'hidden';
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden bg-white z-50 absolute flex items-center justify-center overflow-hidden transition-all ease-in-out duration-200 w-[100vw] top-0 left-0 ${
          show ? 'h-[100vh]' : 'h-0'
        }`}
      >
        <div className="">
          <div className="flex items-start justify-center flex-col gap-5">
            {navLinks.map((item, idx) => {
              const l = item.reference?.value;
              let link = '';
              if (typeof l !== 'string' && l?.slug) {
                link = l?.slug;
              }

              return (
                <div key={idx}>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    onClick={() => {
                      document.body.style.overflow = 'unset';
                    }}
                    href={link}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}

            {buttons &&
              buttons.length > 0 &&
              buttons.map(({ link }, idx) => <HeaderButtons link={link} key={idx + link.label} />)}
          </div>

          <button
            className="absolute right-10 top-10"
            onClick={() => {
              setShow((pre: boolean) => !pre);
              document.body.style.overflow = 'unset';
            }}
          >
            <IoCloseOutline className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderMD;
