import type { MetadataRoute } from 'next';

import { getAllBlogs } from '@/lib/blog';
import { toAbsoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

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
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogs().map((post) => {
    const parsedDate = new Date(post.date);
    const lastModified = Number.isNaN(parsedDate.getTime()) ? now : parsedDate;

    return {
      url: toAbsoluteUrl(`/blog/${post.slug}`),
      lastModified,
    };
  });

  return [...staticEntries, ...blogEntries];
}
