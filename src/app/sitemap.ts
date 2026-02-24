import type { MetadataRoute } from 'next';

import { getAllBlogs } from '@/lib/blog';
import { toAbsoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

function localizedAlternates(pathname: string) {
  const absoluteUrl = toAbsoluteUrl(pathname);

  return {
    languages: {
      'en-US': absoluteUrl,
      'x-default': absoluteUrl,
    },
  } as const;
}

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/careers',
  '/contact',
  '/cookie-policy',
  '/features',
  '/integrations',
  '/pricing',
  '/privacy',
  '/terms',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteUrl(route),
    lastModified: now,
    alternates: localizedAlternates(route),
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogs().map((post) => {
    const parsedDate = new Date(post.date);
    const lastModified = Number.isNaN(parsedDate.getTime()) ? now : parsedDate;

    return {
      url: toAbsoluteUrl(`/blog/${post.slug}`),
      lastModified,
      alternates: localizedAlternates(`/blog/${post.slug}`),
    };
  });

  return [...staticEntries, ...blogEntries];
}
