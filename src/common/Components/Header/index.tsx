import { getPayload } from 'payload';
import React from 'react';
import configPromise from '@payload-config';
import type { Header as HeaderBlock } from '@/payload-types';

async function Header() {
  const payload = await getPayload({ config: configPromise });

  const doc: HeaderBlock = await payload.findGlobal({
    slug: 'header' as never,
  });

  if (!doc) {
    return null;
  }

  return (
    <div>
      <header className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="">{doc.storeName}</span>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {doc.navLinks.map((item, idx) => {
                    const l = item.reference?.value;
                    let link = '';
                    if (typeof l !== 'string' && l?.slug) {
                      link = l?.slug;
                    }

                    return (
                      <li key={idx}>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href={link}>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {doc.links && doc.links.length > 0 && (
                <>
                  <div className="sm:flex sm:gap-4">
                    {doc.links.map(({ link }) => {
                      return link.appearance === 'primary' ? (
                        <a
                          className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                          href={link.url ? link.url : ''}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                          href={link.url ? link.url : ''}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
