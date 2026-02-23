import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ThreeDMarquee } from '@/components/aceternity/3d-marquee';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Hero239Props = {
  className?: string;
};

const images = [
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg',
  'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg',
];

export default function Hero239({ className }: Hero239Props) {
  return (
    <section
      id="hero239"
      className={cn(
        'relative overflow-hidden px-6 py-20 sm:py-24 lg:py-32',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,oklch(0.98_0.03_280)_0%,oklch(1_0_89.88)_55%)]" />

      <div className="container flex flex-col items-center justify-center gap-6 px-0 text-center md:px-6">
        <p className="bg-muted text-muted-foreground w-fit rounded-full px-4 py-1 text-xs font-medium tracking-[0.12em] uppercase">
          shadcnblocks
        </p>

        <h1 className="max-w-xl text-5xl leading-[1.02] font-semibold tracking-tight md:text-6xl lg:max-w-3xl lg:text-7xl">
          Unlock the Premium Blocks with one-time payment
        </h1>

        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
          Build polished interfaces faster with battle-tested components,
          production-ready patterns, and design quality that scales with your
          product.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="h-11 px-6">
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="h-11 px-4">
            <Link href="/features" className="inline-flex items-center gap-2">
              Explore Benefits
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 w-full">
          <ThreeDMarquee images={images} />
        </div>
      </div>
    </section>
  );
}
