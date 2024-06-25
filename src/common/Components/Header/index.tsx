import { getPayload } from 'payload';
import React from 'react';
import configPromise from '@payload-config';
import type { Header as HeaderBlock } from '@/payload-types';
import HeaderMD from '../HeaderMD';
import { MediaImage } from '../MediaImage';
import HeaderButtons from '../HeaderButtons';
import Link from 'next/link';
import { AdminBar } from '../PayloadAdminBar';

export const siteName: { siteName: string } = { siteName: '' };

async function Header() {
  const payload = await getPayload({ config: configPromise });

  const doc: HeaderBlock = await payload.findGlobal({
    slug: 'header' as never,
  });

  if (!doc) {
    return null;
  }

  siteName.siteName = doc.storeName;

  return (
    <div>
      <AdminBar />
      <header className="bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center relative h-16">
            <div className="flex justify-start">
              <Link className="text-teal-600 flex gap-3 justify-center items-center" href="/">
                {doc.showStoreLogo && <MediaImage className="h-14 w-auto p-2" media={doc.logo} />}
                <span className="">{doc.storeName}</span>
              </Link>
            </div>

            <div className="flex justify-center">
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
                        <Link
                          className="text-gray-500 transition hover:text-gray-500/75"
                          href={link}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="flex justify-end">
              {doc.links && doc.links.length > 0 && (
                <>
                  <div className="hidden md:flex md:gap-4">
                    {doc.links.map(({ link }, idx) => (
                      <HeaderButtons link={link} key={idx + link.label} />
                    ))}
                  </div>
                </>
              )}

              <HeaderMD navLinks={doc.navLinks} buttons={doc.links} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
