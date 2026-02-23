import type { Metadata } from 'next';

import FascinanteContact from '@/components/sections/contact-section';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Contact Fascinante Digital to discuss growth strategy, campaigns, and custom digital marketing support for your business.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/contact'),
    title: `Contact | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function ContactPage() {
  return (
    <>
      <FascinanteContact />
    </>
  );
}
