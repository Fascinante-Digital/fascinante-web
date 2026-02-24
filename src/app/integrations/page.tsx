import type { Metadata } from 'next';

import FascinanteAllIntegrations from '@/components/sections/all-integrations';
import FascinanteCta from '@/components/sections/cta';
import FascinanteIntegrationsHero from '@/components/sections/integrations-hero';
import { buildAlternates } from '@/lib/seo';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Explore Fascinante Digital integrations that connect your marketing stack and automate campaign operations end-to-end.';

export const metadata: Metadata = {
  title: 'Integrations',
  description,
  alternates: buildAlternates('/integrations'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: toAbsoluteUrl('/integrations'),
    title: `Integrations | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Integrations | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <FascinanteIntegrationsHero />
      <FascinanteAllIntegrations />
      <FascinanteCta />
    </>
  );
}
