import { Page } from '@/payload-types';
import Link from 'next/link';

interface Link {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: 'pages';
    value: string | Page;
  } | null;
  url?: string | null;
  label?: string;
  appearance?: ('primary' | 'secondary') | null;
}

export const LinkButton = ({ link, className }: { link: Link; className?: string }) => {
  if (link.type === 'custom') {
    if (link.appearance)
      return (
        link && (
          <Link
            href={link.url ? link.url : ''}
            className={`${className} mr-2 mt-2 inline-block rounded border border-indigo-600 ${
              link.appearance === 'primary' && 'bg-indigo-600'
            } px-12 py-3 text-sm font-medium ${
              link.appearance === 'primary' ? 'text-white' : 'text-indigo-600'
            } transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400`}
            target={link.newTab ? '_blank' : '_self'}
          >
            {link.label}
          </Link>
        )
      );

    return (
      link && (
        <Link
          href={link.url ? link.url : ''}
          className={`${className} text-sm font-semibold leading-6 text-indigo-600`}
        >
          {link.label}
        </Link>
      )
    );
  }

  if (link.type === 'reference') {
    const doc = link.reference?.value;
    if (typeof doc !== 'string' && doc?.slug) {
      if (link.appearance) {
        return (
          link && (
            <Link
              className={`${className} mr-2 mt-2 inline-block rounded border border-indigo-600 ${
                link.appearance === 'primary' && 'bg-indigo-600'
              } px-12 py-3 text-sm font-medium ${
                link.appearance === 'primary' ? 'text-white' : 'text-indigo-600'
              } transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400`}
              target={link.newTab ? '_blank' : '_self'}
              href={doc.slug}
            >
              {doc.title}
            </Link>
          )
        );
      }

      return (
        <Link
          className={`${className} text-gray-500 transition hover:text-gray-500/75`}
          href={doc.slug}
        >
          {doc.title}
        </Link>
      );
    }
  }
};
