'use client';
import type { Header as HeaderBlock } from '@/payload-types';
import Link from 'next/link';

type LinkType = NonNullable<HeaderBlock['links']>[number]['link'];

function HeaderButtons({ link }: { link: LinkType }) {
  if (link.type === 'custom') {
    if (link.appearance === 'primary') {
      return (
        link && (
          <>
            <Link
              href={link.url ? link.url : ''}
              onClick={() => {
                document.body.style.overflow = 'unset';
              }}
              target={link.newTab ? '_blank' : '_self'}
              className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              {link.label}
            </Link>
          </>
        )
      );
    }

    return (
      link && (
        <Link
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
          onClick={() => {
            document.body.style.overflow = 'unset';
          }}
          href={link.url ? link.url : ''}
        >
          {link.label}
        </Link>
      )
    );
  }

  if (link.type === 'reference') {
    const doc = link.reference?.value;
    if (typeof doc !== 'string' && doc?.slug) {
      if (link.appearance === 'primary') {
        return (
          link && (
            <Link
              className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              onClick={() => {
                document.body.style.overflow = 'unset';
              }}
              target={link.newTab ? '_blank' : '_self'}
              href={doc.slug}
            >
              {link.label ? link.label : doc.title}
            </Link>
          )
        );
      }

      return (
        <Link
          href={doc.slug}
          onClick={() => {
            document.body.style.overflow = 'unset';
          }}
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
        >
          {link.label ? link.label : doc.title}
        </Link>
      );
    }
  }
}

export default HeaderButtons;
