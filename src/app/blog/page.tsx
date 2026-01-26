import FeaturedPost from '@/components/sections/blog-featured';
import FascinanteBlogGrid from '@/components/sections/blog-grid';
import type { BlogPost } from '@/lib/blog';
import { getAllBlogs } from '@/lib/blog';

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
            <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 sm:py-18 md:py-20">
              <p className="text-tagline text-sm sm:text-base">Our Blog</p>

              <h1 className="text-foreground mt-4 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
                Digital Marketing Insights & Strategies
              </h1>

              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                Expert advice, proven strategies, and actionable tips to grow your business online.
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
