import type { Metadata } from 'next';

import FascinanteCta from '@/components/sections/cta';
import FascinanteFeatureBenefits from '@/components/sections/feature-benefits';
import FascinanteFeaturePricing from '@/components/sections/feature-pricing';
import FascinanteFeaturesHero from '@/components/sections/features-section';
import FascinanteIntegrations from '@/components/sections/integrations';
import FascinanteFeaturesTabs from '@/components/sections/tabs';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'See Fascinante Digital platform features, marketing capabilities, and workflows designed to accelerate campaign performance.';

export const metadata: Metadata = {
  title: 'Features',
  description,
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/features'),
    title: `Features | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Features | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <FascinanteFeaturesHero />
      <FascinanteFeatureBenefits />
      <FascinanteFeaturesTabs />
      <FascinanteFeaturePricing />
      <FascinanteIntegrations />
      <FascinanteCta />
    </>
  );
}
