import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Badge from '@/components/ui/badge';

const FascinanteHero = () => {
  return (
    <section
      id="fascinante-hero"
      className="bg-background border-b-border relative overflow-hidden border-b px-6"
    >
      <div className="container px-0">
        <div className="mx-auto grid max-w-4xl gap-3 sm:gap-4 pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12 content-center">
          <Badge align="left" className="sm:text-center">Digital Marketing</Badge>
          <h1 className="text-foreground text-h1 font-medium tracking-tight text-balance text-left sm:text-center">
            Digital Marketing That Grows Your Business
          </h1>
          <p className="text-muted-foreground md:text-md mx-auto max-w-2xl text-base sm:text-lg text-left sm:text-center">
            Attract more leads, convert better, and grow your online presence.
            Our solutions help businesses scale with data-driven marketing strategies.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 w-full">
            <Button
              asChild
              className="w-full sm:w-auto"
              aria-label="Get started"
            >
              <Link href="/pricing">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
              aria-label="Contact us"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[994px] items-center justify-center rounded-t-[16px] bg-white/20 shadow-[0_15px_80px_-1px_rgba(8,9,10,0.04)] backdrop-blur-[20px]">
          <Image
            src="/images/homepage/hero/Dashboard.webp"
            alt="Fascinante Digital dashboard preview"
            width={994}
            height={707}
            priority
            sizes="(max-width: 1024px) 100vw, 994px"
            className="h-auto w-full rounded-t-[16px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default FascinanteHero;
