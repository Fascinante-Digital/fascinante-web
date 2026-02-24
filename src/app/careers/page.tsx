import type { Metadata } from 'next';

import FascinanteCareersHero from '@/components/sections/careers-hero';
import FascinanteCta from '@/components/sections/cta';
import FascinanteJobOpenings from '@/components/sections/job-openings';
import FascinanteMission from '@/components/sections/mission';
import FascinantePerks from '@/components/sections/perks';
import { buildAlternates } from '@/lib/seo';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Join Fascinante Digital and help build digital growth programs, high-performance campaigns, and customer-first experiences.';

export const metadata: Metadata = {
  title: 'Careers',
  description,
  alternates: buildAlternates('/careers'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: toAbsoluteUrl('/careers'),
    title: `Careers | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Careers | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function CareersPage() {
  return (
    <>
      <FascinanteCareersHero />
      <FascinanteMission />
      <FascinantePerks />
      <FascinanteJobOpenings />
      <FascinanteCta />
    </>
  );
}
