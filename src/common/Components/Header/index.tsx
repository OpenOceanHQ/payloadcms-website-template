import { getPayload } from 'payload';
import React from 'react';
import configPromise from '@payload-config';
import type { Header as HeaderBlock, Page } from '@/payload-types';
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

  if (doc.showBlogs) {
    doc.navLinks.push({
      title: 'Blogs',
      reference: { relationTo: 'pages', value: { slug: '/blog' } as Page },
    });
  }

  return (
    <div>
      <AdminBar />
      <header className="relative bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="flex items-center justify-center gap-3 text-teal-600" href="/">
                {doc.showStoreLogo && <MediaImage className="w-auto p-2 h-14" media={doc.logo} />}
                <span className="">{doc.storeName}</span>
              </Link>
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

            <div className="flex items-center gap-4">
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
