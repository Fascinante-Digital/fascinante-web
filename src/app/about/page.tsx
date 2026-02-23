import type { Metadata } from 'next';

import FascinanteAboutHero from '@/components/sections/about-hero';
import FascinanteCta from '@/components/sections/cta';
import FascinantePartnerLogos from '@/components/sections/partner-logos';
import FascinanteTeam from '@/components/sections/team';
import FascinanteThroughYears from '@/components/sections/trough-years';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Learn about Fascinante Digital, our team, and the principles we use to build high-impact digital growth campaigns.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/about'),
    title: `About | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function AboutPage() {
  return (
    <>
      <FascinanteAboutHero />
      <FascinanteThroughYears />
      <FascinanteTeam />
      <FascinantePartnerLogos />
      <FascinanteCta />
    </>
  );
}
