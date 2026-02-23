import type { MetadataRoute } from 'next';

import { siteConfig, toAbsoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteConfig.url,
    sitemap: toAbsoluteUrl('/sitemap.xml'),
  };
}
