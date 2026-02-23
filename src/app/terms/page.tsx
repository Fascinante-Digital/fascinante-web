import type { Metadata } from 'next';

import LegalArticle from '@/components/sections/legal-article';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

import Terms from './terms.mdx';

const description =
  "Read Fascinante Digital's Terms of Service, including platform usage policies and legal obligations.";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description,
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/terms'),
    title: `Terms of Service | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Terms of Service"
      subtitle="These terms govern your use of Fascinante Digital's services and website."
      updatedAt="Updated Feb 2026"
    >
      <Terms />
    </LegalArticle>
  );
}
