import type { Metadata } from 'next';

import { Hero239 } from '@/components/hero239';
import FascinanteCta from '@/components/sections/cta';
import FascinanteFaq from '@/components/sections/faq';
import FascinanteFeaturedBlogPosts, {
  FeaturedCard,
} from '@/components/sections/featured-blog-posts';
import FascinanteFeatures from '@/components/sections/features';
import FascinanteIntegrations from '@/components/sections/integrations';
import FascinanteLogos from '@/components/sections/logos';
import FascinanteTestimonials from '@/components/sections/testimonials';
import { JsonLd } from '@/components/seo/json-ld';
import { getAllBlogs } from '@/lib/blog';
import { organizationJsonLd } from '@/lib/business-entity';
import { buildAlternates } from '@/lib/seo';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'White-Label Reputation Platform',
  description:
    'White-label reputation infrastructure for agencies to automate review growth, AI replies, and monthly client reporting at scale.',
  alternates: buildAlternates('/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: toAbsoluteUrl('/'),
    title: siteConfig.name,
    description:
      'White-label reputation infrastructure for agencies to automate review growth, AI replies, and monthly client reporting at scale.',
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description:
      'White-label reputation infrastructure for agencies to automate review growth, AI replies, and monthly client reporting at scale.',
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function Home() {
  const latest = getAllBlogs()
    .filter((p) => p.latest)
    .slice(0, 4);

  const cards: FeaturedCard[] = latest.map((p) => ({
    slug: p.slug,
    title: p.title,
    intro: p.description,
    tagline: p.tagline,
    author: p.author,
    date: p.date,
    coverImage: p.coverImage,
  }));

  return (
    <>
      <JsonLd id="organization-jsonld" data={organizationJsonLd} />
      <Hero239 />
      <FascinanteLogos />
      <FascinanteFeatures />
      <FascinanteIntegrations />
      <FascinanteTestimonials />
      <FascinanteFaq />
      <FascinanteFeaturedBlogPosts posts={cards} />
      <FascinanteCta />
    </>
  );
}
