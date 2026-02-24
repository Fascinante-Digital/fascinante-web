import type { Metadata } from 'next';

import LegalArticle from '@/components/sections/legal-article';
import { buildAlternates } from '@/lib/seo';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

import Privacy from './privacy.mdx';

const description =
  'Review how Fascinante Digital collects, processes, and protects personal data through our Privacy Policy.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description,
  alternates: buildAlternates('/privacy'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: toAbsoluteUrl('/privacy'),
    title: `Privacy Policy | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Privacy Policy"
      subtitle="How Fascinante Digital collects, uses, and protects your information."
      updatedAt="Updated Feb 2026"
    >
      <Privacy />
    </LegalArticle>
  );
}
