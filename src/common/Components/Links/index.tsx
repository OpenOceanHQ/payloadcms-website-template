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

export const Links = ({ link }: { link: Link }) => {
  if (link.type === 'custom') {
    if (link.appearance)
      return (
        link && (
          <Link
            href={link.url ? link.url : ''}
            className={`text-gray-700 transition hover:opacity-75`}
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
          className={`text-gray-700 transition hover:opacity-75`}
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
              className={`text-gray-700 transition hover:opacity-75`}
              target={link.newTab ? '_blank' : '_self'}
              href={doc.slug}
            >
              {doc.title}
            </Link>
          )
        );
      }

      return (
        <Link className={`text-gray-700 transition hover:opacity-75`} href={doc.slug}>
          {doc.title}
        </Link>
      );
    }
  }
};
