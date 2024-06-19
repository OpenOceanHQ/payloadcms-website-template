'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export function BlogBreadCrumbs() {
  const router = usePathname();

  const isBlog = router.endsWith('blog');

  let pathname = router
    .split('/')
    .filter((x) => x)
    .pop();

  if (pathname?.includes('#')) {
    pathname = pathname.split('#')[0];
  }

  return (
    <div className="text-sm breadcrumbs flex justify-start">
      <ul className="flex items-center justify-center">
        <li className="flex gap-1 items-center justify-center">
          <Link href="/" className="capitalize">
            Home
          </Link>
          <MdOutlineKeyboardArrowRight className="w-5 h-5 opacity-70" />
        </li>
        <li className="flex gap-1 items-center justify-center">
          <Link href="/blog">Blog</Link>
          <MdOutlineKeyboardArrowRight className="w-5 h-5 opacity-70" />
        </li>

        {!isBlog && (
          <li>
            <span className="capitalize">{pathname?.split('-').join(' ')}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
