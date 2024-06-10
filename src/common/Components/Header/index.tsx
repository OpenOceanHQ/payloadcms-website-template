import { getPayload } from 'payload';
import React from 'react';
import configPromise from '@payload-config';
import type { Header as HeaderBlock } from '@/payload-types';
import HeaderMD from '../HeaderMD';

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
      <header className="bg-white relative">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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

            {doc.showLoginButton && (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            )}

            <HeaderMD navLinks={doc.navLinks} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
