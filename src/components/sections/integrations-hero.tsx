'use client';

import Link from 'next/link';

import Badge from '@/components/ui/badge';
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
      className="bg-features-hero px-6"
    >
      <div className="container px-0">
        <div className="mx-auto grid max-w-4xl gap-3 sm:gap-4 pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12 content-center">
          <Badge align="left" className="sm:text-center">{overline}</Badge>

          <h1 className="text-foreground text-h1 font-medium tracking-tight text-balance text-left sm:text-center">
            {title}
          </h1>

          <p className="text-muted-foreground md:text-md mx-auto max-w-2xl text-base sm:text-lg text-left sm:text-center">
            {description}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 w-full">
            <Button
              asChild
              className="w-full sm:w-auto"
              aria-label={primaryCtaLabel}
            >
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
              aria-label={secondaryCtaLabel}
            >
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
