import FascinanteCta from '@/components/sections/cta';
import FascinanteFaq from '@/components/sections/faq';
import FascinanteFeaturedBlogPosts, {
  FeaturedCard,
} from '@/components/sections/featured-blog-posts';
import FascinanteFeatures from '@/components/sections/features';
import FascinanteHero from '@/components/sections/hero';
import FascinanteIntegrations from '@/components/sections/integrations';
import FascinanteLogos from '@/components/sections/logos';
import FascinanteTestimonials from '@/components/sections/testimonials';
import { getAllBlogs } from '@/lib/blog';

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
      <FascinanteHero />
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
