import type { Metadata } from 'next';

import FeaturedPost from '@/components/sections/blog-featured';
import FascinanteBlogGrid from '@/components/sections/blog-grid';
import type { BlogPost } from '@/lib/blog';
import { getAllBlogs } from '@/lib/blog';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Read practical digital marketing insights, campaign strategy breakdowns, and growth playbooks from the Fascinante Digital team.';

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/blog'),
    title: `Blog | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

function extractChip(post: BlogPost): string {
  const fromTagline =
    typeof post.tagline === 'string' ? post.tagline.trim() : '';
  const fromTags =
    Array.isArray(post.tags) && typeof post.tags[0] === 'string'
      ? post.tags[0].trim()
      : '';
  return fromTagline || fromTags || 'General';
}

export default function BlogPage() {
  const allPosts = getAllBlogs();

  const featured = allPosts.find((p) => p.featured) ?? null;

  // grid cards
  const gridPosts = allPosts.map((p) => ({
    slug: p.slug,
    title:
      (typeof p.title === 'string' ? p.title.trim() : '') ||
      p.slug.replace(/-/g, ' '),
    tagline: extractChip(p),
    intro: p.description ?? '',
    author: p.author ?? '',
    date: p.date ?? '',
    coverImage: p.coverImage ?? '',
  }));

  return (
    <>
      <section className="bg-background px-6 lg:px-0">
        <div className="container px-0 md:px-6">
          <div className="bg-features-hero relative overflow-hidden">
            <div className="px-6 py-14 sm:px-8 sm:py-18 md:py-20">
              <p className="text-tagline text-sm sm:text-base">Our Blog</p>

              <h1 className="text-foreground text-h1 mt-4 font-semibold tracking-tighter">
                Digital Marketing Insights & Strategies
              </h1>

              <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg">
                Expert advice, proven strategies, and actionable tips to grow
                your business online.
              </p>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </section>
      {featured && <FeaturedPost post={featured} />}
      <FascinanteBlogGrid posts={gridPosts} />
    </>
  );
}
