import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';

import FascinanteBlogPost from '@/components/sections/blog-post';
import { getBlogBySlug, getBlogSlugs } from '@/lib/blog';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

function getOgImagePath(coverImage: string): string {
  return coverImage?.trim() || siteConfig.defaultOgImagePath;
}

function toIsoDate(value: string): string | undefined {
  if (!value) {
    return undefined;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    const canonicalPath = `/blog/${post.slug}`;
    const description =
      post.description || 'Read this article from Fascinante Digital.';
    const ogImage = toAbsoluteUrl(getOgImagePath(post.coverImage));

    return {
      title: post.title,
      description,
      alternates: {
        canonical: canonicalPath,
      },
      openGraph: {
        type: 'article',
        url: toAbsoluteUrl(canonicalPath),
        title: post.title,
        description,
        siteName: siteConfig.name,
        images: [ogImage],
        publishedTime: toIsoDate(post.date),
        authors: post.author ? [post.author] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: 'Article',
      description: 'Read this article from Fascinante Digital.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <FascinanteBlogPost
      tagline={post.tagline}
      title={post.title}
      intro={post.description}
      image={post.coverImage}
      author={post.author}
      published={post.date}
    >
      {content}
    </FascinanteBlogPost>
  );
}
