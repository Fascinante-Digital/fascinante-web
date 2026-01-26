'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

type FascinanteIntegrationsHeroProps = {
  overline?: string;
  title?: string;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export default function FascinanteIntegrationsHero({
  overline = 'Integrations',
  title = 'Marketing Tools We Integrate With',
  description = 'Connect your favorite marketing platforms and automate workflows. Sync data across your marketing stack for better insights and results.',
  primaryCtaHref = '/pricing',
  primaryCtaLabel = 'Get Started',
  secondaryCtaHref = '/contact',
  secondaryCtaLabel = 'Contact Us',
}: FascinanteIntegrationsHeroProps) {
  return (
    <section
      id="fascinante-integrations-hero"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20 md:py-24">
            <p className="text-tagline mb-4 text-sm sm:text-base">{overline}</p>

            <h1 className="text-foreground text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
              {title}
            </h1>

            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Button asChild className="w-full sm:w-auto">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
