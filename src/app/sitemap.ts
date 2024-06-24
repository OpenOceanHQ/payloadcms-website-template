import { MetadataRoute } from 'next';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const links = [
    {
      url: serverUrl || '',
      lastModified: new Date(),
    },
  ];

  // add pages links
  const pagesData = await payload.find({
    collection: 'pages',
  });

  pagesData.docs.forEach((page) => {
    links.push({
      url: `${serverUrl}${page.slug}`,
      lastModified: new Date(page.updatedAt),
    });
  });

  // add blog links
  const blogData = await payload.find({
    collection: 'blog',
  });

  blogData.docs.forEach((blog) => {
    links.push({
      url: `${serverUrl}blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
    });
  });

  return links;
}
