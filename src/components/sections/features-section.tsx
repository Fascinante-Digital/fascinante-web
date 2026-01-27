'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Badge from '@/components/ui/badge';

type FeaturesHeroProps = {
  overline?: string;
  title?: string;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  imageSrc?: string;
};

export default function FascinanteFeaturesHero({
  overline = 'Our Services',
  title = 'Digital Marketing Solutions for Your Business',
  description = `Strategic marketing services designed to grow your online presence, attract qualified leads, and convert visitors into loyal customers.`,
  primaryCtaHref = '/pricing',
  primaryCtaLabel = 'Get Started',
  secondaryCtaHref = '/contact',
  secondaryCtaLabel = 'Contact Us',
  imageSrc = '/images/features/feature.webp',
}: FeaturesHeroProps) {
  return (
    <section id="fascinante-features-hero" className="bg-features-hero px-6">
      <div className="container px-0">
        <div className="relative overflow-hidden content-center">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 justify-items-start pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12 pl-0 pr-0 content-center">
            <div className="max-w-xl pl-0 text-left">
              <Badge align="left">{overline}</Badge>

              <h1 className="text-foreground text-h1 tracking-tight font-medium">
                {title.split('\n').map((line, i) => (
                  <span key={i} className={i > 0 ? 'block' : undefined}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-muted-foreground mt-4 text-base sm:text-lg">
                {description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
                </Button>

                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-end w-full">
              <div className="border-border-light shadow-soft relative aspect-[10/9] overflow-hidden rounded-[16px] border bg-white lg:w-[500px] w-full">
                <Image
                  src={imageSrc}
                  alt="Digital marketing services preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
