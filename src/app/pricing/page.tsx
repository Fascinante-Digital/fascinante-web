import type { Metadata } from 'next';

import FascinanteCta from '@/components/sections/cta';
import FascinanteFaq from '@/components/sections/faq';
import FascinanteFeaturesIncluded from '@/components/sections/features-included';
import FascinantePricingHero from '@/components/sections/pricing-hero';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Review Fascinante Digital pricing plans and compare feature coverage for teams at every growth stage.';

export const metadata: Metadata = {
  title: 'Pricing',
  description,
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/pricing'),
    title: `Pricing | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Pricing | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function PricingPage() {
  return (
    <>
      <FascinantePricingHero />
      <FascinanteFeaturesIncluded />
      <FascinanteFaq />
      <FascinanteCta />
    </>
  );
}
