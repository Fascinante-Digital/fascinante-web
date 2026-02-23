'use client';

import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type FascinanteAboutHeroProps = {
  overline?: string;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function FascinanteAboutHero({
  overline = 'About Us',
  title = 'Meet the Team Behind Fascinante Digital',
  subtitle = 'Discover the passionate team dedicated to helping your business grow through strategic digital marketing and proven results.',
  ctaHref = '/careers',
  ctaLabel = 'See Open Positions',
  imageSrc = '/images/about/hero.webp',
  imageAlt = 'Fascinante Digital team working together',
}: FascinanteAboutHeroProps) {
  return (
    <section id="fascinante-about-hero" className="bg-background px-6">
      <div className="container px-0">
        <div className="mx-auto grid max-w-4xl content-center gap-3 pt-8 pb-6 sm:gap-4 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12">
          <Badge align="left" className="sm:text-center">
            {overline}
          </Badge>

          <h1 className="text-foreground text-h1 text-left font-medium tracking-tight text-balance sm:text-center">
            {title}
          </h1>

          <p className="text-muted-foreground md:text-md mx-auto max-w-2xl text-left text-base sm:text-center sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-2 flex w-full justify-center">
            <Button
              asChild
              variant="marketing"
              className="w-full sm:w-auto"
              aria-label={ctaLabel}
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="px-6 sm:px-8">
          <div className="border-border-light shadow-light bg-card mx-auto max-w-5xl overflow-hidden rounded-t-sm border md:rounded-t-[12px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2400}
              height={1400}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority={false}
            />
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
