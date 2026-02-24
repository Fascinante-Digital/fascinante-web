import type { Metadata } from 'next';

import LegalArticle from '@/components/sections/legal-article';
import { buildAlternates } from '@/lib/seo';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

import CookiePolicy from './cookie-policy.mdx';

const description =
  'Understand what cookies Fascinante Digital uses, why we use them, and how you can manage cookie preferences.';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description,
  alternates: buildAlternates('/cookie-policy'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: toAbsoluteUrl('/cookie-policy'),
    title: `Cookie Policy | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Cookie Policy"
      subtitle="What cookies are, the types we use, and how you can control them."
      updatedAt="Updated Oct 2025"
    >
      <CookiePolicy />
    </LegalArticle>
  );
}
